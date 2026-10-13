// Generated from the Juno Marlow design mockup (Main.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0}\na{color:inherit}a:hover{color:#9A48D0}\n.jm *{box-sizing:border-box}\n.jm{font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);background:#fff;overflow-x:clip}\n.wrap{max-width:1240px;margin:0 auto;padding:0 32px}\n.disp{font-family:'Syne',sans-serif;font-weight:800;letter-spacing:-.02em;line-height:.95;margin:0}\n.hand{font-family:'Caveat',cursive;font-weight:700;line-height:1}\n.rough{filter:url(#rough)}\n.sk{position:relative}\n.sk::before{content:\"\";position:absolute;inset:-6px;border:2.5px solid var(--ink);border-radius:8px 14px 6px 12px;filter:url(#rough);pointer-events:none}\n.btn{position:relative;display:inline-flex;align-items:center;gap:10px;min-height:52px;padding:0 24px;font:700 16px 'DM Sans',sans-serif;text-decoration:none;color:var(--ink);background:transparent;border:0;cursor:pointer}\n.btn::before{content:\"\";position:absolute;inset:0;border:2.5px solid var(--ink);border-radius:30px 26px 32px 24px;filter:url(#rough);transition:transform .2s}\n.btn:hover::before{transform:rotate(-2deg) scale(1.03)}\n.btn-fill::after{content:\"\";position:absolute;inset:5px -4px -5px 4px;background:var(--pop);border-radius:30px 26px 32px 24px;z-index:-1;filter:url(#rough)}\n.btn-fill{z-index:0;isolation:isolate}\n.nav a{font-weight:700;font-size:15px;text-decoration:none;padding:12px 4px;position:relative}\n.nav a:hover{color:#9A48D0}\n/* framed paintings */\n.hang{position:absolute;margin:0;display:flex;flex-direction:column;gap:10px}\n.fr{padding:14px;box-shadow:0 26px 40px -24px rgba(30,27,36,.55),0 2px 4px rgba(30,27,36,.15)}\n.fr-gilt{background:linear-gradient(135deg,#d9bb6a,#f3e3a6 22%,#b8913f 48%,#ecd793 72%,#a5802f);box-shadow:inset 0 0 0 2px rgba(90,64,20,.45),inset 0 0 0 7px rgba(255,240,190,.35),0 26px 40px -24px rgba(30,27,36,.55)}\n.fr-plum{background:#9A48D0;box-shadow:inset 0 0 0 2px rgba(0,0,0,.22),inset 3px 3px 0 6px rgba(255,255,255,.12),0 26px 40px -24px rgba(30,27,36,.55)}\n.fr-black{background:#1E1B24;padding:10px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 26px 40px -24px rgba(30,27,36,.55)}\n.fr-blue{background:#275DAD;box-shadow:inset 0 0 0 2px rgba(0,0,0,.2),inset 3px 3px 0 6px rgba(255,255,255,.1),0 26px 40px -24px rgba(30,27,36,.55)}\n.fr-oak{background:linear-gradient(90deg,#c9a274,#e2c39a 30%,#b98f5f 60%,#d8b688);box-shadow:inset 0 0 0 2px rgba(80,50,20,.35),0 26px 40px -24px rgba(30,27,36,.55)}\n.mat{background:#fbfaf6;padding:clamp(14px,2.2vw,28px);box-shadow:inset 0 2px 6px rgba(0,0,0,.18)}\n.mat .art{box-shadow:0 0 0 1px rgba(0,0,0,.08)}\n.plaque{align-self:center;display:flex;flex-direction:column;align-items:center;gap:1px;background:#fff;border:1px solid rgba(30,27,36,.18);padding:6px 12px;font-size:12px;line-height:1.3;color:#4a4652}\n.plaque b{font-family:'Syne',sans-serif;font-size:13px;color:var(--ink)}\n.piece .fr{padding:10px}\n.piece .mat{padding:clamp(12px,1.6vw,20px)}\n.art{position:relative;width:100%;border-radius:2px;overflow:hidden}\n.art::after{content:\"\";position:absolute;inset:0;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.25),transparent 40%);mix-blend-mode:soft-light}\n.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(40px,6vw,80px);align-items:center}\n.hero > div:first-child{position:relative;z-index:2;min-width:0}\n.cluster{position:relative;height:560px}\n.pill{position:relative;min-height:44px;padding:0 18px;border:0;background:transparent;font:700 15px 'DM Sans',sans-serif;color:var(--ink);cursor:pointer}\n.pill::before{content:\"\";position:absolute;inset:4px 0;border:2px solid var(--ink);border-radius:22px 18px 24px 16px;filter:url(#rough)}\n.pill.on{color:#fff}\n.pill.on::before{background:var(--ink)}\n.pill span{position:relative}\n.masonry{columns:3;column-gap:36px}\n.piece{break-inside:avoid;margin:0 0 44px;display:block;width:100%;background:none;border:0;padding:0;text-align:left;cursor:zoom-in;color:inherit;font:inherit}\n.piece > .fr{transition:transform .3s,box-shadow .3s}\n.piece:hover > .fr{transform:translateY(-4px);box-shadow:0 36px 50px -26px rgba(30,27,36,.6)}\n.piece:focus-visible{outline:3px solid #9A48D0;outline-offset:8px}\n.about{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:72px;align-items:center}\n.lb{position:fixed;inset:0;z-index:50;background:rgba(30,27,36,.82);display:flex;align-items:center;justify-content:center;padding:24px}\n.lb-card{background:#fff;max-width:980px;width:100%;display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:32px;padding:28px;border-radius:6px;max-height:90vh;overflow:auto}\n.iconbtn{width:48px;height:48px;border-radius:50%;border:2px solid var(--ink);background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink)}\n.field{display:flex;flex-direction:column;gap:6px;font-weight:700;font-size:14px}\n.field input,.field textarea,.field select{font:500 16px 'DM Sans',sans-serif;color:var(--ink);border:2px solid var(--ink);border-radius:10px 14px 8px 12px;padding:12px 14px;min-height:50px;width:100%;background:#fff}\n.field input:focus,.field textarea:focus,.field select:focus{outline:3px solid #9A48D0;outline-offset:2px}\n@media (max-width:980px){\n .hero,.about,.lb-card{grid-template-columns:minmax(0,1fr)}\n .masonry{columns:2}\n .nav-links{display:none!important}\n .cluster{height:440px}\n}\n@media (max-width:600px){\n .wrap{padding:0 20px}\n .nav{gap:10px!important}\n .nav .hand{font-size:26px!important}\n .nav .btn{padding:0 14px;font-size:14px!important}\n .masonry{columns:1}\n .cluster{height:360px}\n}\n@media (max-width:600px){.plaque{display:none}}\n@media (prefers-reduced-motion:reduce){.piece > .fr,.btn::before{transition:none}}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', open: -1, sent: false };
  }

  works() {
    // Placeholder artwork (stock photos) until the artist's own images go in.
    return [
      { title: 'Deep Water', kind: 'painting', medium: '[Oil on canvas]', size: '[24 × 36 in]', ratio: '2 / 3', status: 'Original sold · prints available', img: img('/images/deep-water.jpg') },
      { title: 'Peony Field', kind: 'painting', medium: '[Acrylic on panel]', size: '[20 × 14 in]', ratio: '10 / 7', status: 'Original available', img: img('/images/peony-field.jpg') },
      { title: 'Bloom', kind: 'pour', medium: '[Fluid acrylic on panel]', size: '[16 × 24 in]', ratio: '2 / 3', status: 'Prints available', img: img('/images/bloom.jpg') },
      { title: 'Lilac Hour', kind: 'painting', medium: '[Acrylic on canvas]', size: '[16 × 20 in]', ratio: '4 / 5', status: 'Original available', img: img('/images/lilac-hour.jpg') },
      { title: 'Salt & Sky', kind: 'texture', medium: '[Acrylic and modeling paste]', size: '[24 × 36 in]', ratio: '2 / 3', status: 'Original available', img: img('/images/salt-and-sky.jpg') },
      { title: 'Marigold', kind: 'painting', medium: '[Acrylic on canvas]', size: '[16 × 20 in]', ratio: '4 / 5', status: 'Original sold · prints available', img: img('/images/marigold.jpg') },
      { title: 'Copper Tide', kind: 'pour', medium: '[Fluid acrylic on panel]', size: '[24 × 36 in]', ratio: '2 / 3', status: 'Prints available', img: img('/images/copper-tide.jpg') },
      { title: 'Garden Wall', kind: 'painting', medium: '[Oil on paper]', size: '[18 × 24 in]', ratio: '3 / 4', status: 'Original available', img: img('/images/garden-wall.jpg') },
      { title: 'Linen', kind: 'texture', medium: '[Oil and cold wax]', size: '[18 × 24 in]', ratio: '3 / 4', status: 'Original available', img: img('/images/linen.jpg') },
    ];
  }

  renderVals() {
    const TAG = { painting: '#9A48D0', texture: '#275DAD', pour: '#3f7a33' };
    const { filter, open } = this.state;
    const FRAMES = ['fr fr-gilt', 'fr fr-black', 'fr fr-oak', 'fr fr-plum', 'fr fr-black', 'fr fr-blue', 'fr fr-oak', 'fr fr-gilt', 'fr fr-black'];
    const all = this.works().map((w, i) => ({ ...w, i, frameCls: FRAMES[i % FRAMES.length], tagColor: TAG[w.kind], label: w.title + ', ' + w.kind + '. Open larger view.' }));
    const shown = all.filter((w) => filter === 'all' || w.kind === filter)
      .map((w) => ({ ...w, open: () => this.setState({ open: w.i }) }));
    const lb = { ...all[open >= 0 ? open : 0], label: all[open >= 0 ? open : 0].title + ', ' + all[open >= 0 ? open : 0].medium };
    return {
      ink: this.props.ink ?? '#1E1B24',
      pop: this.props.pop ?? '#7DB46C',
            filters: [['all', 'All'], ['painting', 'Paintings'], ['texture', 'Texture'], ['pour', 'Pours']].map(([v, label]) => ({
        label, on: filter === v, cls: 'pill' + (filter === v ? ' on' : ''), pick: () => this.setState({ filter: v }),
      })),
      shown,
      lbOpen: open >= 0, lb,
      close: () => this.setState({ open: -1 }),
      next: () => this.setState({ open: (open + 1) % all.length }),
      notSent: !this.state.sent, sent: this.state.sent,
      submit: (e) => { e.preventDefault(); this.setState({ sent: true }); },
      reset: () => this.setState({ sent: false }),
    };
  }
}

