type PageKey='about'|'bookshelf'|'illustration'|'kids-activity'|'contact';

const pages:Record<PageKey,{number:string;eyebrow:string;title:string;accent:string;intro:string;note:string}>={
 about:{number:'01',eyebrow:'The storyteller',title:'About the Author',accent:'#f26a65',intro:'Meet Vaani Halwasiya, the imagination behind the forest.',note:'Author story and approved biography will live here.'},
 bookshelf:{number:'02',eyebrow:'Stories to treasure',title:'Book Shelf',accent:'#f5b63a',intro:'A beautiful home for books, characters, and worlds created by Vaani.',note:'Book editions and purchase information will be added here.'},
 illustration:{number:'03',eyebrow:'Painted with wonder',title:'Illustration',accent:'#77cfc2',intro:'Step closer to the colour, detail, and craft behind every forest scene.',note:'Curated artwork and illustration stories will live here.'},
 'kids-activity':{number:'04',eyebrow:'Play · Make · Imagine',title:'Kids Activity',accent:'#9b6ac8',intro:'Creative little adventures inspired by kindness and the natural world.',note:'Downloadable and interactive activities will be added here.'},
 contact:{number:'05',eyebrow:'Send a little note',title:'Contact with Author',accent:'#279ccb',intro:'For readers, schools, libraries, events, and thoughtful collaborations.',note:'Approved contact details and enquiry options will be added here.'}
};

export function PageShell({page}:{page:PageKey}){const item=pages[page];return <main className="innerPage" style={{'--page-accent':item.accent} as React.CSSProperties}><section className="pageHero"><div className="pageOrb"/><span className="pageNumber">{item.number}</span><div className="pageHeroCopy"><p>{item.eyebrow}</p><h1>{item.title}</h1><div className="pageRule"/><p className="pageIntro">{item.intro}</p></div><img src="/assets/brand/vaani-logo.png" alt="" className="pageBird"/></section><section className="pageCanvas"><p>THIS CHAPTER IS READY FOR ITS STORY</p><h2>{item.note}</h2><a href="/" className="button primary">Return to the forest <b>←</b></a></section></main>}
