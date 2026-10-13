// Generated from the Juno Marlow design mockup (Shows.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0}\na{color:inherit}a:hover{color:#9A48D0}\n.jm *{box-sizing:border-box}\n.jm{font-family:'DM Sans',system-ui,sans-serif;color:var(--ink);background:#fff;overflow-x:clip}\n.wrap{max-width:1240px;margin:0 auto;padding:0 32px}\n.disp{font-family:'Syne',sans-serif;font-weight:800;letter-spacing:-.02em;line-height:.95;margin:0}\n.hand{font-family:'Caveat',cursive;font-weight:700;line-height:1}\n.rough{filter:url(#rough)}\n.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:50px;padding:0 22px;font:700 15px 'DM Sans',sans-serif;text-decoration:none;color:var(--ink);background:transparent;border:0;cursor:pointer;isolation:isolate}\n.btn::before{content:\"\";position:absolute;inset:0;border:2.5px solid var(--ink);border-radius:30px 26px 32px 24px;filter:url(#rough);transition:transform .2s}\n.btn:hover::before{transform:rotate(-2deg) scale(1.03)}\n.btn-fill::after{content:\"\";position:absolute;inset:5px -4px -5px 4px;background:var(--pop);border-radius:30px 26px 32px 24px;z-index:-1;filter:url(#rough)}\n.nav a{font-weight:700;font-size:15px;text-decoration:none;padding:12px 4px}\n.nav a:hover,.nav a[aria-current=\"page\"]{color:#9A48D0}\n.fr{padding:12px;box-shadow:0 26px 40px -24px rgba(30,27,36,.55)}\n.fr-gilt{background:linear-gradient(135deg,#d9bb6a,#f3e3a6 22%,#b8913f 48%,#ecd793 72%,#a5802f);box-shadow:inset 0 0 0 2px rgba(90,64,20,.45),inset 0 0 0 7px rgba(255,240,190,.35),0 26px 40px -24px rgba(30,27,36,.55)}\n.mat{background:#fbfaf6;padding:clamp(14px,2vw,26px);box-shadow:inset 0 2px 6px rgba(0,0,0,.18)}\n.feature{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:56px;align-items:center}\n.layout{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:48px;align-items:start}\n.cal{position:relative;padding:26px;background:#fff}\n.cal::before{content:\"\";position:absolute;inset:0;border:2.5px solid var(--ink);border-radius:10px 16px 8px 14px;filter:url(#rough);pointer-events:none}\n.cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}\n.cell{position:relative;min-height:54px;border:0;border-radius:10px;background:#f6f4ee;color:var(--ink);font:700 15px 'DM Sans',sans-serif;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:0}\n.cell:hover{background:#ece8dc}\n.cell.out{opacity:.3}\n.cell.today{box-shadow:inset 0 0 0 2px #275DAD}\n.cell.sel{background:var(--ink);color:#fff}\n.dots{display:flex;gap:3px;height:7px}\n.dots i{width:7px;height:7px;border-radius:50%}\n.arrow{width:46px;height:46px;border-radius:50%;border:2px solid var(--ink);background:#fff;color:var(--ink);cursor:pointer;display:flex;align-items:center;justify-content:center}\n.pill{position:relative;min-height:44px;padding:0 16px;border:0;background:transparent;font:700 14px 'DM Sans',sans-serif;color:var(--ink);cursor:pointer}\n.pill::before{content:\"\";position:absolute;inset:4px 0;border:2px solid var(--ink);border-radius:22px 18px 24px 16px;filter:url(#rough)}\n.pill.on{color:#fff}\n.pill.on::before{background:var(--ink)}\n.pill span{position:relative;display:inline-flex;align-items:center;gap:8px}\n.pill i{width:10px;height:10px;border-radius:50%}\n.ev{display:grid;grid-template-columns:86px minmax(0,1fr);gap:20px;padding:22px 0;border-top:2px dashed rgba(30,27,36,.18)}\n.date{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 0;border-radius:12px 16px 10px 14px;color:#1E1B24}\n.tag{display:inline-flex;align-items:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#1E1B24}\n.evlinks{display:flex;flex-wrap:wrap;gap:4px 18px;padding-top:4px}\n.evlinks a,.evlinks button{font:700 14px 'DM Sans',sans-serif;color:#275DAD;background:none;border:0;padding:10px 0;cursor:pointer;text-decoration:underline;text-underline-offset:3px}\n.field{display:flex;flex-direction:column;gap:6px;font-weight:700;font-size:14px}\n.field input{font:500 16px 'DM Sans',sans-serif;color:var(--ink);border:2px solid var(--ink);border-radius:10px 14px 8px 12px;padding:12px 14px;min-height:50px;width:100%;background:#fff}\n.field input:focus{outline:3px solid #9A48D0;outline-offset:2px}\n@media (max-width:980px){.feature,.layout{grid-template-columns:minmax(0,1fr)}.nav-links{display:none!important}}\n@media (max-width:600px){.wrap{padding:0 20px} .nav{gap:10px!important}.nav .hand{font-size:26px!important}.nav .btn,.nav .cartbtn{padding:0 14px;font-size:14px!important}.cal{padding:14px}.cell{min-height:44px;font-size:13px}.ev{grid-template-columns:68px minmax(0,1fr);gap:14px}}\n@media (prefers-reduced-motion:reduce){.btn::before{transition:none}}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    const t = new Date();
    this.state = { y: t.getFullYear(), m: t.getMonth(), sel: null, type: 'all', sent: false };
  }

  // Sample events, dated from today so the page never looks empty. `in` = days from today.
  events() {
    return [
      { in: 6, type: 'opening', title: '"Deep Water": solo show opening', start: [18, 0], end: [21, 0], place: '[Gallery name]', blurb: 'Opening night for twelve new paintings. Drinks, music, and the artist in the room.', cta: 'RSVP' },
      { in: 2, type: 'market', title: 'Saturday art market', start: [9, 0], end: [14, 0], place: '[Market name, City]', blurb: 'Prints, small originals and cards at the booth. Look for the purple tent.', cta: 'Get directions' },
      { in: 13, type: 'studio', title: 'Open studio day', start: [11, 0], end: [16, 0], place: '[Studio address]', blurb: 'See works in progress, the paint wall, and a few pieces you won’t find online.', cta: 'Save my spot' },
      { in: 20, type: 'workshop', title: 'Texture painting workshop', start: [13, 0], end: [16, 0], place: '[Art center name]', blurb: 'Palette knives and modeling paste. All supplies included. [Price], [10] spots.', cta: 'Book a spot' },
      { in: 27, type: 'market', title: 'Holiday makers market', start: [10, 0], end: [16, 0], place: '[Venue name]', blurb: 'Gift-sized prints and framed minis.', cta: 'Get directions' },
      { in: 34, type: 'opening', title: 'Group show: "[Show name]"', start: [18, 30], end: [21, 0], place: '[Gallery name]', blurb: 'Three new pours alongside [number] local artists.', cta: 'RSVP' },
      { in: 41, type: 'studio', title: 'First Friday open studio', start: [17, 0], end: [20, 0], place: '[Studio address]', blurb: 'Late hours, small sale on studio seconds.', cta: 'Save my spot' },
      { in: 48, type: 'workshop', title: 'Fluid pour workshop', start: [13, 0], end: [16, 0], place: '[Art center name]', blurb: 'Make two small pours to take home. [Price], [10] spots.', cta: 'Book a spot' },
    ];
  }

  renderVals() {
    const TYPES = {
      opening: { label: 'Show opening', color: '#9A48D0', soft: '#ecdcf6', text: '#fff' },
      market: { label: 'Art market', color: '#7DB46C', soft: '#e1efdb', text: '#1E1B24' },
      studio: { label: 'Open studio', color: '#86BBBD', soft: '#e0eeee', text: '#1E1B24' },
      workshop: { label: 'Workshop', color: '#275DAD', soft: '#dbe5f4', text: '#fff' },
    };
    const MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const pad = (n) => String(n).padStart(2, '0');
    const fmtT = ([h, m]) => ((h + 11) % 12 + 1) + (m ? ':' + pad(m) : '') + (h < 12 ? ' AM' : ' PM');
    const key = (d) => d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const { y, m, sel, type } = this.state;

    const all = this.events().map((e) => {
      const d = new Date(today); d.setDate(d.getDate() + e.in);
      const T = TYPES[e.type];
      const st = (hm) => '' + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + 'T' + pad(hm[0]) + pad(hm[1]) + '00';
      return {
        ...e, date: d, mon: MON[d.getMonth()], d: d.getDate(), dow: DAYS[d.getDay()].slice(0, 3).toUpperCase(),
        time: fmtT(e.start) + ' – ' + fmtT(e.end), typeLabel: T.label, color: T.color, soft: T.soft, tagText: T.text,
        gcal: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent('Juno Marlow: ' + e.title) + '&dates=' + st(e.start) + '/' + st(e.end) + '&location=' + encodeURIComponent(e.place),
      };
    }).sort((a, b) => a.date - b.date);
    const shown = all.filter((e) => type === 'all' || e.type === type);
    const byDay = {};
    shown.forEach((e) => { (byDay[key(e.date)] = byDay[key(e.date)] || []).push(e); });

    const first = new Date(y, m, 1);
    const weeks = Math.ceil((first.getDay() + new Date(y, m + 1, 0).getDate()) / 7);
    const cells = Array.from({ length: weeks * 7 }, (_, i) => {
      const d = new Date(y, m, 1 - first.getDay() + i);
      const k = key(d); const evs = byDay[k] || [];
      const isSel = sel !== null && k === key(new Date(sel));
      return {
        day: d.getDate(), selected: isSel, dots: evs.map((e) => e.color),
        cls: ['cell', d.getMonth() !== m && 'out', k === key(today) && 'today', isSel && 'sel'].filter(Boolean).join(' '),
        label: DAYS[d.getDay()] + ' ' + MONTH[d.getMonth()] + ' ' + d.getDate() + (evs.length ? ', ' + evs.map((e) => e.title).join(', ') : ''),
        pick: () => this.setState({ sel: d.getTime(), y: d.getFullYear(), m: d.getMonth() }),
      };
    });

    const selDate = sel !== null ? new Date(sel) : null;
    const list = selDate ? (byDay[key(selDate)] || []) : shown.filter((e) => e.date >= today);
    const feat = all.find((e) => e.type === 'opening') || all[0];

    return {
      ink: this.props.ink ?? '#1E1B24',
      pop: this.props.pop ?? '#7DB46C',
      feat: { title: '"Deep Water"', when: DAYS[feat.date.getDay()] + ', ' + MONTH[feat.date.getMonth()] + ' ' + feat.date.getDate() + ' · ' + feat.time, place: feat.place, gcal: feat.gcal },
      filters: [['all', 'All']].concat(Object.entries(TYPES).map(([k, v]) => [k, v.label])).map(([v, label]) => ({
        label, on: type === v, cls: 'pill' + (type === v ? ' on' : ''), hasDot: v !== 'all', color: v === 'all' ? '' : TYPES[v].color,
        pick: () => this.setState({ type: v, sel: null }),
      })),
      legend: Object.values(TYPES).map((t) => ({ label: t.label, color: t.color })),
      monthLabel: MONTH[m] + ' ' + y,
      prev: () => this.setState(m === 0 ? { y: y - 1, m: 11 } : { m: m - 1 }),
      next: () => this.setState(m === 11 ? { y: y + 1, m: 0 } : { m: m + 1 }),
      cells,
      list, none: list.length === 0,
      hasSel: selDate !== null,
      clearSel: () => this.setState({ sel: null }),
      listLabel: selDate ? DAYS[selDate.getDay()] + ', ' + MONTH[selDate.getMonth()] + ' ' + selDate.getDate() : 'Coming up',
      notSent: !this.state.sent, sent: this.state.sent,
      submit: (e) => { e.preventDefault(); this.setState({ sent: true }); },
      reset: () => this.setState({ sent: false }),
    };
  }
}

