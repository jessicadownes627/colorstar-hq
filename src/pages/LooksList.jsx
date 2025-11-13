import { Link } from 'react-router-dom';
import { getLooks } from '../data/looks';

const looks = getLooks();

function LooksList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-950 via-slate-950 to-black px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-semibold uppercase tracking-[0.4em] text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-rose-200 via-rose-50 to-amber-100 drop-shadow-[0_15px_45px_rgba(255,192,203,0.35)]">
            ColorStar HQ
          </h1>
          <p className="text-xl font-medium text-rose-50 md:text-2xl">
            Tap into celeb glam, shoppable instantly
          </p>
          <p className="text-base text-rose-100/70 md:text-lg">
            Every look is sourced with exact products, luxe-to-dupe breakdowns, and affiliate-ready links.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {looks.map((look) => (
            <Link
              key={look.id}
              to={`/look/${look.id}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-rose-200/50 hover:bg-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={look.lookImage}
                  alt={look.lookName}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-rose-200">{look.celebrity}</p>
                <h2 className="text-2xl font-semibold text-white">{look.lookName}</h2>
                <p className="text-sm text-rose-50/70">{look.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {look.tags?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-rose-50/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default LooksList;
