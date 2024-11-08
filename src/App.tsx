import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Home from './pages/Home'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <SideBar/>
      <main className="w-full h-full">
        <header className="flex fixed bg-white w-full shadow-sm h-8">
          <SidebarTrigger size={"sm"}/>
          <h2 className="text-2xl font-bold uppercase text-slate-500 text-center ml-4">Zenith Credit</h2>
          <div></div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contato" element={<Contact/>} />
          <Route path="/sobre-nos" element={<About/>} />
        </Routes>
        <WhatsAppButton/>
        <Footer/>
      </main>  
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App