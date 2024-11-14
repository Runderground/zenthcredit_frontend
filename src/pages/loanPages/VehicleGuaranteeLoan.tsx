import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs'


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
      <section>
      <h1>Gosto de rolas grossas</h1>
      </section>
    </>
  )
}