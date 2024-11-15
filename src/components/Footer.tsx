import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="p-2 border border-slate-100 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
        <span className="text-slate-400">Zenith Credit &copy; 2024 - Todos os direitos reservados</span>
        <div className="flex gap-4 items-center text-2xl mr-4 text-blue-500">
          <BsWhatsapp className="cursor-pointer" onClick={() => {
      window.open('https://wa.me/5511991184877?text=Olá, vim pelo site da Zenith Credit e gostaria de mais informações.', '_blank')
          }}/>
          <BsInstagram className="cursor-pointer" onClick={() => {
            window.open('https://instagram.com/zenith.credit', '_blank')
                }}/>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-sm mt-4">
        <span className="text-slate-400">A ZENITH CREDIT, registrado sob a razão social: PP Promotora de Vendas S.A., inscrita no CNPJ/ME sob o nº 55.395.267/0001-17 com sede em São Paulo, no Estado de São Paulo é um prestador de serviços atuante como correspondente bancário, nos termos da Resolução CMN nº 4.935 de 2021 (“Correspondente no país”), cadastrado em diversas instituições financeiras que poderão ser confirmadas e consultadas através dos canais de Atendimento ( WhatsApp: +55 11 99118-4877 e Email: zenithcredit@outlook.com ).</span>

        <span className="text-slate-400">A ZENITH CREDIT NÃO EXERCE ATIVIDADE PRIVATIVA DE INSTITUIÇÃO FINANCEIRA, NOS TERMOS DA LEI 4.595/64, E POR ISSO NÃO CONCEDE CRÉDITO E APENAS DIVULGA EM SUA PLATAFORMA DIGITAL E APLICATIVO, PROPOSTAS DE OPERAÇÕES DE CRÉDITO REALIZADAS POR INSTITUIÇÕES FINANCEIRAS DEVIDAMENTE AUTORIZADAS A FUNCIONAR PELO BANCO CENTRAL DO BRASIL.</span>

        <span className="text-slate-400">As ofertas divulgadas no site e aplicativo da ZENITH CREDIT são formuladas pelas Instituições Financeiras e correspondem a simulações de crédito, cujas condições são variáveis conforme Política de Crédito da Instituição Financeira proponente. Nas simulações de crédito apresentadas aos interessados, o prazo de pagamento poderá variar entre 3 e 36 meses, a depender da Instituição Financeira escolhida, assim como o Custo Efetivo Total (Resolução CMN nº 4.881/2020 - CET) poderá variar de acordo com a Instituição Financeira escolhida, entre as taxas 8,7% a.a. e 605,84% a.a..</span>
      </div>
    </footer>
  )
}