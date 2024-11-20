import HomeSvg from '../assets/Home_Section_One.svg'
import {Button} from '@/components/ui/button'
import { ServiceCard } from '../components/serviceCard/index'
import { CircleDollarSign, Car, Factory } from 'lucide-react'
import ApiSVG from '../assets/How_we_works/Aplication.svg'
import DocSVG from '../assets/How_we_works/Documents.svg'
import AprovedSVG from '../assets/How_we_works/Aproved.svg'
import SupportSVG from '../assets/How_we_works/Support.svg'

// Parceiros
import Itau from '../assets/Brands/Itau.png'
import BB from '../assets/Brands/BB.png'
import Santander from '../assets/Brands/Santander.png'
import Bradesco from '../assets/Brands/Bradesco.png'
import Creditas from '../assets/Brands/Creditas.png'
import CashMe from '../assets/Brands/CashMe.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {

  const navigate = useNavigate()

  const parceiros = [
    {
      url: Itau,
      alt: "Itau",
      bgColor: "bg-orange-400"
    },
    {
      url: BB,
      alt: "BB",
      bgColor: "bg-yellow-400"
    },
    {
      url: Santander,
      alt: "Santander",
      bgColor: "bg-red-500"
    },
    {
      url: Creditas,
      alt: "Creditas",
      bgColor: "bg-green-200"
    },
    {
      url: CashMe,
      alt: "CashMe",
      bgColor: "bg-blue-200"
    },
    {
      url: Bradesco,
      alt: "Bradesco",
      bgColor: "bg-red-100"
    },
  ]
  const HowWeWorks = [
    {
      url: ApiSVG,
      title: "Simular Empréstimo / Financiamento",
      text: "Com nosso sistema, você pode simular seu empréstimo sem precisar se cadastrar! Nosso site oferece essa facilidade para que você possa ter uma ideia do valor do seu empréstimo antes de entrar em contato com nossos consultores.",
    },
    {
      url: DocSVG,
      title: "Verificação de Documentos",
      text: "Nesta etapa, os nossos consultores analisarão cuidadosamente os documentos fornecidos. A segurança dos seus dados é nossa prioridade, eles são armazenados com o máximo de cuidado e proteção.",
    },
    {
      url: SupportSVG,
      title: "Faça uma consulta conosco",
      text: "Nesta fase, nossos consultores entrarão em contato para um processo de avaliação mais detalhado, garantindo que você receba a melhor solução de empréstimo para suas necessidades.",
    },
    {
      url: AprovedSVG,
      title: "Aprovação",
      text: "Nesta fase, você irá receber a aprovação do seu empréstimo! Com a melhor oferta do mercado, você terá a chance de realizar seus sonhos e projetos. Nossa equipe trabalha incansavelmente para oferecer as melhores taxas e condições, garantindo que você tenha a melhor experiência possível.",
    },
  ]
  
  return (
      <>
        {/* Sessão 1 */}
      <section>
        <div className="m-8 p-2 mt-20 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start text-center lg:text-start">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-2 font-normal">Simule seu empréstimo com a <strong className="text-blue-500 font-semibold">Zenith Credit</strong></h1>
            <p className="text-3xl mb-4 text-slate-600">Com o nosso sistema, você <strong className="font-semibold text-blue-500">poderá realizar simulações de empréstimo direto no site!</strong> Após isso poderá falar com algum de nossos consultores. Aqui você pode simular seu empréstimo sem a necessidade de se cadastrar antes!</p>
              <Button onClick={() => navigate("../simular-emprestimo", {replace: true})} className="mr-2">Iniciar simulação</Button>
              <Button onClick={() => navigate("../registro", {replace: true})} variant="secondary">Fazer registro</Button>
          </div>
          <img className="md:w-1/2 md:h-1/2 mb-4" src={HomeSvg} alt="Home SVG" height={400} width={400}/>
        </div>
      </section>

    {/* Sessão 2 */}
    <section id="services" className="flex flex-col p-2 items-center justify-around text-center w-full bg-gradient-to-r from-blue-900 to-blue-400">
    <h2 className="text-3xl mb-4 text-white">Nossos serviços</h2>
      <ul className="flex flex-col lg:flex-row gap-1">
        <ServiceCard.Root>
          <ServiceCard.Icon icon={<CircleDollarSign className="text-green-400" size={65}/>}/>
          <ServiceCard.Title title="Simulação de empréstimo" />
          <ServiceCard.Description description="Desenvolvido com as taxas atuais, nossa simulação lhe retorna todas as informações que você precisa antes de realizar um empréstimo, um ótimo meio para você se planejar antes de falar com algum dos nossos consultores."/>
          <Button onClick={() => navigate("/simular-emprestimo")} className="mt-2">Simular agora</Button>
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<Factory className="text-green-400" size={65}/>}/>
          <ServiceCard.Title title="Empréstimo com Garantia com Imóvel" />
          <ServiceCard.Description description="Oferecemos serviços de empréstimo com garantia com imóvel, caso você não saiba como funciona, clique no botão abaixo 'Saber mais' e retire toda as suas dúvidas!" />
          <Button onClick={() => navigate("/emprestimos/garantia-imovel")} className="mt-2">Saber mais</Button>
        </ServiceCard.Root>

        <ServiceCard.Root>
          <ServiceCard.Icon icon={<Car className="text-green-400" size={65}/>}/>
          <ServiceCard.Title title="Empréstimo com Garantia com Veículo" />
          <ServiceCard.Description description="Oferecemos serviços de empréstimo com garantia com veículo, caso você não saiba como funciona, clique no botão abaixo 'Saber mais' e retire toda as suas dúvidas!"/>
          <Button onClick={() => navigate("/emprestimos/garantia-veiculo")} className="mt-2">Saber mais</Button>
        </ServiceCard.Root>
      </ul>
    </section>
        {/* Sessão 3 */}
        <section className="flex flex-col items-center p-2">
        <h1 className="text-3xl mb-4 font-bold text-zinc-600">Nossos parceiros</h1>
          <h2 className="text-slate-400 text-sm mb-4">Algumas das empresas que confia em nosso trabalho ;)</h2>
          <div className="flex flex-col w-full items-center">
            <div className="grid grid-cols-3 gap-6 mb-4">
              {parceiros.map(p => (
                <img className={`h-24 p-4 bg-blue-200 rounded-lg ${p.bgColor}`} src={p.url} alt={p.alt} />
              ))}
            </div>
          </div>
        </section>
        {/* Sessão 4 */}
      <section className="bg-slate-900 p-1">
        <div className="text-center m-4 lg:m-32 md:m-20">
          <h2 className="text-3xl mb-4 text-blue-500 font-bold">Como trabalhamos?</h2>
          <p className="text-lg mb-4 text-slate-400">Este é o processo de como você consegue realizar seu empréstimo</p>


          <div className="flex flex-col gap-8 lg:m-16 lg:gap-2">
            <div className="flex items-center">
              <img className="w-48 h-48 lg:h-64 lg:w-64" src={ApiSVG} alt="API SVG"/>
              <div>
                <h3 className="text-2xl text-green-500 font-bold mb-2 text-start">{HowWeWorks[0].title}</h3>
                <p className="text-slate-300 text-start">{HowWeWorks[0].text}</p>
              </div>
            </div>


            <div className="flex items-center">
              <div>
                <h3 className="text-2xl text-green-500 font-bold mb-2 text-end">{HowWeWorks[1].title}</h3>
                <p className="text-slate-300 text-end">{HowWeWorks[1].text}</p>
              </div>
              <img className="w-48 h-48 lg:h-64 lg:w-64" src={DocSVG} alt="API SVG"/>
            </div>


            <div className="flex items-center">
              <img className="w-48 h-48 lg:h-64 lg:w-64" src={SupportSVG} alt="API SVG"/>
              <div>
                <h3 className="text-2xl text-green-500 font-bold mb-2 text-start">{HowWeWorks[2].title}</h3>
                <p className="text-slate-300 text-start">{HowWeWorks[2].text}</p>
              </div>
            </div>


            <div className="flex items-center">
              <div>
                <h3 className="text-2xl text-green-500 font-bold mb-2 text-end">{HowWeWorks[3].title}</h3>
                <p className="text-slate-300 text-end">{HowWeWorks[3].text}</p>
              </div>
              <img className="w-48 h-48 lg:h-64 lg:w-64" src={AprovedSVG} alt="API SVG"/>
            </div>

            <Button onClick={() => navigate("../simular-emprestimo", {replace: true})} variant="outline" className="lg:w-1/3 lg:self-center">Iniciar simulação</Button>

          </div>
        </div>
      </section>
        <Footer/>
    </>
  )
}