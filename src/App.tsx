import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/adminPages/Dashboard";
import ContactView from "./pages/adminPages/ContactView";
import RegistersView from "./pages/adminPages/RegistersView";
import RegisterView from "./pages/adminPages/RegisterView";
import SimuladorDeEmprestimo from "./pages/SimuladorDeEmprestimo";
import MultiStepForm from "./pages/MultiStepForm";
import VehicleGuaranteeLoan from "./pages/loanPages/VehicleGuaranteeLoan";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./pages/AdminLogin";
import { useAuth } from './context/authContext'
import AdminsView from "./pages/adminPages/AdminsView";
import PropertyGuaranteeLoan from "./pages/loanPages/PropertyGuaranteeLoan";
import PersonalLoan from "./pages/loanPages/PersonalLoan";

function App() {
  
  const {token} = useAuth()
  return (
    <BrowserRouter>
        <SidebarProvider>
          <SideBar />
          <main className="w-full h-full">
            <header className="flex fixed bg-slate-800 w-full shadow-sm h-16 items-center z-20">
              <SidebarTrigger className="text-blue-500 hover:bg-transparent" size={"lg"} />
              <h2 className="self-center font-bold text-blue-500 uppercase text-2xl">Zenith Credit</h2>
              <div></div>
            </header>
            <Routes>
              {/* Rotas Públicas / Sem necessidade de Autenticação */}
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/sobre-nos" element={<About />} />
              <Route path="/registro" element={<MultiStepForm />} />
              <Route
                path="/simular-emprestimo"
                element={<SimuladorDeEmprestimo />}
              />
              <Route
                path="/emprestimos/garantia-veiculo"
                element={<VehicleGuaranteeLoan />}
              />
              <Route
                path="/emprestimos/garantia-imovel"
                element={<PropertyGuaranteeLoan />}
              />
              <Route
                path="/emprestimos/pessoal"
                element={<PersonalLoan />}
              />
              <Route
                path="/acessar/admin"
                element={token ? <Dashboard/> : <AdminLogin />}
              />

              {/* Rotas Privadas / Com necessidade de autenticação */}

              <Route path="/admin/painel" element={token ? <Dashboard /> : <Home />} />
              <Route path="/admin/contatos" element={token ? <ContactView/> : <Home/>} />
              <Route path="/admin/cadastros" element={token ? <RegistersView /> : <Home/>} />
              <Route path="/admin/admins" element={token ? <AdminsView /> : <Home/>} />
              <Route path="/admin/cadastros/:id" element={token ? <RegisterView /> : <Home/>} />
            </Routes>
            <WhatsAppButton />
            <Toaster
              position="bottom-right"
              toastOptions={{
                error: {
                  style: {
                    background: "rgba(255,100,100)",
                    color: "white",
                  },
                },
                success: {
                  style: {
                    background: "rgba(50, 200 , 50)",
                    color: "white",
                  },
                },
              }}
            />
          </main>
        </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
