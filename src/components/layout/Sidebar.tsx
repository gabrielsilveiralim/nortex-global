import { useState, useEffect } from 'react'
import { LayoutDashboard, BarChart3, Cpu, BrainCircuit, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024) }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center rounded-xl py-3 transition-all duration-300 ${
      open || isDesktop
        ? 'px-4 gap-3 justify-start' : 'justify-center' } ${ isActive
        ? 'bg-[#1b6eb7]/20 text-[#4DA3FF] border border-[#1b6eb7]/30' : 'text-[#BBC9CF] hover:bg-[#07111F] hover:text-white' }`

  return (
    <>
      <aside className={`fixed z-2 flex h-full flex-col border-r border-white/10 bg-[#010910] ${ open || isDesktop ? 'w-56' : 'w-20'  }`}>

        <div className={`flex items-center border-b border-white/10  ${  open || isDesktop ? 'justify-between px-6 py-6' : 'justify-center py-6'}`}>
          {(open || isDesktop) && (
            <div>
              <h1 className='text-2xl font-bold tracking-wide text-white'>Nor<span className='text-[#1b6eb7]'>tex</span></h1>
              <span className='text-[9px] tracking-[0.25em] text-[#5F6B7A]'> SECURITY INTELLIGENCE </span>
            </div>
          )}

          {!isDesktop && (
            <button onClick={() => setOpen(!open)} className='text-white'>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>

        <nav className='flex flex-1 flex-col gap-3 px-4 py-8'>
          <NavLink to='/' className={linkClass}>
            <LayoutDashboard size={20} />
            {(open || isDesktop) && (
              <span>Visão Geral</span> )}
          </NavLink>

          <NavLink to='/operational' className={linkClass}>
            <BarChart3 size={20} />
            {(open || isDesktop) && (
              <span>Operacional</span>)}
          </NavLink>

          <NavLink to='/iot' className={linkClass}>
            <Cpu size={20} />
            {(open || isDesktop) && (
              <span>IoT & Sensores</span> )}
          </NavLink>

          <NavLink to='/ia' className={linkClass}>
            <BrainCircuit size={20} />
            {(open || isDesktop) && (
              <span>Inteligência IA</span> )}
          </NavLink>
        </nav>
      </aside>
    </>
  )
}