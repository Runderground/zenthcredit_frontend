import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import {
  Users,
  PhoneCall,
  ShieldCheck,
  Timer
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs'


export default function Dashboard() {

  const Items = [
    {
      title: "Usuários Cadastrados",
      icon: Users,
      description: "Total de usuários cadastrados no site da Zenith Credit.",
      value: 999
    },
    {
      title: "Requisições de Contatos",
      icon: PhoneCall,
      description: "Contatos em aberto para serem atendidos.",
      value: 27
    },
    {
      title: "Administradores",
      icon: ShieldCheck,
      description: "Total de administradores cadastrados no site da Zenith Credit",
      value: 3
    }
  ]
  return (
    <div className="m-4 mt-12 p-4">
      <h1 className="text-3xl text-slate-800 uppercase mb-4">Painel de <strong>Administração</strong></h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Items.map(item => (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className='text-lg  text-slate-800 select-none'>{item.title}</CardTitle>
              <item.icon/>
            </div>
            <CardDescription>
              {item.description}
            </CardDescription>
          </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className='text-lg  text-slate-800 select-none'>Últimos usuários cadastrados</CardTitle>
            <Timer/>
          </div>
          <CardDescription>
            Aqui está a lista dos últimos 10 usuários que fizeram o cadastro.
          </CardDescription>
        </CardHeader>
          <CardContent>
            <div className="flex items-center p-2 border border-slate-300 rounded-lg gap-4 justify-between">
              <div className="flex gap-2 items-center">
                <img className="w-8 h-8 rounded-full"src="https://github.com/Runderground.png"/>
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-700">Rafael Bueno</h4>
                  <span className="text-slate-500 text-sm">(11) 99418-7606</span>
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Ver</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className='text-lg  text-slate-800 select-none'>Últimos pedidos de contatos</CardTitle>
              <Timer/>
            </div>
            <CardDescription>
              Aqui está a lista dos últimos 10 usuários que fizeram o cadastro.
            </CardDescription>
          </CardHeader>
            <CardContent>
                <div className="flex items-center p-2 border border-slate-300 rounded-lg gap-4 justify-between">
                  <div className="flex gap-2 items-center">
                    <img className="w-8 h-8 rounded-full"src="https://github.com/Runderground.png"/>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-slate-700">Rafael Bueno</h4>
                      <span className="text-slate-500 text-sm">(11) 99418-7606</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Button>Ver</Button>
                    <Button className="bg-green-400 hover:bg-green-500"><BsWhatsapp/></Button>
                  </div>
                </div>
            </CardContent>
          </Card>
      </section>
    </div>
  )
}