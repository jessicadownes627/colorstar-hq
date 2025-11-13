import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getLookById } from '../data/looks';

function CelebLook() {
  const { lookId } = useParams();
  const look = getLookById(lookId);

  if (!look) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
        <p className="text-2xl font-semibold">Oops! We haven't created that glam yet.</p>
        <Link to="/" className="mt-4 rounded-full border border-white/20 px-5 py-2 text-sm uppercase tracking-[0.3em] text-rose-100">
          Back to looks
        </Link>
      </div>
    );
  }

  const { products = {} } = look;
  const sections = ['face', 'eyes', 'brows', 'lips'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-rose-950 to-black px-4 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-rose-200"
        >
          ← All looks
        </Link>

        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-rose-200">{look.celebrity}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{look.lookName}</h1>
          <p className="text-base text-rose-50/75">{look.description}</p>
          <div className="flex flex-wrap gap-2">
            {look.tags?.map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-rose-50/80">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10">
          <img src={look.lookImage} alt={look.lookName} className="h-full w-full object-cover" />
        </div>

        {sections.map((section) => {
          const categoryProducts = products[section];
          if (!categoryProducts?.length) return null;
          return (
            <section key={section} className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-rose-200">
                  {section}
                </p>
                <h2 className="text-3xl font-semibold capitalize text-white">{section} products</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {categoryProducts.map((product) => (
                  <ProductCard key={`${section}-${product.name}`} product={product} />
                ))}
              </div>
            </section>
          );
        })}

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Tone Compatibility</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {Object.entries(look.toneCompatibility || {}).map(([tone, matches]) => (
              <span
                key={tone}
                className={`rounded-full px-4 py-2 text-sm capitalize ${
                  matches ? 'border border-rose-200/80 text-white' : 'border border-white/10 text-rose-100/60'
                }`}
              >
                {tone}
              </span>
            ))}
          </div>
        </section>

        {look.premium && (
          <section className="rounded-3xl border border-rose-200/40 bg-rose-200/10 p-6 text-rose-50">
            <p className="text-sm uppercase tracking-[0.5em] text-rose-100">Premium perks</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {look.premium.isPremiumLook ? 'Unlock deeper glam notes' : 'This look is free for everyone'}
            </h3>
            <p className="mt-2 text-sm text-rose-50/80">{look.premium.premiumNotes}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em]">
              {Object.entries(look.premium.unlockFeatures || {}).map(([feature, enabled]) => (
                <span
                  key={feature}
                  className={`rounded-full px-3 py-1 ${
                    enabled ? 'bg-white/20 text-white' : 'border border-white/20 text-rose-100/70'
                  }`}
                >
                  {feature}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CelebLook;
