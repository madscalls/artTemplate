// Generated from the Juno Marlow design mockup (Shop.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0}\na{color:inherit}a:hover{color:#9A48D0}\n.jm *{box-sizing:border-box}\n.jm{font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);background:#fff;overflow-x:clip}\n.wrap{max-width:1240px;margin:0 auto;padding:0 32px}\n.disp{font-family:'Syne',sans-serif;font-weight:800;letter-spacing:-.02em;line-height:.95;margin:0}\n.hand{font-family:'Caveat',cursive;font-weight:700;line-height:1}\n.rough{filter:url(#rough)}\n.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:50px;padding:0 22px;font:700 15px 'DM Sans',sans-serif;text-decoration:none;color:var(--ink);background:transparent;border:0;cursor:pointer;isolation:isolate}\n.btn::before{content:\"\";position:absolute;inset:0;border:2.5px solid var(--ink);border-radius:30px 26px 32px 24px;filter:url(#rough);transition:transform .2s}\n.btn:hover::before{transform:rotate(-2deg) scale(1.03)}\n.btn-fill::after{content:\"\";position:absolute;inset:5px -4px -5px 4px;background:var(--pop);border-radius:30px 26px 32px 24px;z-index:-1;filter:url(#rough)}\n.nav a{font-weight:700;font-size:15px;text-decoration:none;padding:12px 4px}\n.nav a:hover,.nav a[aria-current=\"page\"]{color:#9A48D0}\n.art{position:relative;width:100%;overflow:hidden}\n.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:48px 36px}\n.card{display:flex;flex-direction:column;gap:12px}\n/* prints shown framed and matted */\n.frame{padding:12px;transition:transform .3s,box-shadow .3s;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 26px 40px -24px rgba(30,27,36,.55)}\n.card:nth-child(3n+1) .frame{background:#1E1B24}\n.card:nth-child(3n+2) .frame{background:linear-gradient(90deg,#c9a274,#e2c39a 30%,#b98f5f 60%,#d8b688);box-shadow:inset 0 0 0 2px rgba(80,50,20,.35),0 26px 40px -24px rgba(30,27,36,.55)}\n.card:nth-child(3n) .frame{background:#fbfaf6;box-shadow:inset 0 0 0 1px rgba(30,27,36,.18),0 26px 40px -24px rgba(30,27,36,.45)}\n.frame .mat{background:#fbfaf6;padding:clamp(14px,2vw,26px);box-shadow:inset 0 2px 6px rgba(0,0,0,.18)}\n.card:hover .frame{transform:translateY(-4px)}\n.sizes{display:flex;flex-wrap:wrap;gap:6px}\n.sz{position:relative;min-height:44px;min-width:64px;padding:0 12px;border:0;background:transparent;font:700 14px 'DM Sans',sans-serif;color:var(--ink);cursor:pointer}\n.sz::before{content:\"\";position:absolute;inset:4px 0;border:2px solid var(--ink);border-radius:14px 10px 16px 12px;filter:url(#rough)}\n.sz.on{color:#fff}\n.sz.on::before{background:var(--ink)}\n.sz span{position:relative}\n.cartbtn{position:relative;min-height:48px;padding:0 18px;border:0;background:transparent;font:700 15px 'DM Sans',sans-serif;color:var(--ink);cursor:pointer;display:inline-flex;align-items:center;gap:10px;isolation:isolate}\n.cartbtn::before{content:\"\";position:absolute;inset:0;border:2.5px solid var(--ink);border-radius:26px 30px 24px 32px;filter:url(#rough)}\n.count{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:50%;background:#9A48D0;color:#fff;font-size:13px}\n.drawer{position:fixed;top:0;right:0;bottom:0;width:min(420px,100%);background:#fff;z-index:40;box-shadow:-20px 0 60px rgba(30,27,36,.25);display:flex;flex-direction:column;padding:28px;gap:18px;overflow:auto}\n.scrim{position:fixed;inset:0;background:rgba(30,27,36,.45);z-index:39;border:0;cursor:pointer}\n.iconbtn{width:48px;height:48px;border-radius:50%;border:2px solid var(--ink);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink)}\n.info{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}\n@media (max-width:980px){.grid,.info{grid-template-columns:repeat(2,minmax(0,1fr))}.nav-links{display:none!important}}\n@media (max-width:600px){.wrap{padding:0 20px} .nav{gap:10px!important}.nav .hand{font-size:26px!important}.nav .btn,.nav .cartbtn{padding:0 14px;font-size:14px!important}.grid,.info{grid-template-columns:minmax(0,1fr)}}\n@media (prefers-reduced-motion:reduce){.frame,.btn::before{transition:none}}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', sizes: {}, cart: [], cartOpen: false, added: -1 };
  }

  prints() {
    const ART = ['8 × 10', '11 × 14', '16 × 20'];
    return [
      { title: 'Deep Water', type: 'art print', ratio: '4 / 5', sizes: ART, price: '$[PRICE]', img: img('/images/deep-water.jpg') },
      { title: 'Peony Field', type: 'art print', ratio: '4 / 5', sizes: ART, price: '$[PRICE]', img: img('/images/peony-field.jpg') },
      { title: 'Bloom', type: 'giclée edition', ratio: '4 / 5', sizes: ['16 × 20'], price: '$[PRICE]', img: img('/images/bloom.jpg') },
      { title: 'Marigold', type: 'art print', ratio: '4 / 5', sizes: ART, price: '$[PRICE]', img: img('/images/marigold.jpg') },
      { title: 'Lilac Hour', type: 'art print', ratio: '4 / 5', sizes: ART, price: '$[PRICE]', img: img('/images/lilac-hour.jpg') },
      { title: 'Copper Tide', type: 'giclée edition', ratio: '4 / 5', sizes: ['16 × 20'], price: '$[PRICE]', img: img('/images/copper-tide.jpg') },
    ];
  }

  renderVals() {
    const TAG = { 'art print': '#9A48D0', 'giclée edition': '#275DAD' };
    const { filter, sizes, cart, added } = this.state;
    const all = this.prints();
    const isArt = (p) => p.type === 'art print';
    const items = all.map((p, i) => ({ p, i }))
      .filter(({ p }) => filter === 'all' || (filter === 'art' ? isArt(p) : !isArt(p)))
      .map(({ p, i }) => {
        const sel = sizes[i] ?? 0;
        return {
          ...p,
          alt: p.title + ', print',
          tagColor: TAG[p.type],
          sizeLabel: 'Size for ' + p.title,
          sizes: p.sizes.map((s, j) => ({
            label: s + ' in', on: j === sel, cls: 'sz' + (j === sel ? ' on' : ''),
            pick: () => this.setState({ sizes: { ...sizes, [i]: j } }),
          })),
          addLabel: added === i ? 'Added ✓' : 'Add to cart',
          add: () => this.setState({ cart: [...cart, { i, size: p.sizes[sel] }], added: i }),
        };
      });
    return {
      ink: this.props.ink ?? '#1E1B24',
      pop: this.props.pop ?? '#7DB46C',
      filters: [['all', 'All prints'], ['art', 'Art prints'], ['edition', 'Limited editions']].map(([v, label]) => ({
        label, on: filter === v, cls: 'sz' + (filter === v ? ' on' : ''), pick: () => this.setState({ filter: v }),
      })),
      items,
      count: cart.length,
      cartLabel: 'Open cart, ' + cart.length + (cart.length === 1 ? ' item' : ' items'),
      cartOpen: this.state.cartOpen,
      openCart: () => this.setState({ cartOpen: true }),
      closeCart: () => this.setState({ cartOpen: false }),
      cart: cart.map((c, k) => ({
        title: all[c.i].title, img: all[c.i].img, alt: all[c.i].title,
        size: c.size + ' in', price: all[c.i].price,
        remove: () => this.setState({ cart: cart.filter((_, n) => n !== k) }),
      })),
      empty: cart.length === 0,
      hasItems: cart.length > 0,
    };
  }
}

