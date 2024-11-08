import HomeSvg from '../assets/Home_Section_One.svg'
import {Button} from '@/components/ui/button'
import { ServiceCard } from '../components/serviceCard/index'
import { CircleDollarSign, Car, Factory } from 'lucide-react'

export default function Home() {
  return (
      <>
        {/* Sessão 1 */}
      <section className="m-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-center lg:text-start">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-2">Simule seu empréstimo com a Zenith Credit</h1>
          <p className="text-lg mb-4 text-slate-600">Com o nosso sistema, você poderá realizar simulações de empréstimo direto no site! Após isso poderá falar com algum de nossos consultores.</p>
          <Button>Iniciar simulação</Button>
        </div>
        <img className="md:w-1/2 md:h-1/2 mb-4" src={HomeSvg} alt="Home SVG" height={400} width={400}/>
      </section>

    {/* Sessão 2 */}
    <section id="services" className="flex flex-col p-2 mb-4 items-center justify-center text-center w-full bg-gradient-to-r from-white to-blue-200">
    <h2 className="text-3xl mb-4 text-zinc-600">Nossos serviços</h2>
      <ul className="flex flex-col lg:flex-row gap-1">
        <ServiceCard.Root>
          <ServiceCard.Icon icon={<CircleDollarSign size={65}/>}/>
          <ServiceCard.Title title="Simulação de empréstimo" />
          <ServiceCard.Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<Factory size={65}/>}/>
          <ServiceCard.Title title="Financiamento para empresas" />
          <ServiceCard.Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<Car size={65}/>}/>
          <ServiceCard.Title title="Financiamento de Automoveis" />
          <ServiceCard.Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </ServiceCard.Root>
      </ul>
      <br/>
      <Button variant="outline" className="w-1/3">Saber mais</Button>
    </section>
        {/* Sessão 3 */}
      <section className="text-center">
        <h2 className="text-3xl mb-4 text-slate-600">Como trabalhamos?</h2>
        <p className="text-lg mb-4 text-slate-600">Este é o processo de como você consegue realizar seu empréstimo</p>
      </section>
    </>
  )
}