export default function Shows() {
  const props = useTheme({"ink": "#1E1B24", "pop": "#7DB46C"});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Juno Marlow, artist \u2014 shows & events"; }, []);
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
<Link to="/shop">Print shop</Link>
<Link to="/shows" aria-current="page">Shows</Link>
<Link to="/#commissions">Commissions</Link>
</nav>
<Link to="/shop" className="btn" style={{minHeight: "46px", fontSize: "15px"}}>Shop prints</Link>
</div>
</header>

<main>

<section style={{padding: "clamp(40px,6vw,72px) 0 clamp(40px,5vw,64px)"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1240px"}}>
<span className="hand" style={{fontSize: "30px", color: "#9A48D0", transform: "rotate(-2deg)", alignSelf: "flex-start"}}>come say hi ✶</span>
<h1 className="disp" style={{fontSize: "clamp(52px,7vw,104px)"}}>Shows &amp; <span style={{position: "relative", display: "inline-block"}}>events<svg viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true" style={{position: "absolute", left: "-2%", bottom: "-12px", width: "104%", height: "26px"}} className="rough"><path d="M4 24c70-16 150-20 290-6" fill="none" stroke="#F6EFA6" strokeWidth="12" strokeLinecap="round"></path></svg></span></h1>
<p style={{margin: "0", fontSize: "19px", lineHeight: "1.6", maxWidth: "40rem"}}>Gallery openings, art markets, open studio days and the occasional workshop. See the work in person, and say hello.</p>
</div>
</section>


<section style={{background: "#F6EFA6", padding: "clamp(56px,7vw,96px) 0"}}>
<div className="wrap feature">
<div className="fr fr-gilt"><div className="mat"><img src={img("/images/deep-water.jpg")} alt="Deep Water, the lead painting in the show" style={{display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover"}} /></div></div>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
<span className="tag" style={{background: "#9A48D0", color: "#fff", alignSelf: "flex-start"}}>Next up · solo show</span>
<h2 className="disp" style={{fontSize: "clamp(40px,5vw,72px)"}}>{v.feat.title}</h2>
<p style={{margin: "0", fontSize: "20px", fontWeight: "700"}}>{v.feat.when}</p>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.6"}}>{v.feat.place}<br />[Street address, City]</p>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.7", maxWidth: "34rem"}}>[A few sentences about the show: how many new pieces, what they're about, and what to expect at the opening night.]</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", paddingTop: "4px"}}>
<a className="btn btn-fill" href="#rsvp">RSVP for opening night</a>
<a className="btn" href={v.feat.gcal} target="_blank" rel="noopener noreferrer">Add to calendar</a>
</div>
<span className="hand" style={{fontSize: "24px"}}>free · drinks · all ages ↘</span>
</div>
</div>
</section>


<section style={{padding: "clamp(64px,8vw,104px) 0"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "32px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<span className="hand" style={{fontSize: "28px", color: "#275DAD"}}>the calendar</span>
<h2 className="disp" style={{fontSize: "clamp(40px,5vw,72px)"}}>Where I'll be</h2>
</div>
<div role="group" aria-label="Filter events" style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
{v.filters.map((f, $index) => (<Fragment key={$index}><button type="button" className={f.cls} aria-pressed={f.on} onClick={f.pick}><span>{f.hasDot && (<><i style={{background: f.color}}></i></>)}{f.label}</span></button></Fragment>))}
</div>
</div>

<div className="layout">

<div className="cal">
<div style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingBottom: "16px"}}>
<button type="button" className="arrow" onClick={v.prev} aria-label="Previous month"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg></button>
<span className="disp" style={{fontSize: "30px"}} aria-live="polite">{v.monthLabel}</span>
<button type="button" className="arrow" onClick={v.next} aria-label="Next month"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></button>
</div>
<div className="cal-grid" aria-hidden="true" style={{position: "relative", paddingBottom: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: ".12em", textAlign: "center", color: "#4a4652"}}>
<span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
</div>
<div className="cal-grid" style={{position: "relative"}}>
{v.cells.map((c, $index) => (<Fragment key={$index}><button type="button" className={c.cls} onClick={c.pick} aria-pressed={c.selected} aria-label={c.label}><span>{c.day}</span><span className="dots">{c.dots.map((d, $index) => (<Fragment key={$index}><i style={{background: d}}></i></Fragment>))}</span></button></Fragment>))}
</div>
<div style={{position: "relative", display: "flex", flexWrap: "wrap", gap: "8px 18px", paddingTop: "16px", fontSize: "13px", fontWeight: "600"}}>
{v.legend.map((l, $index) => (<Fragment key={$index}><span style={{display: "inline-flex", alignItems: "center", gap: "6px"}}><i style={{width: "10px", height: "10px", borderRadius: "50%", background: l.color}}></i>{l.label}</span></Fragment>))}
</div>
</div>


<div aria-live="polite">
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", paddingBottom: "6px"}}>
<span style={{fontWeight: "700", fontSize: "18px"}}>{v.listLabel}</span>
{v.hasSel && (<><button type="button" onClick={v.clearSel} style={{minHeight: "44px", border: "0", background: "none", font: "700 14px 'DM Sans', sans-serif", color: "#275DAD", textDecoration: "underline", cursor: "pointer"}}>Show all upcoming</button></>)}
</div>
{v.none && (<><div style={{padding: "28px 0", borderTop: "2px dashed rgba(30,27,36,.18)", display: "flex", flexDirection: "column", gap: "8px"}}>
<span className="hand" style={{fontSize: "28px", color: "#9A48D0"}}>nothing on this day</span>
<span style={{fontSize: "16px"}}>Pick a day with a dot, or join the newsletter to hear about new dates.</span>
</div></>)}
{v.list.map((e, $index) => (<Fragment key={$index}><article className="ev">
<div className="date" style={{background: e.soft}}><span style={{fontSize: "12px", fontWeight: "700", letterSpacing: ".12em"}}>{e.mon}</span><span className="disp" style={{fontSize: "34px"}}>{e.d}</span><span style={{fontSize: "12px", fontWeight: "700"}}>{e.dow}</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px", minWidth: "0"}}>
<span className="tag" style={{background: e.color, color: e.tagText, alignSelf: "flex-start"}}>{e.typeLabel}</span>
<h3 style={{margin: "0", fontFamily: "'Syne', sans-serif", fontWeight: "700", fontSize: "22px"}}>{e.title}</h3>
<span style={{fontSize: "15px", color: "#4a4652"}}>{e.time} · {e.place}</span>
<p style={{margin: "0", fontSize: "15px", lineHeight: "1.6"}}>{e.blurb}</p>
<div className="evlinks"><a href={e.gcal} target="_blank" rel="noopener noreferrer">Add to calendar ↗</a><a href="#rsvp">{e.cta}</a></div>
</div>
</article></Fragment>))}
</div>
</div>
</div>
</section>


<section id="rsvp" style={{background: "#86BBBD", padding: "clamp(56px,7vw,96px) 0"}}>
<div className="wrap" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "center"}}>
<div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<span className="hand" style={{fontSize: "28px", color: "#1E1B24"}}>don't miss the next one</span>
<h2 className="disp" style={{fontSize: "clamp(36px,4.6vw,64px)"}}>RSVP or get show dates by email</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.6"}}>One short email before each show. No spam, unsubscribe anytime.</p>
</div>
<div style={{background: "#fff", padding: "28px", position: "relative"}}>
{v.notSent && (<><form onSubmit={v.submit} style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px"}}>
<label className="field">Name<input type="text" autoComplete="name" required /></label>
<label className="field">Email<input type="email" autoComplete="email" required /></label>
<label style={{gridColumn: "1 / -1", display: "flex", gap: "10px", alignItems: "center", minHeight: "44px", fontWeight: "600", fontSize: "15px"}}><input type="checkbox" defaultChecked style={{width: "20px", height: "20px", accentColor: "#9A48D0"}} />RSVP me for opening night of {v.feat.title}</label>
<button type="submit" className="btn btn-fill" style={{gridColumn: "1 / -1", justifySelf: "start"}}>Count me in</button>
</form></>)}
{v.sent && (<><div style={{display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start"}}>
<span className="disp" style={{fontSize: "40px"}}>See you there!</span>
<p style={{margin: "0", fontSize: "17px"}}>You're on the list. Dates and details are on their way to your inbox.</p>
<button type="button" className="btn" onClick={v.reset}>Done</button>
</div></>)}
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
</div>
    </>
  );
}
