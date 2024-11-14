import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs'
import CarSVG from '../../assets/Loans/Car.svg'
import { Link } from 'react-router-dom' 

export default function VehicleGuaranteeLoan() {
  return (
    <>
      <section className="bg-cover bg-center h-96" style={{backgroundImage: "url('https://i.imgur.com/584j2op.png')"}}>

        <div className="relative z-10 flex items-center ml-2 justify-start h-full text-white">
          <div className="flex flex-col m-12">
            <h1 className="text-3xl font-semibold text-shadow">Empréstimo com garantia de Veículo</h1>
            <p>Condições sob medida, com parcelas acessíveis e taxas que facilitam.</p>
            <div className="mt-2">
              <Button className="bg-green-500 hover:bg-green-600"><BsWhatsapp/>Chamar no WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row text-center lg:text-start m-4">
        <img className="h-96 self-center" src={CarSVG} alt="Car SVG"/>
        <div className='lg:mt-8 flex flex-col gap-4'>
          <h1 className="font-bold text-4xl text-slate-700">O que é um empréstimo com garantia de veículo?</h1>
          <p className="text-2xl text-slate-500 text-justify">O empréstimo com garantia de veículo é um tipo de empréstimo em que o seu veículo é colocado como garantia para a instituição financeira.</p>
          <p className="text-2xl text-slate-500 text-justify">Você tem Taxas de juros menores comparado ao <Link className="text-blue-500 underline"to="/emprestimos/pessoal">Empréstimo Pessoal</Link>, prazos mais longos, e muito mais!</p>
          <div>
            <Button className="bg-green-500 hover:bg-green-600"><BsWhatsapp/>Chamar no WhatsApp</Button>
          </div>
        </div>
      </section>
      <section className="bg-blue-100/50 p-4 text-center lg:text-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 m-4 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-slate-700">Como funciona o empréstimo com garantia de veículo?</h1>
            <p className="text-2xl text-slate-500 text-justify">No Empréstimo com Garantia de Veículo, seu carro ou moto serve como garantia, permitindo que você obtenha valores maiores e prazos mais longos para pagamento. E o melhor: com taxas de juros mais baixas!</p>
            <p className="text-2xl text-slate-500 text-justify">Aproveite as melhores condições com confiança. Descubra como o seu veículo pode abrir portas para novas oportunidades financeiras!</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-slate-700">Como fazer empréstimo com garantia de veículo?</h1>
            <p className="text-2xl text-slate-500 text-justify">Fazer um empréstimo com garantia de veículo é fácil 100% online. Com valores maiores, prazos mais longos e taxas reduzidas, o processo é simples: faça seu cadastro, aguarde um dos nossos consultores entrar em contato.</p>
          </div>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 w-full"><BsWhatsapp/>Chamar no WhatsApp</Button>
      </section>
    </>
  )
}