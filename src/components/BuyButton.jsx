const buttonThemes = {
  sephora: 'from-rose-100/80 via-rose-200/80 to-rose-100/80 text-rose-900',
  ulta: 'from-orange-100/80 via-orange-200/80 to-orange-100/80 text-orange-900',
  amazon: 'from-amber-100/80 via-yellow-200/80 to-amber-100/80 text-amber-900',
  brandSite: 'from-pink-100/80 via-pink-200/80 to-pink-100/80 text-pink-900',
};

const labelMap = {
  sephora: 'Sephora',
  ulta: 'Ulta',
  amazon: 'Amazon',
  brandSite: 'Brand',
};

function BuyButton({ store, price, url }) {
  if (!url) return null;
  const label = labelMap[store] ?? store;
  const gradient = buttonThemes[store] ?? 'from-slate-100/70 to-slate-200/70 text-slate-900';

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-between rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold shadow-sm shadow-white/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/30 ${gradient}`}
    >
      <span>{label}</span>
      {price && <span className="text-xs font-normal opacity-80">{price}</span>}
    </a>
  );
}

export default BuyButton;
