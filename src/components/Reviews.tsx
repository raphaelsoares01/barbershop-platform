"use client";

import { useState } from "react";

export type Review = {
    id: string;
    authorName: string;
    authorPhoto?: string;
    rating: number;
    relativeTime: string;
    text: string;
};

export const googleReviewSummary = {
    rating: 4.9,
    totalReviews: 87,
    googleMapsUrl: "https://share.google/RMmcsIXav7iHJkGnW",
};

// Edite, remova ou adicione objetos nesta lista para atualizar as avaliações.
export const reviews: Review[] = [
    {
        id: "review-01",
        authorName: "Alex Santana Dias",
        rating: 5,
        relativeTime: "há 2 anos atrás",
        text: "Show!! de bola excelente, profissional atendimento nota mil.. liguei em pleno domingo o mesmo me atendeu com maior alegria e satisfação...",
    },
    {
        id: "review-02",
        authorName: "Cristiane Fanhani",
        rating: 5,
        relativeTime: "há 7 anos atrás",
        text: "Com certeza o melhor cabeleireiro da baixada, ambiente agradável..profissional exemplar...meu marido e meus filhos são clientes dele a mais de 20 anos...",
    },
    {
        id: "review-03",
        authorName: "Ricardo Rodrigues",
        rating: 5,
        relativeTime: "há 2 meses atrás",
        text: "Melhor cabeleireiro de São Vicente",
    },
    {
        id: "review-04",
        authorName: "Zullu Ferreira Ferreira",
        rating: 5,
        relativeTime: "há 1 ano atrás",
        text: "Melhor salão atendimento espetacular",
    },
    {
        id: "review-05",
        authorName: "Marcelo Mendes",
        rating: 5,
        relativeTime: "há 1 ano atrás ",
        text: "Ótimo atendimento, simpatia e profissionalismo de sempre!",
    },
    {
        id: "review-06",
        authorName: "Brunno Velasco",
        rating: 5,
        relativeTime: "há 4 anos atrás",
        text: "Corto meu cabelo a mais de 20 anos. Orgulho de ter um profissional competente na região!! Sucesso!!!",
    },
    {
        id: "review-07",
        authorName: "Andre Luiz Arouca",
        rating: 5,
        relativeTime: "há 3 anos atrás",
        text: "Parceiro de muitos anos... Recomendo",
    },
    {
        id: "review-08",
        authorName: "Helio Candido",
        rating: 5,
        relativeTime: "há 3 anos atrás",
        text: "Lugar maravilhoso tratamento top lugar muito digno de voltar muito mais vezes",
    },
    {
        id: "review-09",
        authorName: "Cristina Gosn",
        rating: 5,
        relativeTime: "há 6 anos atrás",
        text: "Mais de 15 anos de excelente atendimento com meu filho!!! Tenho somente q agradecer...👏👏👏👏",
    },
];

const reviewsPerPage = 3;

function Stars({ rating }: { rating: number }) {
    return (
        <span className="tracking-[0.18em] text-[var(--secondary)]" aria-label={`${rating} de 5 estrelas`}>
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} aria-hidden="true">{index < rating ? "★" : "☆"}</span>
            ))}
        </span>
    );
}

export default function Reviews() {
    const [page, setPage] = useState(0);
    const pageCount = Math.max(1, Math.ceil(reviews.length / reviewsPerPage));
    const visibleReviews = reviews.slice(page * reviewsPerPage, (page + 1) * reviewsPerPage);

    const changePage = (nextPage: number) => {
        setPage((nextPage + pageCount) % pageCount);
    };

    return (
        <section id="reviews" className="relative overflow-hidden bg-[#03130e] px-6 py-24 text-white md:px-12 lg:px-16" aria-labelledby="reviews-title">
            <div className="relative mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-[var(--secondary)]">
                        <span className="h-px w-16 bg-[var(--secondary)]" />
                        A experiencia dos nossos clientes
                        <span className="h-px w-16 bg-[var(--secondary)]" />
                    </div>
                    <h2 id="reviews-title" className="font-title text-5xl leading-[0.95] text-[#f8f4ed] md:text-7xl">
                        Quem conhece,<br />
                        <span className="italic">recomenda.</span>
                    </h2>
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm">
                        <Stars rating={Math.round(googleReviewSummary.rating)} />
                        <span className="h-6 w-px bg-[var(--secondary)]/60" />
                        <strong className="font-title text-2xl font-normal">{googleReviewSummary.rating.toFixed(1).replace(".", ",")}/5</strong>
                        <span className="h-6 w-px bg-[var(--secondary)]/60" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">Avaliacao dos clientes</span>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {visibleReviews.map((review) => (
                        <article key={review.id} className="flex min-h-[285px] flex-col border border-[var(--secondary)]/80 bg-[#03130e]/80 p-8 [clip-path:polygon(0_12px,12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px))]">
                            <span className="font-title text-5xl leading-none text-[var(--secondary)]">“</span>
                            <div className="mt-1"><Stars rating={review.rating} /></div>
                            <p className="mt-4 flex-1 font-title text-base leading-relaxed text-white/90">{review.text}</p>
                            <div className="mt-5 flex items-end justify-between gap-3">
                                <div>
                                    <span className="mb-2 block h-px w-8 bg-[var(--secondary)]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--secondary)]">{review.authorName}</p>
                                </div>
                                <span className="text-xs text-white/45">{review.relativeTime}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-9 flex flex-col items-center gap-6">
                    <a href={googleReviewSummary.googleMapsUrl} target="_blank" rel="noreferrer" className="border border-[var(--secondary)] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:bg-[var(--secondary)] hover:text-[#03130e]">
                        Ver todas as avaliacoes <span className="ml-3 text-base">→</span>
                    </a>
                    {pageCount > 1 && (
                        <div className="flex items-center gap-4" aria-label="Navegacao das avaliacoes">
                            <button type="button" onClick={() => changePage(page - 1)} aria-label="Avaliacoes anteriores" className="text-[var(--secondary)]">←</button>
                            {Array.from({ length: pageCount }, (_, index) => (
                                <button key={index} type="button" onClick={() => setPage(index)} aria-label={`Ir para pagina ${index + 1}`} className={`h-2 w-2 rounded-full border border-[var(--secondary)] transition-colors ${index === page ? "bg-[var(--secondary)]" : "bg-transparent"}`} />
                            ))}
                            <button type="button" onClick={() => changePage(page + 1)} aria-label="Proximas avaliacoes" className="text-[var(--secondary)]">→</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}