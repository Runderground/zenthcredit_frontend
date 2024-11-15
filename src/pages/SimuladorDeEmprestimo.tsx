import {
  useState
} from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'

import {
  CircleDollarSign,
  ChartArea
} from 'lucide-react'

import {
  Slider
} from '@/components/ui/slider'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

import {
  Button
} from '@/components/ui/button'

import { useNavigate } from 'react-router-dom'

export default function SimuladorDeEmprestimo() {
  let [valor, setValor] = useState(0);
  let [meses, setMeses] = useState(0);
  let [juros, setJuros] = useState("0")
  const navigate = useNavigate()

  const handleSliderChange = (newValue: number[]) => {
    setValor(newValue[0]);
  }

  const handleMesesChange = (newValue: number[]) => {
    setMeses(newValue[0])
  }

  function calcularParcela(valorTotal: number, taxaJuros: string, parcelas: number) {
    if(valorTotal === 0 || Number(taxaJuros) === 0 || parcelas === 0) {
      return 0
    }
    const j = Number(taxaJuros) / 100
    console.log(j)
    const valorFinanciado =  (valorTotal * j * Math.pow(1 + j, parcelas)) / (Math.pow(1 + j, parcelas) - 1)
    console.log(valorFinanciado)

    return Number(valorFinanciado)
  }

  let parcelas = calcularParcela(valor, juros, meses)

  function calcularTotalComJuros(valorComJuros: number | string, parcelas: number) {
    const total = Number(valorComJuros) * parcelas
    return Number(total.toFixed(2))
  }

  let totalComJuros = calcularTotalComJuros(parcelas, meses)
  
  return (
    <section className="m-4 mt-12 flex flex-col items-center">

      {/* Titulo */}
      <div className="mb-4">
          <h1 className="text-2xl font-bold text-slate-600">Simulador de Empréstimo</h1>
        <p className="text-lg font-normal text-slate-400">Isto é apenas um simulador, não quer dizer que irá ser o valor definitivo de um futuro empréstimo.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between text-slate-600">
            <CardTitle>Como será seu <strong className="text-blue-500">empréstimo?</strong></CardTitle>
            <CircleDollarSign/>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">

            {/* Valor do empréstimo */}
            <div className="flex flex-col gap-4">
              <span className="text-md text-slate-500 font-semibold">Valor do empréstimo:</span>
              <Slider onValueChange={handleSliderChange} max={100000} step={valor < 15000 ?1000 : 5000}/>
            <div className="flex justify-between w-full text-sm text-slate-300">
            <span>R$ 1000</span>
            <span>R$ 100.000</span>
            </div>
            </div>
            <h2 className="text-slate-700 text-3xl text-center font-bold">{valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>

            {/* Meses / Tempo de Pagamento */}
            <div className="flex flex-col gap-4">
              <span className="text-md text-slate-500 font-semibold">Tempo de Pagamento:</span>
              <Slider onValueChange={handleMesesChange} max={120} step={meses < 12 ? 6 : 12}/>
            <div className="flex justify-between w-full text-sm text-slate-300">
            <span>6 meses</span>
            <span>120 meses</span>
            </div>
            </div>
            <h2 className="text-slate-700 text-3xl text-center font-bold">{meses} meses</h2>


            {/* Valor do Juros */}
            <div className="flex flex-col gap-4">
              <span className="text-md text-slate-500 font-semibold">Valor do Juros:</span>
              <Select onValueChange={(value) => setJuros(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Quantos %?"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1.09">1,09% ( com garantia de Ímovel )</SelectItem>
                  <SelectItem value="1.49">1,49% ( com garantia de Veículo )</SelectItem>
                  <SelectItem value="7.95">7,95% ( média Emprestimo Pessoal )</SelectItem>
                </SelectContent>
              </Select>
            <div className="flex justify-between w-full text-sm text-slate-300">
            <span>Não é valor definitivo, pode surgir qualquer alteração ao fazer uma consulta.</span>
            </div>
            </div>
            <h2 className="text-slate-700 text-3xl text-center font-bold">{juros}%</h2>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between text-slate-600">
            <CardTitle>Resultado</CardTitle>
            <ChartArea/>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-semibold text-slate-600 text-center">Parcelas Mensais</h1>
            <h2 className="text-4xl font-bold text-blue-500"> {parcelas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
            <span className="text-slate-300 font-semibold text-sm">taxas de juros incluídos</span>
            <div className="grid mt-4 grid-cols-1 gap-4">
              
            <div className="flex flex-col gap-2 items-center bg-slate-200 p-4 rounded-lg">
              <span className="text-sm font-semibold text-slate-400">Valor do empréstimo</span>
              <h2 className="text-3xl text-slate-600 text-center font-bold">{valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
            </div>

              <div className="flex gap-2 flex-col items-center bg-blue-200 p-4 rounded-lg">
                <span className="text-sm font-semibold text-blue-400">Valor total á pagar</span>
                <h2 className="text-3xl text-blue-500 text-center font-bold">{totalComJuros.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
              </div>
            </div>
            <br/>
            <Button onClick={() => navigate("../registro", {replace: true})} className="w-1/2">Fazer cadastro</Button>
            <p className="text-md text-slate-400 font-semibold">Ficou interessado? Faça seu cadastro para algum de nossos consultores entrar em contato.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}