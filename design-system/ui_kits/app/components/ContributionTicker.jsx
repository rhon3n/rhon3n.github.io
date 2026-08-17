function ContributionTicker({ stats, sourceUrl, windowLabel }) {
  return (
    <section id="contributions" data-od-id="contribution-section">
      <header className="section-head">
        <div className="coordinate"><p className="label">02 · Individual contributor</p></div>
        <div className="section-title"><h2>Code leaves a trail.</h2><p>A dated public activity snapshot keeps the engineering proof direct and verifiable.</p></div>
      </header>
      <div className="ticker-source">
        <p><span className="label">Public GitHub snapshot</span><br /><span className="micro">{windowLabel}</span></p>
        <a href={sourceUrl} target="_blank" rel="noreferrer"><span>github.com/rhon3n</span><span aria-hidden="true">↗</span></a>
      </div>
      <div className="ticker" tabIndex="0" aria-label="GitHub contribution statistics">
        <div className="ticker-track">
          {stats.map((stat) => <article className="stat" key={stat.label}><strong>{stat.value}</strong><span><b>{stat.label}</b><em>{stat.context}</em></span></article>)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContributionTicker });
