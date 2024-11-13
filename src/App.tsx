import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
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
import { AuthProvider } from "./context/authContext";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <SideBar />
          <main className="w-full h-full">
            <header className="flex fixed bg-white w-full shadow-sm h-8">
              <SidebarTrigger size={"sm"} />
              <h2 className="text-2xl font-bold uppercase text-slate-500 text-center ml-4">
                Zenith Credit
              </h2>
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
                element={<VehicleGuaranteeLoan />}
              />
              <Route
                path="/acessar/admin"
                element={<AdminLogin />}
              />

              {/* Rotas Privadas / Com necessidade de autenticação */}

              <Route path="/admin/painel" element={<Dashboard />} />
              <Route path="/admin/contatos" element={<ContactView />} />
              <Route path="/admin/cadastros" element={<RegistersView />} />
              <Route path="/admin/cadastros/:id" element={<RegisterView />} />
            </Routes>
            <WhatsAppButton />
            <Footer />
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
