const pillars = [
  'Gateway for brands and logistics providers',
  'Parcel-web foundations',
  'Universal resource locator',
  'Protocol publishing',
  'Clearing-house coordination',
];

function Home() {
  return (
    <section className="hero-section page-width">
      <p className="eyebrow">Parcel-network concept</p>
      <div className="hero-layout">
        <div>
          <h1>A unified parcel network.</h1>
          <p className="lead">Sahyog is a frontpage concept for a shared delivery layer that makes it easier for brands and logistics providers to find, describe, and coordinate parcel services.</p>
        </div>
        <ol className="pillar-list">
          {pillars.map((pillar, index) => (
            <li key={pillar}><span>0{index + 1}</span>{pillar}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Home;
