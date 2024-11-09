import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import {
  Users,
  PhoneCall
} from 'lucide-react'


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
      icon: Users,
      description: "Total de administradores cadastrados no site da Zenith Credit",
      value: 3
    }
  ]
  return (
    <div className="m-4 mt-12 p-4">
      <h1 className="text-3xl text-slate-800 uppercase">Painel de <strong>Administração</strong></h1>
      <section className="grid grid-cols-2 gap-4">
        <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className='text-lg sm:text-xl text-slate-800 select-none'>Usuários Cadastrados</CardTitle>
            <Users/>
          </div>
          <CardDescription>
            Total de usuários cadastrados no site da Zenith Credit
          </CardDescription>
        </CardHeader>
          <CardContent>
            <p className="text-base sm:text-4xl font-bold">1337</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}