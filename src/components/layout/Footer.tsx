
export default function Footer() {
    return (
        <footer className='border-t border-[#5F6B7A]/10 bg-[#010910]'>
            <div className='mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 lg:flex-row lg:items-start lg:justify-between'>
                <div className='max-w-md'>
                    <div className='flex items-center gap-4'>
                            <h1 className='text-2xl font-bold text-white'> Nor<span className='text-[#1b6eb7]'>tex</span> </h1>
                            <span className='text-[10px] tracking-[0.3em] text-[#5F6B7A]'> SECURITY INTELLIGENCE </span>
                    </div>
                    <p className='mt-6 text-sm leading-7 text-[#8B98A5]'>
                        Plataforma inteligente voltada para monitoramento,
                        automação operacional e análise estratégica de dados
                        aplicados à segurança pública, IoT e inteligência artificial.
                    </p>
                </div>
                <div>
                    <h3 className='mb-5 text-sm font-semibold tracking-wide text-white'>Contato</h3>
                        <ul className='space-y-3 text-sm text-[#8B98A5]'>
                            <li> São Luís - MA </li>
                            <li> contato@nortex.com </li>
                            <li> +55 (98) 98581-4319 </li>
                        </ul>
                </div>
            </div>
            
            <div className='border-t border-white/5'>
                <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-xs text-[#5F6B7A] md:flex-row'>
                    <p> © 2026 Nortex Security Intelligence. Todos os direitos reservados. </p>
                    <div className='flex items-center gap-6'>
                        <a href='#' className='transition hover:text-[#010910]'> Privacidade </a>
                        <a href='#' className='transition hover:text-[#010910]'> Termos </a>
                        <a href='#' className='transition hover:text-[#010910]'> Segurança </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
