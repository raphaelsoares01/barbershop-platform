export default function Services() {
    return (
        <section className="bg-[#111111] px-6 py-16 text-white md:px-12 lg:px-16" aria-labelledby="services-title">
            <div className="mt-40 mb-40 mx-auto max-w-7xl">
                <h2 id="services-title" className="mb-12 text-5xl font-bold uppercase tracking-tight md:text-7xl">
                    Nossos <span className="italic text-[var(--secondary)]">serviços</span>
                </h2>

                <div className="grid min-h-[620px] gap-4 lg:grid-cols-[2fr_1fr] lg:grid-rows-2">
                    <article className="group relative min-h-[460px] overflow-hidden lg:row-span-2">
                        <img
                            src="https://placehold.co/600x400/202321/c9c2b5?text=Sem+imagem"
                            alt="Corte e Barba"
                            className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--secondary)]">Especialidade</p>
                            <h3 className="text-3xl font-bold md:text-4xl">Corte e Barba</h3>
                            <p className="mt-3 max-w-2xl text-sm text-white/75 md:text-base">
                                Sua identidade, seu estilo. Um espaço dedicado à arte da barbearia, onde tradição e sofisticação se encontram.
                            </p>
                        </div>
                    </article>

                    <article className="group relative min-h-[260px] overflow-hidden">
                        <img
                            src="https://placehold.co/600x400/202321/c9c2b5?text=Sem+imagem"
                            alt="Sombrancelhas"
                            className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--secondary)]">Estética</p>
                            <h3 className="text-xl font-bold md:text-2xl">Sombrancelhas</h3>
                            <p className="mt-2 text-sm text-white/65">Definição e estilo para suas sombrancelhas.</p>
                        </div>
                    </article>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <article className="group relative min-h-[260px] overflow-hidden">
                            <img
                                src="https://placehold.co/600x400/202321/c9c2b5?text=Sem+imagem"
                                alt="Open Bar"
                                className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--secondary)]">Experiência</p>
                                <h3 className="text-lg font-bold">Lavatório</h3>
                                <p className="mt-2 text-sm text-white/65">Lavagem e penteado masculino.</p>
                            </div>
                        </article>

                        <article className="group relative min-h-[260px] overflow-hidden">
                            <img
                                src="https://placehold.co/600x400/202321/c9c2b5?text=Sem+imagem"
                                alt="Espaço Kids"
                                className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--secondary)]">Outros</p>
                                <h3 className="text-lg font-bold">Tingimentos</h3>
                                <p className="mt-2 text-sm text-white/65">Coloração e cuidados para o cabelo.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}