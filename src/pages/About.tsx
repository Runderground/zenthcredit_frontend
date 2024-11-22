import TeamSVG from '../assets/Team.jpg'


export default function About() {
  return (
    <>
      <section className="flex flex-col items-center m-12 lg:mr-72 lg:ml-72 mt-20 text-center">
        <img src={TeamSVG} alt="Team" className="w-1/2 rounded-lg"/>
        <h2 className="text-2xl text-slate-500 font-semibold mb-2">Quem somos?</h2>
        <h1 className="text-4xl text-blue-500 font-bold">Zenith Credit</h1>
        <div className="flex flex-col gap-4 text-justify m-6">
          <p className="text-slate-600">Na Zenith Credit, acreditamos que todo brasileiro merece acesso a um crédito justo e descomplicado. Nossa missão é oferecer soluções financeiras que proporcionem mais tranquilidade e autonomia, combatendo o endividamento abusivo com taxas acessíveis, prazos alongados e parcelas que cabem no seu orçamento.</p>
          <p className="text-slate-600">Oferecemos uma experiência digital ágil e simplificada que elimina a burocracia e coloca você no controle do seu futuro financeiro. Seja para quitar dívidas, investir no seu negócio ou realizar um projeto de vida, nosso atendimento consultivo está pronto para entender suas necessidades e oferecer a melhor solução.</p>
          <p className="text-slate-600">Na Zenith Credit, valorizamos a transparência e a eficiência, com tecnologia que facilita e uma equipe dedicada a transformar sua relação com o crédito. Estamos ao seu lado para que seus bens e conquistas possam levá-lo ainda mais longe, sempre com confiança e segurança.</p>
        </div>
      </section>
      <section className="flex flex-col items-center m-4 text-center">
        {/* <img src={LocalizationSVG} alt="Team" className="w-1/2 lg:w-1/4"/> */}
        <h2 className="text-2xl text-slate-500 font-semibold mb-5">Aonde estamos?</h2>
        <h1 className="text-4xl text-blue-500 font-bold">Localização</h1>
        <div className="flex flex-col gap-2 text-center m-6">
          <p className="text-slate-600">Estado: São Paulo / SP</p>
          <p className="text-slate-600">Cidade: São Paulo / SP</p>
          <p className="text-slate-600">Rua: Rua Guaicurus</p>
          <p className="text-slate-600">Número: 635</p>
          <p className="text-slate-600">Bairro: Água Branca</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.265243695823!2d-46.69429998884488!3d-23.52296057873797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef873035b7503%3A0x5ee3df2cf80005b0!2sR.%20Guaicurus%2C%20635%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005033-001!5e0!3m2!1spt-BR!2sbr!4v1731670127690!5m2!1spt-BR!2sbr" width="300" height="225" style={{border: 0}} allowFullScreen={true as any} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}