import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App