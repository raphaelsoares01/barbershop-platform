export default function About() {
	return (
        <section className="border-t-1 border-[var(--primary)] relative grid min-h-[80vh] overflow-hidden bg-[#080808] text-white lg:grid-cols-[1.1fr_0.85fr]" aria-label="Nossa Marca">
            <div className="relative min-h-[40vh] overflow-hidden lg:min-h-[80vh]">
                <img
                    src="https://placehold.co/1200x1400/171717/FFFFFF?"
                    alt="Interior da barbearia"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080808]/35" aria-hidden="true" />
            </div>

            <div className="pointer-events-none absolute right-[-7rem] top-1/3 pt-10 z-0 hidden w-[min(42vw,34rem)] -translate-y-1/2 rotate-[2deg] opacity-[0.05] mix-blend-difference lg:block" aria-hidden="true">
                <img src="/images/logo-single-color.png" alt="" className="h-auto w-full object-contain" />
            </div>

            <div className="relative z-10 flex items-center px-7 py-20 sm:px-12 lg:px-16 xl:px-14">
                <div className="max-w-xl">
                    <div className="mb-10 flex items-center gap-5">
                        <img src="/images/logo.png" alt="Giuliano Queiroz" className="h-24 w-24 object-contain" />
                        <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/65">Nossa marca</p>
                        <span className="h-px w-10 bg-[var(--secondary)]" aria-hidden="true" />
                    </div>

                    <h2 className="font-title text-4xl font-bold uppercase leading-[0.98] tracking-[0.02em] sm:text-5xl xl:text-6xl">
                        Um espaço feito para <span className="text-[var(--secondary)]">cuidar do seu estilo.</span>
                    </h2>

                    <p className="mt-10 max-w-lg text-base leading-8 text-white/75">
                        A <strong className="font-semibold text-[var(--secondary)]">Giuliano Queiroz Barbearia</strong> nasceu do trabalho dedicado ao cuidado masculino, com atenção a cada cliente e a cada detalhe. Um ambiente onde você pode cuidar do visual, encontrar seu estilo e contar com um atendimento próximo e personalizado.
                    </p>
                    <p className="mt-4 max-w-lg text-base leading-8 text-white/75">
                        Cada cliente chega com suas próprias preferências, e nosso trabalho é entender o que combina com cada um. Do corte clássico às escolhas mais modernas, buscamos unir técnica e bom gosto para entregar um resultado que faça sentido para você.
                    </p>
                </div>
            </div>
        </section>
    )
}
