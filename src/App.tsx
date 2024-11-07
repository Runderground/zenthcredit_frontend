import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Home from './pages/Home'
import SideBar from './components/SideBar'

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <SideBar/>
      <main className="w-full h-full">
        <header className="flex bg-white w-full shadow-sm h-8 items-center justify-between">
          <SidebarTrigger size={"sm"}/>
          <h2 className="text-2xl font-bold uppercase text-slate-500">Zenith Credit</h2>
          <div></div>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>  
      </SidebarProvider>
    </BrowserRouter>
  )
}

export default App