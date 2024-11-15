import { BsWhatsapp } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

export default function WhatsAppButton() {
  const location = useLocation()
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511991184877?text=Olá, vim pelo site da Zenith Credit e gostaria de mais informações.', '_blank')
}
  if (!location.pathname.startsWith("/admin/")) {
    return (
      <a onClick={handleWhatsApp} className="fixed bottom-20 right-5 bg-green-500 p-4 text-5xl text-white rounded-full shadow-lg shadow-slate-600/30 cursor-pointer"><BsWhatsapp/></a>
    )
  }
}