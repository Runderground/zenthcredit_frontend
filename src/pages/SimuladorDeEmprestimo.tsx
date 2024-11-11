import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'

import {
  CircleDollarSign
} from 'lucide-react'

import {
  Input
} from '@/components/ui/input'

import {
  
}


export default function SimuladorDeEmprestimo() {
  return (
    <section className="m-4 mt-12 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-600">Simulador de Empréstimo</h1>
        <p className="text-lg font-normal text-slate-400">Isto é apenas um simulador, não quer dizer que irá ser o valor definitivo de um futuro empréstimo.</p>
      </div>
      <div className="w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Empréstimo</CardTitle>
            <CircleDollarSign/>
          </CardHeader>
          <CardContent>
          
          </CardContent>
        </Card>
      </div>
    </section>
  )
}