import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CloudRain,
  CloudSun,
  Download,
  FileText,
  Globe2,
  MapPin,
  Radar,
  ShieldCheck,
  Waves,
} from 'lucide-react';

const services = [
  {
    icon: Radar,
    eyebrow: 'Weather',
    title: 'Continental Weather Watch',
    description: 'Near-real-time monitoring and actionable short-range guidance for national services and regional partners.',
    href: '#products',
  },
  {
    icon: BarChart3,
    eyebrow: 'Climate',
    title: 'Climate Prediction',
    description: 'Seasonal outlooks and long-range analysis that translate climate signals into practical decisions.',
    href: '#products',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Early warning',
    title: 'Multi-hazard Advisory',
    description: 'Coordinated intelligence for floods, droughts, heat, cyclones and climate-sensitive health risks.',
    href: '#alerts',
  },
];

const products = [
  {
    icon: CloudRain,
    type: 'Forecast',
    title: 'Dekadal Precipitation Forecast',
    description: 'Ten-day rainfall outlook and anomaly guidance for the African continent.',
    meta: 'Africa · Updated 04 Aug 2026',
  },
  {
    icon: Waves,
    type: 'Climate outlook',
    title: 'Drought Monitoring Bulletin',
    description: 'Current vegetation stress, rainfall deficit and drought risk indicators.',
    meta: 'Regional · July 2026',
  },
  {
    icon: FileText,
    type: 'Policy brief',
    title: 'Significant Weather & Climate Events',
    description: 'Decision-ready context on high-impact climate and weather phenomena.',
    meta: 'PDF · 4.2 MB',
  },
];

