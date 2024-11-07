import HomeSvg from '../assets/Home_Section_One.svg'


export default function Home() {
  return (
    <section className="flex flex-col md:flex-row">
      <div>
        <h1 className="text-5xl font-bold text-slate-800">Simule seu empréstimo com a Zenith</h1>
        <p>Com o nosso sistema, você poderá realizar simulações de empréstimo direto no site! Após isso poderá falar com algum de nossos consultores.</p>
      </div>
      <img className="md:w-1/2 md:h-1/2" src={HomeSvg} alt="Home SVG" height={400} width={400}/>
    </section>
  )
}