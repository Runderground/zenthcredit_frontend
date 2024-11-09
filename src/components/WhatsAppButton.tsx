import { BsWhatsapp } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

export default function WhatsAppButton() {
  const location = useLocation()
  if (!location.pathname.startsWith("/admin/")) {
    return (
      <a className="fixed bottom-20 right-5 bg-green-500 p-4 text-5xl text-white rounded-full shadow-lg shadow-slate-600/30 cursor-pointer"><BsWhatsapp/></a>
    )
  }
}