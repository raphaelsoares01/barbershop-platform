export default function Contact() {
    return (
        <section className="bg-[var(--primary)] px-6 py-20 text-white md:px-12 lg:px-16 lg:py-28" aria-labelledby="contact-title">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
                <div>
                    <div className="mb-9 flex items-center gap-5 text-xs uppercase tracking-[0.35em] text-[var(--secondary)]">
                        <span>Contato</span>
                        <span className="h-px w-14 bg-[var(--secondary)]" aria-hidden="true" />
                    </div>
                    <h2 id="contact-title" className="max-w-xl font-title text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
                        Fale com a gente
                    </h2>
                    <p className="mt-8 max-w-lg text-base leading-7 text-white/70 md:text-lg">
                        Agende seu horário, tire suas dúvidas ou fale com nossa equipe. Estamos à disposição para atender você!
                    </p>
                    <div className="mt-14 max-w-lg space-y-10 text-sm">
                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">Unidade</h3>
                            <div className="space-y-3 text-white/75">
                                <p>São Paulo - São Vicente</p>
                                <p>R. Dom Duarte da Costa, 457<br />Vila Jockei Clube, São Vicente - SP</p>
                                <a className="block transition-colors hover:text-[var(--secondary)]" href="tel:+5548984580439">+55 13 97420-7171</a>
                                <a className="block transition-colors hover:text-[var(--secondary)]" href="mailto:contato@barbeariavip.com.br">giulianoqueiroz@gmail.com.br</a>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">Horário de funcionamento</h3>
                            <dl className="space-y-3 text-white/60">
                                <div className="grid grid-cols-[1fr_auto] gap-6"><dt>Segunda</dt><dd className="text-white/85">Fechado</dd></div>
                                <div className="grid grid-cols-[1fr_auto] gap-6"><dt>Terça a Sábado</dt><dd className="text-white/85">08:00 - 20:00</dd></div>
                                <div className="grid grid-cols-[1fr_auto] gap-6"><dt>Domingo</dt><dd className="text-white/85">Fechado</dd></div>
                            </dl>
                        </div>

                        <div>
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">Redes sociais</h3>
                            <div className="flex flex-wrap gap-x-7 gap-y-3 text-white/75">
                                <a className="transition-colors hover:text-[var(--secondary)]" href="#instagram">Instagram&nbsp; @giulianocabeleireiro</a>
                                <a className="transition-colors hover:text-[var(--secondary)]" href="#facebook">Facebook&nbsp; /giulianoqueiroz</a>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="space-y-8" action="#" method="post">
                    <div>
                        <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)]">Nome</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            className="mt-4 w-full border-0 border-b border-white/25 bg-transparent px-0 pb-4 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[var(--secondary)]"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)]">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="mt-4 w-full border-0 border-b border-white/25 bg-transparent px-0 pb-4 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[var(--secondary)]"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-[var(--secondary)]">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="mt-4 w-full resize-y border-0 border-b border-white/25 bg-transparent px-0 pb-4 text-base text-white outline-none transition-colors placeholder:text-white/40 focus:border-[var(--secondary)]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-5 bg-[var(--secondary)] px-8 py-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] transition-colors hover:bg-white"
                    >
                        Enviar mensagem
                        <span aria-hidden="true">&#8594;</span>
                    </button>
                </form>
            </div>
        </section>
    );
}