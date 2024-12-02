import { Button } from '@/components/ui/button'
import AplicationSVG from '../../assets/How_we_works/Aplication.png'
import { useNavigate } from 'react-router-dom'

export default function PersonalLoan() {
  const navigate = useNavigate()
  return (
    <>
      <section className="bg-cover bg-center h-96" style={{backgroundImage: "url('https://i.imgur.com/53B1Nis.png')"}}>

        <div className="relative z-10 flex items-center ml-2 justify-start h-full text-white">
          <div className="flex flex-col m-12">
            <h1 className="text-3xl font-semibold text-shadow">Empréstimo Pessoal</h1>
            <p>Simule seu empréstimo agora e saia do sufoco!</p>
            <div className="flex gap-2 mt-2">
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => navigate("/simular-emprestimo")}>Simular empréstimo</Button>
              <Button variant="secondary" onClick={() => navigate("/registro")}>Fazer cadastro</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row text-center lg:text-start m-4">
        <img className="h-96 self-center rounded-lg m-2" src={AplicationSVG} alt="Car SVG"/>
        <div className='m-4 flex flex-col gap-4'>
          <h1 className="font-bold text-4xl text-slate-700">O que é um empréstimo pessoal Zenith Credit?</h1>
          <p className="text-2xl text-slate-500 text-justify">O empréstimo pessoal da Zenith Credit é uma solução segura para pessoas físicas obterem crédito de forma rápida. Nele, não há necessidade de ofertar algum bem como garantia, nem o motivo para solicitar o dinheiro emprestado.</p>
          <p className="text-2xl text-slate-500 text-justify">Assim, você pode realizar o empréstimo para qualquer finalidade, seja para pagar dívidas, reformar sua casa, viajar, abrir um negócio ou investir em estudos.</p>
          <div>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => navigate("/simular-emprestimo")}>Simular empréstimo</Button>
          </div>
        </div>
      </section>
    </>
  )
}