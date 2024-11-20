import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs'
import PropertySVG from '../../assets/Loans/Property.png'

export default function PropertyGuaranteeLoan() {

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511991184877?text=Olá, vim pelo site da Zenith Credit e estou interessado sobre o empréstimo com garantia de imóvel.', '_blank')
  }
  
  return (
    <>
      <section className="bg-cover bg-center h-96" style={{backgroundImage: "url('https://i.imgur.com/WfmFCmp.png')"}}>

        <div className="relative z-10 flex items-center ml-2 justify-start h-full text-white">
          <div className="flex flex-col mt-20">
            <h1 className="text-3xl font-semibold text-shadow">Empréstimo com Garantia de Imóvel</h1>
            <p>Condições sob medida, com parcelas acessíveis e taxas que facilitam.</p>
            <div className="mt-2">
              <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600"><BsWhatsapp/>Chamar no WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row text-center lg:text-start m-4">
        <img className="h-96 self-center rounded-lg m-2" src={PropertySVG} alt="Car SVG"/>
        <div className='lg:mt-8 flex flex-col gap-4'>
          <h1 className="font-bold text-4xl text-slate-700">O que é um empréstimo com garantia de imóvel</h1>
          <p className="text-2xl text-slate-500 text-justify">É simples! Você usa sua casa, apartamento ou ponto comercial como garantia para obter até R$5 milhões. Aproveite prazos de até 240 meses e taxas reduzidas para realizar projetos ambiciosos. Descubra como solicitar!</p>
          <div>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600"><BsWhatsapp/>Chamar no WhatsApp</Button>
          </div>
        </div>
      </section>
      <section className="bg-blue-100/50 p-4 text-center lg:text-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 m-4 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-slate-700">Como funciona o empréstimo com garantia de imóvel?</h1>
            <p className="text-2xl text-slate-500 text-justify">O processo é simples: o banco avalia gratuitamente o seu imóvel e seu perfil financeiro. Se tudo estiver certo, o dinheiro cai na sua conta, e você já pode colocar seus planos em ação, com toda a segurança que precisa.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-slate-700">Como fazer empréstimo com garantia de imóvel?</h1>
            <p className="text-2xl text-slate-500 text-justify">Para fazer o empréstimo com garantia de imóvel, o processo é online, rápido e seguro. Na Zenith Credit, você faz o cadastro e, em um curto período de tempo um dos nossos consultores irá entrar em contato! Ou você pode falar com um neste exato momento clicando no botão abaixo.</p>
          </div>
        </div>
      </section>
    </>
  )
}