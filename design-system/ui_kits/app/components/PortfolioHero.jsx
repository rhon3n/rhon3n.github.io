function PortfolioHero() {
  return (
    <section className="hero" id="top" data-od-id="portfolio-hero">
      <div className="hero-main">
        <div>
          <p className="label">Joel Rhine · Software engineer &amp; product builder</p>
          <h1>I build products people can actually operate.</h1>
        </div>
        <div>
          <p className="hero-deck">My practice grew from coffee, operations, integrations, and field work. I turn real constraints into useful software and clearer systems.</p>
          <div className="hero-actions">
            <a className="primary" href="#work">See selected work</a>
            <a className="text-link" href="#about">Read my story →</a>
          </div>
        </div>
      </div>
      <aside className="hero-rail" aria-label="Current role and practice">
        <div className="rail-copy">
          <p>I am the Founding Engineer at measure.coffee. Before software, I spent fourteen years learning how products behave in the field.</p>
          <p className="label">Start with the real work. Make the system clear.</p>
        </div>
        <div className="rail-meta">
          <div><p className="label">Practice</p><p>Product engineering</p></div>
          <div><p className="label">Bias</p><p>Useful over ornamental</p></div>
        </div>
      </aside>
    </section>
  );
}

Object.assign(window, { PortfolioHero });
