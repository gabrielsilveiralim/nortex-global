import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import { BrainCircuit, TrendingUp, ShieldAlert, Bot, Radar, Cpu } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const forecastData = [
  { year: "2020", value: 1200 },
  { year: "2021", value: 1500 },
  { year: "2022", value: 1720 },
  { year: "2023", value: 2100 },
  { year: "2024", value: 2380 },
  { year: "2025*", value: 2650 }
];

const aiCards = [
  {
    title: "Previsão de Atrasos",
    value: "12.4%",
    icon: BrainCircuit,
    color: "#A78BFA"
  },
  {
    title: "Risco Operacional",
    value: "Médio",
    icon: ShieldAlert,
    color: "#FACC15"
  },
  {
    title: "Forecast Custos",
    value: "$41M",
    icon: TrendingUp,
    color: "#22C55E"
  },
  {
    title: "Prob. Falha",
    value: "3.8%",
    icon: Cpu,
    color: "#EF4444"
  },
  {
    title: "ML Insight",
    value: "↑8.3%",
    icon: Radar,
    color: "#00BFFF"
  },
  {
    title: "IA Score",
    value: "B+",
    icon: Bot,
    color: "#F97316"
  }
];

export default function ia() {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <main className='flex-1 ml-20 lg:ml-56 bg-[#010910]'>
        <section className='mx-auto w-full max-w-7xl px-4 py-16'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>

            {aiCards.map((card, index) => (
              <div key={index}
                className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5'>
                <div className='mb-5 flex items-start justify-between'>
                  <p className='text-sm text-[#64748B]'>  {card.title} </p>
                  <card.icon  size={22} style={{ color: card.color }} />
                </div>
                <span className='text-4xl font-bold' style={{ color: card.color }}> {card.value} </span>
                <p className='mt-3 text-sm text-[#64748B]'> Processamento inteligente em tempo real. </p>
              </div>
            ))}
          </div>

          <div className='mt-10 rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>
            <div className='mb-6'>
              <h2 className='text-2xl font-semibold text-white'> Projeção IA</h2>
              <p className='mt-2 text-sm text-[#64748B]'> Crescimento previsto pelo modelo de inteligência artificial. </p>
            </div>

            <ResponsiveContainer width='100%' height={350}>
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id='forecast'>
                    <stop
                      offset='5%'
                      stopColor='#A78BFA'
                      stopOpacity={0.3} />
                    <stop
                      offset='95%'
                      stopColor='#A78BFA'
                      stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke='#1A2333' />
                <XAxis dataKey='year' stroke='#64748B'/>
                <YAxis stroke='#64748B' />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke='#A78BFA'
                  fill='url(#forecast)'
                  strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
      <Footer />
    </>
  );
}