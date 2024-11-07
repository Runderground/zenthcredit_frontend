import HomeSvg from '../assets/Home_Section_One.svg'
import {Button} from '@/components/ui/button'
import { ServiceCard } from '../components/serviceCard/index'
import { CircleDollarSign } from 'lucide-react'

export default function Home() {
  return (
      <>
        {/* Sessão 1 */}
      <section className="m-4 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-center lg:text-start">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-zinc-800 mb-2">Simule seu empréstimo com a Zenith Credit</h1>
          <p className="text-lg mb-4">Com o nosso sistema, você poderá realizar simulações de empréstimo direto no site! Após isso poderá falar com algum de nossos consultores.</p>
          <Button>Iniciar simulação</Button>
        </div>
        <img className="md:w-1/2 md:h-1/2 mb-4" src={HomeSvg} alt="Home SVG" height={400} width={400}/>
      </section>

    {/* Sessão 2 */}
    <section className="flex flex-col p-2 items-center justify-center text-center w-full bg-gradient-to-r from-white to-blue-200">
    <h2 className="text-2xl font-bold text-zinc-600">Nossos serviços</h2>
      <ul className="flex flex-col lg:flex-row">
        <ServiceCard.Root>
          <ServiceCard.Icon icon={<CircleDollarSign size={65}/>}/>
          <ServiceCard.Title title="Simulação de empréstimo" />
          <ServiceCard.Description description="Lorem ipsulum in dolor aks dawdkaowk sadk oakdo oasdko kok awodk oakd "/>
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<CircleDollarSign size={65}/>}/>
          <ServiceCard.Title title="Simulação de empréstimo" />
          <ServiceCard.Description description="Lorem ipsulum in dolor aks dawdkaowk sadk oakdo oasdko kok awodk oakd "/>
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<CircleDollarSign size={65}/>}/>
          <ServiceCard.Title title="Simulação de empréstimo" />
          <ServiceCard.Description description="Lorem ipsulum in dolor aks dawdkaowk sadk oakdo oasdko kok awodk oakd "/>
        </ServiceCard.Root>
      </ul>
    </section>
    </>
  )
}