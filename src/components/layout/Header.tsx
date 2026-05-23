import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
          ? 'text-[#010910] border-b-2 border-[#010910] pb-1 transition-all duration-300'
          : 'text-[#BBC9CF] hover:text-[#010910] transition-all duration-300'

    return (
    <>
    <header className='w-full border-b border-[#5F6B7A]/10'> 
      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4'>
        <div className='flex items-center gap-4'>   
                <div className='flex flex-col'>
                  <h1 className='text-2xl font-bold tracking-wide text-black'>Nor<span className='text-[#010910]'>tex</span></h1>
                      <span className='text-[10px] tracking-[0.3em] text-[#5F6B7A]'>
                          SECURITY INTELLIGENCE
                      </span>
                 </div>
              </div>

              <nav className='hidden items-center gap-10 text-sm font-medium lg:flex'>
                <NavLink to='/' className={linkClass}> Visão Geral </NavLink>
                <NavLink to='/operational' className={linkClass}> Operacional </NavLink>
                <NavLink to='/iot' className={linkClass}> IoT & Sensores </NavLink>
                <NavLink to='/ia' className={linkClass}> Inteligência IA </NavLink>
              </nav>

              <button onClick={() => setMenuOpen(!menuOpen)}
                className='flex items-center justify-center rounded-lg border border-white/10 bg-[#07111F] p-2 text-white lg:hidden'>
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {menuOpen && (
              <div className='border-t border-white/10 bg-[#010910]/98 backdrop-blur-xl lg:hidden'>
                <nav className='flex flex-col gap-6 px-6 py-8 text-sm font-medium'>
                  <NavLink to='/' className={linkClass} onClick={() => setMenuOpen(false)}> Visão Geral </NavLink>
                  <NavLink to='/operational' className={linkClass} onClick={() => setMenuOpen(false)}> Operacional </NavLink>
                  <NavLink to='/iot' className={linkClass} onClick={() => setMenuOpen(false)}> IoT & Sensores </NavLink>
                  <NavLink to='/ia'className={linkClass} onClick={() => setMenuOpen(false)}> Inteligência IA </NavLink>
                </nav>
              </div>
            )}
    </header>
    </>
    )
}