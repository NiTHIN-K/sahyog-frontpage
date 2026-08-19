const stages = [
  ['Discover', 'Find participating brands, logistics providers, and parcel resources from one shared starting point.'],
  ['Describe', 'Use consistent locations and protocols to communicate the services available across the network.'],
  ['Coordinate', 'Create a clear place for routing and settlement conversations as delivery flows cross organizations.'],
];

function PartnersCoverage() {
  return (
    <section className="content-page page-width">
      <p className="eyebrow">Network model</p>
      <h1>Designed around how parcel services connect.</h1>
      <p className="lead">The page previously presented a coverage map without a reliable data source. This concept view keeps the focus on the network model rather than implying live coverage information.</p>
      <div className="stage-list">
        {stages.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <div><h2>{title}</h2><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PartnersCoverage;
