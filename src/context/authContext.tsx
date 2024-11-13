import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import axios from "axios";

interface AuthContextType {
  user: any;
  token: string | null;
  login: (userData: any, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("@zenithcredit:user");
    const storedToken = localStorage.getItem("@zenithcredit:token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    async function verifyToken() {
      const zenithToken = localStorage.getItem("@zenithcredit:token");
      if (zenithToken) {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/admins/verify`,
            {
              headers: {
                authorization: `Bearer ${zenithToken}`,
              },
            },
          );
          console.log(data.success);
        } catch (error) {
          console.log(error);
          setUser(null);
          setToken(null);
        }
      }
    }
    verifyToken();
  }, []);

  const login = useCallback((userData: any, token: string) => {
    try {
      setUser(userData);
      setToken(token);
      localStorage.setItem("@zenithcredit:user", JSON.stringify(userData));
      localStorage.setItem("@zenithcredit:token", token);
      console.log("Logou");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("@zenithcredit:token");
    localStorage.removeItem("@zenithcredit:user");
  },[]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
