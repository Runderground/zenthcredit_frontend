import {
    Link,
  useParams
} from 'react-router-dom'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent
} from '@/components/ui/card'

import {
  ChevronLeft
} from 'lucide-react'

export default function RegisterView() {
  const location = useParams()
  console.log(location)
  const users = [
    {
      id: 1,
      nome: "João Silva",
      email: "ejeyd@example.com",
      telefone: "(11) 99999-9999",
      cpf: "452.423.424-52",
      nascimento: "12-04-2000",
      rendamensal: "10.000",
      cep: "01234-000",
      ocupacao: "Autonomo",
      motivo: "Pagar dívidas",
      tipo: "Veículo",
      placa: "ABC-1234",
      dono: "Cleide da Silva"
    },
    {
      id: 2,
      nome: "Maria Silva",
      email: "jaksdjask@example.com",
      telefone: "(11) 91299-9999",
      cpf: "452.423.424-52",
      nascimento: "12-04-2000",
      cep: "01234-000",
      rendamensal: "10.000",
      ocupacao: "Assalariado",
      motivo: "Reformar a casa",
      tipo: "Veículo",
      placa: "KJX-1846",
      dono: "Pedro Amorim"
    }
  ];

  const user = users.filter(user => user.id === Number(location.id))
  console.log(user)

  return (
    <>
      <section className="m-4 mt-12">
        <div className="flex gap-4 items-center mb-4">
          <Link to="/admin/cadastros"><ChevronLeft/></Link>
          <h1 className="text-2xl font-semibold">Consulta de cadastro</h1>
        </div>
        {user.map(u => (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-500">ID: {u.id}askodm421_asodkAK231ko.dasmdoak</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">



              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-400">Informações Gerais</h3>
                <span><strong className="font-semibold text-slate-600">Nome :</strong> {u.nome}</span>
                <span><strong className="font-semibold text-slate-600">Email :</strong> {u.email}</span>
                <span><strong className="font-semibold text-slate-600">Telefone :</strong> {u.telefone}</span>
                <span><strong className="font-semibold text-slate-600">CPF :</strong> {u.cpf}</span>
                <span><strong className="font-semibold text-slate-600">Nascimento :</strong> {u.nascimento}</span>
                <span><strong className="font-semibold text-slate-600">CEP :</strong> {u.cep}</span>
              </div>


              
              <div className="flex flex-col gap-2">   
                <h3 className="text-lg font-bold text-slate-400">Análise de Perfil</h3>
                <span><strong className="font-semibold text-slate-600">Renda Mensal :</strong> R$ {u.rendamensal}</span>
                <span><strong className="font-semibold text-slate-600">Ocupação :</strong> {u.ocupacao}</span>
                <span><strong className="font-semibold text-slate-600">Motivo do empréstimo :</strong> {u.motivo}</span>
              </div>


              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-400">Análise de Garantia</h3>
                <span><strong className="font-semibold text-slate-600">Possui garantia :</strong> {u.tipo}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}