export default function Home() {
  const props = useTheme({"ink": "#1E1B24", "pop": "#7DB46C"});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Juno Marlow, artist \u2014 home"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div className="jm" style={{"--ink": v.ink, "--pop": v.pop}}>


<svg width="0" height="0" style={{position: "absolute"}} aria-hidden="true" focusable="false">
<filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7"></feTurbulence><feDisplacementMap in="SourceGraphic" scale="3.2"></feDisplacementMap></filter>
</svg>


<header style={{background: "#fff"}}>
<div className="wrap nav" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "92px"}}>
<a href="#top" style={{textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", padding: "6px 0"}}>
<svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true" className="rough"><circle cx="22" cy="22" r="18" fill="#7DB46C"></circle><path d="M10 26c6-10 14 6 24-6" fill="none" stroke="#1E1B24" strokeWidth="3" strokeLinecap="round"></path><circle cx="30" cy="14" r="4" fill="#9A48D0"></circle></svg>
<span className="hand" style={{fontSize: "34px"}}>Juno Marlow</span>
</a>
<nav className="nav-links" aria-label="Main" style={{display: "flex", gap: "28px", alignItems: "center"}}>
<a href="#gallery">Gallery</a>
<a href="#about">About</a>
<Link to="/shop">Print shop</Link>
<Link to="/shows">Shows</Link>
<a href="#commissions">Commissions</a>
</nav>
<Link to="/shop" className="btn" style={{minHeight: "46px", fontSize: "15px"}}>Shop prints</Link>
</div>
</header>

<main id="top">

<section style={{padding: "clamp(40px,6vw,80px) 0 clamp(64px,8vw,110px)"}}>
<div className="wrap hero">
<div style={{display: "flex", flexDirection: "column", gap: "26px", position: "relative"}}>
<span className="hand" style={{fontSize: "30px", color: "#9A48D0", transform: "rotate(-3deg)", alignSelf: "flex-start"}}>hi, I make things →</span>
<h1 className="disp" style={{fontSize: "clamp(48px,5.4vw,84px)"}}>Paintings,<br />drawings &amp; <span style={{position: "relative", display: "inline-block"}}>prints<svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true" style={{position: "absolute", left: "-2%", bottom: "-14px", width: "104%", height: "28px"}} className="rough"><path d="M4 26c60-18 140-22 290-8" fill="none" stroke="#7DB46C" strokeWidth="9" strokeLinecap="round"></path></svg></span>.</h1>
<p style={{margin: "0", fontSize: "20px", lineHeight: "1.6", maxWidth: "32rem"}}>[Short line about your work: what you paint, what you're drawn to, where you work from.] Originals, prints and a few commissions a year.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center"}}>
<a className="btn btn-fill" href="#gallery">See the gallery</a>
<Link to="/shop" className="btn">Shop prints</Link>
</div>
</div>

<div className="cluster wall" aria-label="Featured works">

<figure className="hang" style={{left: "0", top: "6%", width: "50%"}}>
<div className="fr fr-gilt"><div className="mat"><img className="art" src={img("/images/deep-water.jpg")} alt="Deep Water, a painting by Juno Marlow" style={{display: "block", aspectRatio: "4 / 5", objectFit: "cover"}} /></div></div>
<figcaption className="plaque"><b>Deep Water</b><span>[Oil on canvas], [year]</span></figcaption>
</figure>
<figure className="hang" style={{right: "0", top: "0", width: "42%"}}>
<div className="fr fr-plum"><div className="mat"><img className="art" src={img("/images/peony-field.jpg")} alt="Peony Field, a painting by Juno Marlow" style={{display: "block", aspectRatio: "1 / 1", objectFit: "cover"}} /></div></div>
<figcaption className="plaque"><b>Peony Field</b><span>[Acrylic on panel], [year]</span></figcaption>
</figure>
<figure className="hang" style={{right: "4%", bottom: "0", width: "44%"}}>
<div className="fr fr-black"><div className="mat"><img className="art" src={img("/images/bloom.jpg")} alt="Bloom, a painting by Juno Marlow" style={{display: "block", aspectRatio: "5 / 4", objectFit: "cover"}} /></div></div>
<figcaption className="plaque"><b>Bloom</b><span>[Fluid acrylic], [year]</span></figcaption>
</figure>
<span className="hand" style={{position: "absolute", left: "4%", bottom: "2%", fontSize: "26px", color: "#9A48D0", transform: "rotate(-4deg)"}}>on the wall this month ↗</span>
</div>
</div>
</section>


<section id="gallery" style={{padding: "clamp(56px,7vw,96px) 0", borderTop: "0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "40px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "28px", color: "#275DAD"}}>the gallery</span>
<h2 className="disp" style={{fontSize: "clamp(44px,6vw,84px)"}}>Recent work</h2>
</div>
<div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px"}}>
<div role="group" aria-label="Filter the gallery" style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
{v.filters.map((f, $index) => (<Fragment key={$index}><button type="button" className={f.cls} aria-pressed={f.on} onClick={f.pick}><span>{f.label}</span></button></Fragment>))}
</div>
<span className="hand" style={{fontSize: "22px", color: "#555"}}>↑ tap a piece to look closer</span>
</div>
</div>

<div className="masonry">
{v.shown.map((a, $index) => (<Fragment key={$index}><button type="button" className="piece" onClick={a.open} aria-label={a.label}>
<span className={a.frameCls} style={{display: "block"}}><span className="mat" style={{display: "block"}}><img className="art" src={a.img} alt="" style={{display: "block", aspectRatio: a.ratio, objectFit: "cover"}} /></span></span>
<span style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", paddingTop: "14px"}}>
<span style={{fontFamily: "'Syne', sans-serif", fontWeight: "700", fontSize: "20px"}}>{a.title}</span>
<span className="hand" style={{fontSize: "22px", color: a.tagColor}}>{a.kind}</span>
</span>
<span style={{display: "block", fontSize: "14px", color: "#4a4652", paddingTop: "4px"}}>{a.medium} · {a.size}</span>
</button></Fragment>))}
</div>
</div>
</section>


<section id="about" style={{padding: "clamp(64px,8vw,110px) 0", background: "#F6EFA6"}}>
<div className="wrap about">
<div style={{position: "relative", padding: "14px"}}>
<div className="fr fr-blue"><div className="mat"><img src={img("/images/artist-portrait.jpg")} alt="Juno Marlow, laughing, in a black hat" style={{display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "50% 35%"}} /></div></div>
<span className="hand" style={{position: "absolute", right: "-10px", bottom: "-28px", fontSize: "26px", color: "#9A48D0", transform: "rotate(-4deg)"}}>that's me! ↖</span>
</div>
<div style={{display: "flex", flexDirection: "column", gap: "22px"}}>
<span className="hand" style={{fontSize: "28px", color: "#275DAD"}}>about</span>
<h2 className="disp" style={{fontSize: "clamp(40px,5vw,72px)"}}>[A line about who you are.]</h2>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75"}}>[Two short paragraphs in your own words: where you grew up, how you started making art, what you keep coming back to.]</p>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.75"}}>[How you work: your materials, your studio, what a typical week looks like.]</p>
<div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", paddingTop: "6px"}}>
<div style={{background: "#fff", padding: "16px", transform: "rotate(-1.5deg)"}}><span className="hand" style={{fontSize: "22px", color: "#9A48D0", display: "block"}}>working in</span><span style={{fontWeight: "700"}}>[Gouache, ink, linocut]</span></div>
<div style={{background: "#fff", padding: "16px", transform: "rotate(1deg)"}}><span className="hand" style={{fontSize: "22px", color: "#275DAD", display: "block"}}>based in</span><span style={{fontWeight: "700"}}>[Your City]</span></div>
<div style={{background: "#fff", padding: "16px", transform: "rotate(-.5deg)"}}><span className="hand" style={{fontSize: "22px", color: "#3f7a33", display: "block"}}>see it in person</span><Link to="/shows" style={{fontWeight: "700", display: "inline-block", padding: "6px 0"}}>See all shows →</Link></div>
</div>
</div>
</div>
</section>


<section id="commissions" style={{padding: "clamp(64px,8vw,110px) 0"}}>
<div className="wrap" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "56px", alignItems: "start"}}>
<div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
<span className="hand" style={{fontSize: "28px", color: "#9A48D0"}}>commissions</span>
<h2 className="disp" style={{fontSize: "clamp(40px,5vw,72px)"}}>Want something made just for you?</h2>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.7", maxWidth: "30rem"}}>Pet portraits, house portraits, wedding guestbook paintings. I take [a few] commissions a season. Tell me what you have in mind.</p>
<div className="fr fr-oak" style={{maxWidth: "460px", marginTop: "8px"}}><div className="mat"><img src={img("/images/paint-cans.jpg")} alt="Open paint cans and brushes on the studio floor" style={{display: "block", width: "100%", aspectRatio: "3 / 2", objectFit: "cover"}} /></div></div>
</div>
<div style={{position: "relative", padding: "30px", background: "#fff"}}>
<div className="sk" style={{position: "absolute", inset: "0"}}></div>
{v.notSent && (<><form onSubmit={v.submit} style={{position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px"}}>
<label className="field">Name<input type="text" autoComplete="name" required /></label>
<label className="field">Email<input type="email" autoComplete="email" required /></label>
<label className="field" style={{gridColumn: "1 / -1"}}>What would you like?<select><option>Pet portrait</option><option>House portrait</option><option>Wedding or event</option><option>Something else</option></select></label>
<label className="field" style={{gridColumn: "1 / -1"}}>Tell me about it<textarea rows="4" placeholder="Size, colors, deadline, who it's for"></textarea></label>
<div style={{gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px", justifyContent: "space-between"}}>
<button type="submit" className="btn btn-fill">Send it</button>
<span className="hand" style={{fontSize: "22px"}}>I reply within [a week] ✶</span>
</div>
</form></>)}
{v.sent && (<><div style={{position: "relative", display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", padding: "12px 0"}}>
<span className="disp" style={{fontSize: "44px"}}>Got it, thank you!</span>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.6"}}>I'll write back within [a week] with ideas and a price.</p>
<button type="button" onClick={v.reset} className="btn">Send another</button>
</div></>)}
</div>
</div>
</section>
</main>

<footer style={{background: "var(--ink)", color: "#fff", padding: "56px 0 36px"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "28px", alignItems: "flex-end"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "44px", color: "#F6EFA6"}}>Juno Marlow</span>
<span style={{fontSize: "15px", color: "rgba(255,255,255,.8)"}}>[hello@yourdomain.com] · Instagram · Newsletter</span>
</div>
<nav aria-label="Footer" style={{display: "flex", flexWrap: "wrap", gap: "4px 26px"}}>
<a href="#gallery" style={{padding: "10px 0", fontWeight: "700"}}>Gallery</a>
<a href="#about" style={{padding: "10px 0", fontWeight: "700"}}>About</a>
<Link to="/shop" style={{padding: "10px 0", fontWeight: "700"}}>Print shop</Link>
<a href="#commissions" style={{padding: "10px 0", fontWeight: "700"}}>Commissions</a>
</nav>
<span style={{fontSize: "13px", color: "rgba(255,255,255,.65)", width: "100%"}}>© [Year] Juno Marlow. All artwork © the artist. · Site by Whelk Works</span>
</div>
</footer>


{v.lbOpen && (<><div className="lb" role="dialog" aria-modal="true" aria-label={v.lb.title}>
<div className="lb-card">
<img src={v.lb.img} alt={v.lb.label} style={{display: "block", width: "100%", maxHeight: "76vh", objectFit: "contain", background: "#f4f2ec"}} />
<div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px"}}>
<span className="hand" style={{fontSize: "26px", color: v.lb.tagColor}}>{v.lb.kind}</span>
<button type="button" className="iconbtn" onClick={v.close} aria-label="Close"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg></button>
</div>
<h3 className="disp" style={{fontSize: "44px"}}>{v.lb.title}</h3>
<span style={{fontSize: "16px", color: "#4a4652"}}>{v.lb.medium} · {v.lb.size} · [year]</span>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.7"}}>[A sentence or two about this piece: where it started, what it's about.]</p>
<span style={{fontWeight: "700"}}>{v.lb.status}</span>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px", paddingTop: "6px"}}>
<Link to="/shop" className="btn btn-fill">Buy a print</Link>
<button type="button" className="btn" onClick={v.next}>Next piece →</button>
</div>
</div>
</div>
</div></>)}
</div>
    </>
  );
}
