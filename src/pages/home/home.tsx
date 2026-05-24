import Sidebar from '../../components/layout/Sidebar'
import Footer from '../../components/layout/Footer'
import { Box, DollarSign, Van, TriangleAlert, Check, Timer, TrendingUp, Zap } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'

export default function Home() {

  const revenueData = [
    { month: 'Jan', revenue: 120 },
    { month: 'Fev', revenue: 180 },
    { month: 'Mar', revenue: 240 },
    { month: 'Abr', revenue: 210 },
    { month: 'Mai', revenue: 320 },
    { month: 'Jun', revenue: 410 }
  ]

  const exportData = [
      { name: 'Minério', value: 35 },
      { name: 'Grãos', value: 25 },
      { name: 'Combustível', value: 20 },
      { name: 'Container', value: 20 }
  ]

  const logisticsData = [
      { name: 'Seg', value: 12 },
      { name: 'Ter', value: 18 },
      { name: 'Qua', value: 10 },
      { name: 'Qui', value: 25 },
      { name: 'Sex', value: 20 }
  ]

  const COLORS = ['#00BFFF', '#2563EB', '#22C55E', '#FACC15']

    return (
        <>
        <div className='flex'>
         < Sidebar />
          <main className='flex-1 ml-20 lg:ml-56 bg-[#010910]'>
            <section className='mx-auto w-full max-w-7xl px-4 py-8'>

              <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'> 

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#FF4D4D]/40'>
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Alertas Operacionais </p>
                    <TriangleAlert size={22} className='text-[#FF4D4D]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> 3 </span>
                    <p className='text-sm text-[#5F6B7A]'> Requerem atenção imediata</p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#22C55E]/40'>
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Receita Total </p>
                    <DollarSign size={22} className='text-[#22C55E]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> $2.18B </span>
                    <p className='text-sm text-[#5F6B7A]'> Acumulado anual </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#00BFFF]/40'>     
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Volume Exportado </p>
                    <Box size={22} className='text-[#00BFFF]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> 4.2M t </span>
                    <p className='text-sm text-[#5F6B7A]'> Toneladas métricas </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#FACC15]/40'> 
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Custo Logístico </p>
                    <Van size={22} className='text-[#FACC15]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> $380M </span>
                    <p className='text-sm text-[#5F6B7A]'> Frete e armazenagem </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#22C55E]/40'> 
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Entregas no Prazo </p>
                    <Check size={22} className='text-[#22C55E]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> 91,3% </span>
                    <p className='text-sm text-[#5F6B7A]'> SLA Atingido </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#3b81a2]/40'> 
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Tempo Méd. Entrega </p>
                    <Timer size={22} className='text-[#3b81a2]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> 13 d </span>
                    <p className='text-sm text-[#5F6B7A]'> Média global 2024 </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#6b3ba2]/40'> 
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Lucro Operacional </p>
                    <TrendingUp  size={22} className='text-[#6b3ba2]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> $1.42B </span>
                    <p className='text-sm text-[#5F6B7A]'> EBITDA estimado </p>
                  </div>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5 transition duration-300 hover:border-[#4997be]/40'> 
                  <div className='mb-6 flex items-start justify-between'>
                    <p className='text-sm tracking-wide text-[#8B98A5]'> Eficiência Logíst </p>
                    <Zap  size={22} className='text-[#4997be]' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <span className='text-4xl font-bold text-white'> 88,5% </span>
                    <p className='text-sm text-[#5F6B7A]'> índice composto </p>
                  </div>
                </div>
              </div>

              <div className='mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2'>
                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>
                  <h2 className='mb-6 text-lg font-semibold text-white'> Receita Mensal </h2>
                  <ResponsiveContainer width='100%' height={300}>
                    <LineChart data={revenueData}>
                    <CartesianGrid stroke='#1A2333' />
                    <XAxis dataKey='month' stroke='#64748B' />
                    <YAxis stroke='#64748B' />
                    <Tooltip />
                    <Line type='monotone' dataKey='revenue' stroke='#00BFFF' strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>
                  <h2 className='mb-6 text-lg font-semibold text-white'> Distribuição de Exportação </h2>
                  <ResponsiveContainer width='100%' height={300}>
                    <PieChart>
                    <Pie data={exportData} dataKey='value' innerRadius={60} outerRadius={90} paddingAngle={4}>
                        {exportData.map((_, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-6 xl:col-span-2'>
                  <h2 className='mb-6 text-lg font-semibold text-white'> Fluxo Logístico Semanal </h2>
                  <ResponsiveContainer width='100%' height={320}>
                    <BarChart data={logisticsData}>
                    <CartesianGrid stroke='#1A2333' />
                    <XAxis dataKey='name' stroke='#64748B' />
                    <YAxis stroke='#64748B' />
                    <Tooltip />
                    <Bar dataKey='value' fill='#00BFFF'radius={[4, 4, 0, 0]}/>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer />
        </>
    )
}