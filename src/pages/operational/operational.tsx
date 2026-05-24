import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const logisticData = [
    {
        country: "Brasil",
        product: "Minério",
        status: "Em trânsito",
        eta: "3 dias",
        temp: 42,
        cost: "$120K",
        operation: "Estável"
    },
    {
        country: "China",
        product: "Combustível",
        status: "Aguardando",
        eta: "6 dias",
        temp: 67,
        cost: "$310K",
        operation: "Crítico"
    },
    {
        country: "EUA",
        product: "Container",
        status: "Carregado",
        eta: "2 dias",
        temp: 54,
        cost: "$210K",
        operation: "Atenção"
    },
    {
        country: "Alemanha",
        product: "Grãos",
        status: "Em rota",
        eta: "5 dias",
        temp: 38,
        cost: "$98K",
        operation: "Estável"
    }
];

const regionalData = [
    {
        region: "América do Sul",
        revenue: 420,
        cost: 180
    },
    {
        region: "Europa",
        revenue: 310,
        cost: 140
    },
    {
        region: "Ásia",
        revenue: 520,
        cost: 260
    },
    {
        region: "América Norte",
        revenue: 270,
        cost: 120
    }
];

const exportHistory = [
    { year: "2020", growth: -12 },
    { year: "2021", growth: 18 },
    { year: "2022", growth: 26 },
    { year: "2023", growth: 34 },
    { year: "2024", growth: 42 }
];

export default function Operational() {
    return (
        <>
        <div className='flex overflow-x-hidden'>
          <Sidebar />
          <main className='flex-1 min-w-0 ml-20 lg:ml-56 bg-[#010910]'>              
          <section className='mx-auto w-full max-w-7xl px-3 py-6 lg:px-4 lg:py-16'>
            <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>
               <div className='mb-6 flex items-center justify-between'>
                  <h2 className='text-lg font-semibold text-white'> Monitoramento Logístico </h2>
                  <span className='text-sm text-[#64748B]'> Operações globais </span>
                </div>

                <div className='overflow-x-auto'>
                  <table className='w-full min-w-[900px]'>  
                    <thead>
                      <tr className='border-b border-[#1A2333] text-left'>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> País </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> Produto </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> Status </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> ETA </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> Temperatura </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> Custo </th>
                        <th className='pb-4 text-sm font-medium text-[#64748B]'> Operação </th>
                      </tr>
                    </thead>

                    <tbody>
                      {logisticData.map((item, index) => (
                        <tr key={index} className='border-b border-[#101826] transition hover:bg-[#0B1320]'>
                          <td className='py-4 text-sm text-white'> {item.country} </td>
                          <td className='py-4 text-sm text-[#CBD5E1]'> {item.product} </td>
                          <td className='py-4'>
                            <span className='rounded-full bg-[#102038] px-3 py-1 text-xs text-[#A4E6FF]'> {item.status} </span>
                          </td>
                          <td className='py-4 text-sm text-[#CBD5E1]'> {item.eta} </td>
                          <td className={`py-4 text-sm font-medium ${
                            item.temp > 65
                              ? 'text-[#EF4444]' : item.temp > 50
                              ? 'text-[#FACC15]' : 'text-[#22C55E]' }`} >
                            {item.temp}°C
                          </td>
                          <td className='py-4 text-sm text-[#CBD5E1]'> {item.cost} </td>
                          <td className='py-4'>
                            <span className={`rounded-full px-3 py-1 text-xs ${
                                item.operation === 'Estável'
                                  ? 'bg-[#052E16] text-[#22C55E]' : item.operation === 'Atenção'
                                  ? 'bg-[#3D2A06] text-[#FACC15]' : 'bg-[#3B0A0A] text-[#EF4444]' }`} >
                                {item.operation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2'>
              <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>              
                <h2 className='mb-6 text-lg font-semibold text-white'> Receita vs Custos por Região </h2>
                  <ResponsiveContainer width='100%' height={320}>
                    <BarChart data={regionalData} layout='vertical' barCategoryGap='25%'>
                      <CartesianGrid stroke='#1A2333' />
                      <XAxis type='number' stroke='#64748B'/>
                      <YAxis dataKey='region' type='category' width={120} stroke='#64748B'/>
                      <Tooltip />
                      <Bar dataKey='revenue' fill='#10B981' radius={[0, 4, 4, 0]}/>
                      <Bar dataKey='cost' fill='#F59E0B' radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
              </div>

              <div className='overflow-x-auto rounded-2xl border border-[#1A2333] bg-[#07111F] p-6'>
                <h2 className='mb-6 text-lg font-semibold text-white'> Crescimento Operacional </h2>
                  <ResponsiveContainer width='100%' height={320}> 
                    <BarChart data={exportHistory}>
                      <CartesianGrid stroke='#1A2333' />
                      <XAxis dataKey='year' stroke='#64748B'/>
                      <YAxis stroke='#64748B' />
                      <Tooltip />
                      <Bar dataKey='growth' radius={[4, 4, 0, 0]}>
                        {exportHistory.map((entry, index) => (
                          <Cell key={index}
                                fill={
                                  entry.growth >= 0
                                    ? '#10B981' : '#EF4444' } />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
              </div>
            </div>
          </section>
          </main>
        </div>
        <Footer />
        </>
    );
}