export default function Shop() {
  const props = useTheme({"ink": "#1E1B24", "pop": "#7DB46C"});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Juno Marlow, artist \u2014 print shop"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="jm" style={{"--ink": v.ink, "--pop": v.pop}}>
<svg width="0" height="0" style={{position: "absolute"}} aria-hidden="true" focusable="false">
<filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7"></feTurbulence><feDisplacementMap in="SourceGraphic" scale="3.2"></feDisplacementMap></filter>
</svg>

<header style={{background: "#fff"}}>
<div className="wrap nav" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "92px"}}>
<Link to="/" style={{textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", padding: "6px 0"}}>
<svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true" className="rough"><circle cx="22" cy="22" r="18" fill="#7DB46C"></circle><path d="M10 26c6-10 14 6 24-6" fill="none" stroke="#1E1B24" strokeWidth="3" strokeLinecap="round"></path><circle cx="30" cy="14" r="4" fill="#9A48D0"></circle></svg>
<span className="hand" style={{fontSize: "34px"}}>Juno Marlow</span>
</Link>
<nav className="nav-links" aria-label="Main" style={{display: "flex", gap: "28px", alignItems: "center"}}>
<Link to="/#gallery">Gallery</Link>
<Link to="/#about">About</Link>
<Link to="/shop" aria-current="page">Print shop</Link>
<Link to="/shows">Shows</Link>
<Link to="/#commissions">Commissions</Link>
</nav>
<button type="button" className="cartbtn" onClick={v.openCart} aria-label={v.cartLabel}>
<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 8h14l-1.5 12h-11z"></path><path d="M9 8a3 3 0 0 1 6 0"></path></svg>
Cart <span className="count">{v.count}</span>
</button>
</div>
</header>

<main>

<section style={{padding: "clamp(40px,6vw,80px) 0 clamp(32px,4vw,56px)"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "28px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "46rem"}}>
<span className="hand" style={{fontSize: "30px", color: "#9A48D0", transform: "rotate(-2deg)", alignSelf: "flex-start"}}>take one home ✶</span>
<h1 className="disp" style={{fontSize: "clamp(56px,8vw,120px)"}}>Print <span style={{position: "relative", display: "inline-block"}}>shop<svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true" style={{position: "absolute", left: "-2%", bottom: "-12px", width: "104%", height: "26px"}} className="rough"><path d="M4 24c70-16 150-20 290-6" fill="none" stroke="#86BBBD" strokeWidth="10" strokeLinecap="round"></path></svg></span></h1>
<p style={{margin: "0", fontSize: "19px", lineHeight: "1.6"}}>Archival prints of the paintings and drawings, plus small-run linocuts and risographs. Signed by hand and shipped flat.</p>
</div>
<div role="group" aria-label="Filter prints" style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
{v.filters.map((f, $index) => (<Fragment key={$index}><button type="button" className={f.cls} aria-pressed={f.on} onClick={f.pick}><span>{f.label}</span></button></Fragment>))}
</div>
</div>
</section>


<section style={{padding: "0 0 clamp(64px,8vw,110px)"}}>
<div className="wrap grid">
{v.items.map((p, $index) => (<Fragment key={$index}><article className="card">
<div className="frame"><div className="mat"><img className="art" src={p.img} alt={p.alt} style={{display: "block", aspectRatio: p.ratio, objectFit: "cover"}} /></div></div>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", paddingTop: "10px"}}>
<h2 style={{margin: "0", fontFamily: "'Syne', sans-serif", fontWeight: "700", fontSize: "22px"}}>{p.title}</h2>
<span style={{fontWeight: "700", fontSize: "18px"}}>{p.price}</span>
</div>
<span className="hand" style={{fontSize: "22px", color: p.tagColor}}>{p.type}</span>
<div className="sizes" role="group" aria-label={p.sizeLabel}>
{p.sizes.map((s, $index) => (<Fragment key={$index}><button type="button" className={s.cls} aria-pressed={s.on} onClick={s.pick}><span>{s.label}</span></button></Fragment>))}
</div>
<button type="button" className="btn btn-fill" onClick={p.add} style={{alignSelf: "flex-start", marginTop: "4px"}}>{p.addLabel}</button>
</article></Fragment>))}
</div>
</section>


<section style={{background: "#F6EFA6", padding: "clamp(56px,7vw,96px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "36px"}}>
<h2 className="disp" style={{fontSize: "clamp(36px,4.6vw,64px)"}}>About the prints</h2>
<div className="info">
<div style={{background: "#fff", padding: "26px", transform: "rotate(-1deg)", display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "28px", color: "#9A48D0"}}>the paper</span>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6"}}>[Archival giclée on heavyweight cotton rag paper. Colors matched to the original.]</p>
</div>
<div style={{background: "#fff", padding: "26px", transform: "rotate(1deg)", display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "28px", color: "#275DAD"}}>shipping</span>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6"}}>[Shipped flat in a rigid mailer within 5 business days. Free over $[amount].]</p>
</div>
<div style={{background: "#fff", padding: "26px", transform: "rotate(-.5deg)", display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "28px", color: "#3f7a33"}}>framing</span>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.6"}}>[Prints come unframed in standard sizes, so any ready-made frame fits.]</p>
</div>
</div>
</div>
</section>
</main>

<footer style={{background: "var(--ink)", color: "#fff", padding: "48px 0 32px"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", alignItems: "flex-end"}}>
<span className="hand" style={{fontSize: "40px", color: "#F6EFA6"}}>Juno Marlow</span>
<span style={{fontSize: "13px", color: "rgba(255,255,255,.7)"}}>© [Year] Juno Marlow. All artwork © the artist. · Site by Whelk Works</span>
</div>
</footer>


{v.cartOpen && (<><button type="button" className="scrim" onClick={v.closeCart} aria-label="Close cart"></button>
<aside className="drawer" role="dialog" aria-modal="true" aria-label="Your cart">
<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
<h2 className="disp" style={{fontSize: "40px"}}>Your cart</h2>
<button type="button" className="iconbtn" onClick={v.closeCart} aria-label="Close cart"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
</div>
{v.empty && (<><p style={{margin: "0", fontSize: "17px"}}>Nothing here yet.</p>
<span className="hand" style={{fontSize: "26px", color: "#9A48D0"}}>go pick a favorite ✶</span></>)}
{v.cart.map((c, $index) => (<Fragment key={$index}><div style={{display: "grid", gridTemplateColumns: "72px minmax(0, 1fr) auto", gap: "14px", alignItems: "center", paddingBottom: "14px", borderBottom: "2px dashed rgba(30,27,36,.2)"}}>
<img className="art" src={c.img} alt={c.alt} style={{display: "block", aspectRatio: "1 / 1", objectFit: "cover"}} />
<div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
<span style={{fontWeight: "700"}}>{c.title}</span>
<span style={{fontSize: "14px", color: "#4a4652"}}>{c.size} · {c.price}</span>
</div>
<button type="button" onClick={c.remove} style={{minHeight: "44px", border: "0", background: "none", font: "700 14px 'DM Sans', sans-serif", color: "#9A48D0", cursor: "pointer", textDecoration: "underline"}}>Remove</button>
</div></Fragment>))}
{v.hasItems && (<><span style={{fontSize: "15px", color: "#4a4652"}}>Shipping and tax are added at checkout.</span>
<a className="btn btn-fill" href="#" style={{alignSelf: "stretch"}}>Check out</a>
<span className="hand" style={{fontSize: "20px"}}>[Checkout connects to Shopify, Square or Etsy]</span></>)}
</aside></>)}
</div>
    </>
  );
}
