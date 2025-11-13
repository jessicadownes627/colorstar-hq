import BuyButton from './BuyButton';

const storeOrder = ['sephora', 'ulta', 'amazon', 'brandSite'];

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="rounded-3xl border border-rose-100/30 bg-white/5 p-5 shadow-[0_20px_60px_rgba(255,255,255,0.08)] backdrop-blur">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-rose-200">{product.category}</p>
          <h3 className="text-xl font-semibold text-white">{product.brand}</h3>
          <p className="text-base text-rose-50/80">{product.name}</p>
          {product.shade && (
            <p className="text-sm text-rose-100/70">Shade: {product.shade}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {storeOrder.map((store) => {
            const option = product.purchases?.[store];
            if (!option?.url) return null;
            return (
              <BuyButton key={`${product.name}-${store}`} store={store} price={option.price} url={option.url} />
            );
          })}
        </div>

        {product.notes && <p className="text-sm text-rose-50/70">{product.notes}</p>}
      </div>

      {product.dupes && product.dupes.length > 0 && (
        <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Dupes</p>
          <div className="space-y-3">
            {product.dupes.map((dupe) => (
              <div key={`${product.name}-${dupe.name}`} className="flex items-start gap-3">
                <img
                  src={dupe.image || 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=200&q=60'}
                  alt={dupe.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{dupe.brand}</p>
                  <p className="text-sm text-rose-50/80">{dupe.name}</p>
                  {dupe.shade && <p className="text-xs text-rose-100/70">Shade: {dupe.shade}</p>}
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-rose-50/70">
                    {dupe.price && <span>{dupe.price}</span>}
                    {dupe.url && (
                      <a
                        className="text-rose-200 underline-offset-4 hover:underline"
                        href={dupe.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shop dupe
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default ProductCard;