const updates = [
  {
    date: '19–23 Oct 2026',
    type: 'Training',
    title: 'Artificial Intelligence for Weather and Climate Modelling',
    description: 'A practical regional programme for meteorological professionals and researchers.',
  },
  {
    date: '25 Mar 2026',
    type: 'News',
    title: 'Director’s Message on World Meteorological Day',
    description: 'Building stronger early-warning systems through regional coordination.',
  },
  {
    date: '22 Mar 2026',
    type: 'Event recap',
    title: 'World Meteorological Day: ACMAD Events and Recap',
    description: 'Highlights from partners advancing climate action across the continent.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="alert-strip" id="alerts" aria-label="Current weather alert">
        <div className="container alert-strip-inner">
          <div className="alert-strip-copy">
            <span className="alert-level"><AlertTriangle size={15} aria-hidden="true" /> Advisory</span>
            <strong>High heat conditions expected across parts of the Sahel</strong>
            <span className="alert-validity">Valid through 08 Aug 2026</span>
          </div>
          <a href="#active-alert" className="alert-link">View advisory <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="hero">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow light"><span /> Africa’s regional climate centre</div>
            <h1>Climate intelligence for a resilient Africa.</h1>
            <p>
              ACMAD turns continental weather and climate data into timely forecasts,
              early warnings and decision-ready guidance.
            </p>
            <div className="hero-actions">
              <a href="#products" className="button button-accent">Explore climate products <ArrowRight size={18} /></a>
              <a href="#services" className="button button-ghost">Our capabilities</a>
            </div>
            <div className="hero-trust">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Supporting national meteorological services across Africa</span>
            </div>
          </div>

          <div className="weather-card" id="active-alert">
            <div className="weather-card-header">
              <div>
                <span className="card-kicker">Continental weather watch</span>
                <h2>Current conditions</h2>
              </div>
              <span className="live-indicator"><i /> Live</span>
            </div>
            <div className="weather-main">
              <CloudSun size={56} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <span className="weather-temperature">34°</span>
                <span className="weather-condition">Mostly sunny</span>
              </div>
              <div className="weather-location"><MapPin size={17} /> Niamey, Niger</div>
            </div>
            <div className="weather-data">
              <div><span>Humidity</span><strong>29%</strong></div>
              <div><span>Wind</span><strong>18 km/h</strong></div>
              <div><span>Visibility</span><strong>10 km</strong></div>
            </div>
            <div className="weather-advisory">
              <AlertTriangle size={20} aria-hidden="true" />
              <div>
                <strong>Heat advisory in effect</strong>
                <span>Temperatures above 40°C possible in the central Sahel.</span>
              </div>
              <ChevronRight size={20} aria-hidden="true" />
            </div>
            <p className="updated-at">Last updated 04 Aug 2026 · 14:00 WAT</p>
          </div>
        </div>
      </section>

      <section className="impact-bar" aria-label="ACMAD impact">
        <div className="container impact-grid">
          <div><strong>54</strong><span>African countries served</span></div>
          <div><strong>4+</strong><span>Decades of climate expertise</span></div>
          <div><strong>6</strong><span>Major hazards monitored</span></div>
          <div><strong>24/7</strong><span>Continental monitoring</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> What we do</div>
              <h2>Science that supports better decisions</h2>
            </div>
            <p>We connect regional expertise, national services and global data to help institutions anticipate climate risks.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, ...service }, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <div className="service-icon"><Icon size={27} aria-hidden="true" /></div>
                <span className="card-kicker">{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.href}>Learn more <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <div className="eyebrow"><span /> Latest intelligence</div>
              <h2>Featured climate products</h2>
              <p>Timely information prepared for forecasters, planners and decision-makers.</p>
            </div>
            <a className="text-link" href="https://new.acmad.org/products/">Browse all products <ArrowRight size={17} /></a>
          </div>
          <div className="product-grid">
            {products.map(({ icon: Icon, ...product }, index) => (
              <article className="product-card" key={product.title}>
                <div className={`product-visual product-visual-${index + 1}`}>
                  <span className="product-type">{product.type}</span>
                  <Icon size={54} strokeWidth={1.2} aria-hidden="true" />
                  <div className="map-lines" aria-hidden="true" />
                </div>
                <div className="product-content">
                  <span className="product-meta">{product.meta}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="product-actions">
                    <a href="#">View product <ArrowRight size={16} /></a>
                    <button aria-label={`Download ${product.title}`}><Download size={17} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section regional-section" id="about">
        <div className="container regional-layout">
          <div className="africa-panel" aria-label="ACMAD continental coverage illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <Globe2 size={180} strokeWidth={0.7} aria-hidden="true" />
            <span className="map-point point-one"><i /> West Africa</span>
            <span className="map-point point-two"><i /> East Africa</span>
            <span className="map-point point-three"><i /> Southern Africa</span>
          </div>
          <div className="regional-copy">
            <div className="eyebrow light"><span /> Continental reach</div>
            <h2>One centre. A continent of shared climate knowledge.</h2>
            <p>Based in Niamey, ACMAD works with national meteorological and hydrological services to strengthen forecasts, share expertise and support coordinated early action.</p>
            <ul>
              <li><CheckCircle2 size={19} /> Regional coordination and technical guidance</li>
              <li><CheckCircle2 size={19} /> Capacity development for climate professionals</li>
              <li><CheckCircle2 size={19} /> Decision support for climate-sensitive sectors</li>
            </ul>
            <a href="https://new.acmad.org/about-us/" className="button button-light">Discover ACMAD <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section updates-section" id="updates">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <div className="eyebrow"><span /> News & events</div>
              <h2>From across the centre</h2>
            </div>
            <a className="text-link" href="https://new.acmad.org/">View all updates <ArrowRight size={17} /></a>
          </div>
          <div className="updates-grid">
            {updates.map((update) => (
              <article className="update-card" key={update.title}>
                <div className="update-meta"><span>{update.type}</span><CalendarDays size={15} /> {update.date}</div>
                <h3>{update.title}</h3>
                <p>{update.description}</p>
                <a href="#">Read update <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div>
            <span className="card-kicker">Stay informed</span>
            <h2>Climate intelligence, delivered.</h2>
            <p>Receive new forecasts, bulletins and event updates from ACMAD.</p>
          </div>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="newsletter-email">Work email address</label>
            <input id="newsletter-email" type="email" placeholder="Work email address" required />
            <button type="submit" className="button button-accent">Subscribe <ArrowRight size={17} /></button>
          </form>
        </div>
      </section>
    </main>
  );
}
