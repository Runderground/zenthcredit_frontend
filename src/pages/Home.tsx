import HomeSvg from '../assets/Home_Section_One.svg'
import {Button} from '@/components/ui/button'
import { ServiceCard } from '../components/serviceCard/index'
import { CircleDollarSign, Car, Factory } from 'lucide-react'
import ApiSVG from '../assets/How_we_works/Aplication.svg'
import DocSVG from '../assets/How_we_works/Documents.svg'
import AprovedSVG from '../assets/How_we_works/Aproved.svg'
import SupportSVG from '../assets/How_we_works/Support.svg'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  const HowWeWorks = [
    {
      url: ApiSVG,
      title: "Simular Empréstimo / Financiamento",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      url: DocSVG,
      title: "Verificação de Documentos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      url: SupportSVG,
      title: "Faça uma consulta conosco",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      url: AprovedSVG,
      title: "Aprovação",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]
  
  return (
      <>
        {/* Sessão 1 */}
      <section className="m-8 mt-12 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-center lg:text-start">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-2 font-normal">Simule seu empréstimo com a <strong className="underline decoration-blue-500">Zenith Credit</strong></h1>
          <p className="text-lg mb-4 text-slate-600">Com o nosso sistema, você <strong className="font-semibold bg-blue-500/30 p-0.5 rounded-md">poderá realizar simulações de empréstimo direto no site!</strong> Após isso poderá falar com algum de nossos consultores.</p>
            <Button onClick={() => navigate("../simular-emprestimo", {replace: true})} className="mr-2">Iniciar simulação</Button>
            <Button onClick={() => navigate("../registro", {replace: true})} variant="secondary">Fazer registro</Button>
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
    </section>
        {/* Sessão 3 */}
      <section className="text-center m-4">
        <h2 className="text-3xl mb-4 text-slate-600">Como trabalhamos?</h2>
        <p className="text-lg mb-4 text-slate-600">Este é o processo de como você consegue realizar seu empréstimo</p>

        
        <div className="flex flex-col gap-8 lg:m-16 lg:gap-2">
          <div className="flex items-center">
            <img className="w-48 h-48 lg:h-64 lg:w-64" src={ApiSVG} alt="API SVG"/>
            <div>
              <h3 className="text-2xl text-slate-600 font-bold mb-2 text-start">{HowWeWorks[0].title}</h3>
              <p className="text-slate-500 text-start">{HowWeWorks[0].text}</p>
            </div>
          </div>

          
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl text-slate-600 font-bold mb-2 text-end">{HowWeWorks[1].title}</h3>
              <p className="text-slate-500 text-end">{HowWeWorks[1].text}</p>
            </div>
            <img className="w-48 h-48 lg:h-64 lg:w-64" src={DocSVG} alt="API SVG"/>
          </div>

          
          <div className="flex items-center">
            <img className="w-48 h-48 lg:h-64 lg:w-64" src={SupportSVG} alt="API SVG"/>
            <div>
              <h3 className="text-2xl text-slate-600 font-bold mb-2 text-start">{HowWeWorks[2].title}</h3>
              <p className="text-slate-500 text-start">{HowWeWorks[2].text}</p>
            </div>
          </div>

          
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl text-slate-600 font-bold mb-2 text-end">{HowWeWorks[3].title}</h3>
              <p className="text-slate-500 text-end">{HowWeWorks[3].text}</p>
            </div>
            <img className="w-48 h-48 lg:h-64 lg:w-64" src={AprovedSVG} alt="API SVG"/>
          </div>

          <Button className="lg:w-1/3 lg:self-center">Iniciar simulação</Button>
          
        </div>
      </section>
    </>
  )
}