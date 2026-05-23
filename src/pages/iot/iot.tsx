import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { Wifi, WifiOff, Thermometer, Gauge,AlertTriangle } from "lucide-react";

const sensors = [
  {
    id: "T-001",
    name: "Tanque Norte",
    temp: 42,
    pressure: 4.2,
    status: "Normal",
    online: true
  },
  {
    id: "T-002",
    name: "Tanque Alpha",
    temp: 71,
    pressure: 7.1,
    status: "Crítico",
    online: true
  },
  {
    id: "T-003",
    name: "Tanque Sul",
    temp: 56,
    pressure: 5.6,
    status: "Atenção",
    online: true
  },
  {
    id: "T-004",
    name: "Tanque Backup",
    temp: 35,
    pressure: 3.1,
    status: "Normal",
    online: false
  }
];

export default function Iot() {
  return (
    <>
      <Header />
      <main className='h-full bg-[#010910]'>
        <section className='mx-auto w-full max-w-7xl px-4 py-16'>
          <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
            <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5'>
              <p className='text-sm text-[#64748B]'> Sensores Online </p>
              <span className='mt-2 block text-4xl font-bold text-[#22C55E]'> 127 </span>
            </div>

            <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5'>
              <p className='text-sm text-[#64748B]'> Offline </p>
              <span className='mt-2 block text-4xl font-bold text-[#EF4444]'> 3 </span>
            </div>

            <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5'>
              <p className='text-sm text-[#64748B]'> Alertas </p>
              <span className='mt-2 block text-4xl font-bold text-[#FACC15]'> 5 </span>
            </div>

            <div className='rounded-2xl border border-[#1A2333] bg-[#07111F] p-5'>
              <p className='text-sm text-[#64748B]'> Eficiência </p>
              <span className='mt-2 block text-4xl font-bold text-[#00BFFF]'>  98% </span>
            </div>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            {sensors.map((sensor, index) => (
              <div key={index}
                className={`rounded-2xl border p-5 ${sensor.status === "Crítico"
                    ? "border-[#EF4444]/30"
                    : sensor.status === "Atenção"
                      ? "border-[#FACC15]/30"
                      : "border-[#22C55E]/30"
                  } bg-[#07111F]`}>
                <div className='mb-5 flex items-start justify-between'>
                  <div>
                    <p className='text-sm text-[#64748B]'> {sensor.id} </p>
                    <h2 className='mt-1 text-lg font-semibold text-white'> {sensor.name} </h2>
                  </div>

                  {sensor.online ? (
                    <Wifi className='text-[#22C55E]' />
                  ) : (
                    <WifiOff className='text-[#EF4444]' />
                  )}
                </div>

                <div className='space-y-5'>
                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Thermometer size={16} className='text-[#FACC15]'/>
                        <span className='text-sm text-[#64748B]'> Temperatura </span>
                      </div>
                      <span className='text-sm text-white'> {sensor.temp}°C </span>
                    </div>
                  </div>

                  <div>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Gauge size={16} className='text-[#00BFFF]'/>
                        <span className='text-sm text-[#64748B]'> Pressão </span>
                      </div>
                      <span className='text-sm text-white'> {sensor.pressure} bar </span>
                    </div>
                  </div>

                  <div className='flex items-center gap-2 pt-2'>
                    <AlertTriangle size={16} className={
                        sensor.status === "Crítico"
                          ? "text-[#EF4444]"
                          : sensor.status === "Atenção"
                            ? "text-[#FACC15]"
                            : "text-[#22C55E]"
                      } />

                    <span className='text-sm text-[#CBD5E1]'>  {sensor.status} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}