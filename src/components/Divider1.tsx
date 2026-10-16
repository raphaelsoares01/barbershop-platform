export default function Divider1() {
    const phrases = [
        "AGENDE SEU HORÁRIO",
        "CORTES CLÁSSICOS E MODERNOS",
        "ATENDIMENTO PERSONALIZADO",
        "CUIDADO EM CADA DETALHE",
        "ENCONTRE SEU ESTILO"
    ];

    const messages = Array.from({ length: 6 });

    return (
        <div className="relative flex h-[8vh] w-full items-center overflow-hidden bg-[#111111] text-[12px] font-mono tracking-[0.25em] text-[var(--secondary)]">
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>

            <div
                className="flex w-max shrink-0 whitespace-nowrap"
                style={{ animation: "marquee 200s linear infinite" }}
            >
                {messages.map((_, index) => (
                    <p key={index} aria-hidden={index > 0}>
                        {phrases.map((phrase, i) => (
                            <span key={phrase}>
                                {phrase}
                                <span className="mx-12">✦</span>
                            </span>
                        ))}
                    </p>
                ))}
            </div>
        </div>
    );
}