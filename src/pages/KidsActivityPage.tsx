import {JigsawPuzzle} from '../components/JigsawPuzzle';

export function KidsActivityPage(){return <main className="activityPage">
 <section className="activityHero">
  <div className="activityHeroArt"><img src="/assets/enchanted-forest-puzzle.jpg" alt="Forest friends gathered beneath the enchanted tree"/></div>
  <div className="activityHeroCopy"><p>Play · Notice · Imagine</p><h1>Piece Together the <em>Enchanted Forest</em></h1><p>Study the picture, then fit every shaped piece into its special place.</p><a className="button primary" href="#play-puzzle">Begin the adventure <b>↓</b></a></div>
  <span className="heroSparkle one">✦</span><span className="heroSparkle two">✦</span>
 </section>
 <section id="play-puzzle" className="activityIntro"><p>Forest activity no. 01</p><h2>A little memory.<br/>A lot of magic.</h2><p>Look closely for ten seconds. When the picture disappears, rebuild it one wonderful piece at a time.</p></section>
 <JigsawPuzzle/>
 <section className="activityBenefits"><article><span>01</span><h3>Look closely</h3><p>Build visual memory by noticing tiny details in the forest.</p></article><article><span>02</span><h3>Think gently</h3><p>Try, adjust, and discover where each special shape belongs.</p></article><article><span>03</span><h3>Celebrate</h3><p>Watch the full scene return as every friend finds their place.</p></article></section>
 </main>}

export function HomeActivity(){return <section className="homeActivity"><div className="homeActivityArt"><img loading="lazy" src="/assets/enchanted-forest-puzzle.jpg" alt="The enchanted forest jigsaw scene"/><div className="miniPieces" aria-hidden="true"><i/><i/><i/></div></div><div className="homeActivityCopy"><span>Play in the forest</span><h2>A story you can piece together.</h2><p>Look carefully, remember every forest friend, then rebuild the magical scene in a real interactive jigsaw.</p><div className="activityChips"><b>3 levels</b><b>6–20 pieces</b><b>Touch friendly</b></div><a className="button primary" href="/kids-activity">Open Kids Activity <b>↗</b></a></div></section>}
