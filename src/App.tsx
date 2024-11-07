import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <main className="w-full h-full">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App