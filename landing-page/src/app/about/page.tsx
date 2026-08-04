import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CloudSun,
  Download,
  Eye,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Radar,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const mandate = [
  {
    icon: CloudSun,
    title: 'Advance understanding',
    description: 'Strengthen knowledge of atmospheric and climate processes across Africa.',
  },
  {
    icon: BarChart3,
    title: 'Turn data into insight',
    description: 'Collect, analyse and share meteorological and hydrological information.',
  },
  {
    icon: Radar,
    title: 'Protect lives and livelihoods',
    description: 'Provide continental weather watch and early-warning capabilities.',
  },
  {
    icon: GraduationCap,
    title: 'Develop African expertise',
    description: 'Support scientists and technicians applying meteorology to development.',
  },
];

const milestones = [
  { year: '1985', date: 'April', title: 'ACMAD established', description: 'UNECA Conference of Ministers adopts Resolution 540 (XX), creating the Centre.' },
  { year: '1987', date: '24 April', title: 'Constitution approved', description: 'Resolution 621 (XXII) approves ACMAD’s institutional constitution.' },
  { year: '1989', date: '', title: 'Member-state contributions', description: 'Resolution 651 (XXIII) establishes assessed contributions from member states.' },
  { year: '1993', date: 'May', title: 'Board membership adopted', description: 'Resolution 755 (XXVIII) formalises the membership of ACMAD’s governing board.' },
  { year: '1996', date: '', title: 'Long-term goals sharpened', description: 'Decision 2 (XXXI) refines ACMAD’s long-term goals and objectives.' },
  { year: '1999', date: '', title: 'ECA–WMO cooperation', description: 'The Economic Commission for Africa and WMO establish a memorandum of understanding.' },
  { year: '2011', date: 'June', title: 'Financial regulations', description: 'The Board of Governors adopts ACMAD’s financial regulation through BoG-15.' },
];

export const metadata = {
  title: 'About ACMAD | Climate Intelligence for Africa',
  description: 'Discover ACMAD’s mandate, mission, vision, organisational structure and history as Africa’s continental climate centre.',
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <div className="eyebrow light"><span /> About ACMAD</div>
            <h1>A continental centre built for Africa’s climate future.</h1>
            <p>
              For more than four decades, ACMAD has helped transform weather and climate
              knowledge into services that protect communities and support development.
            </p>
          </div>
          <div className="about-hero-mark" aria-hidden="true">
            <Globe2 size={168} strokeWidth={0.65} />
            <span>Since<strong>1985</strong></span>
          </div>
        </div>
      </section>

      <nav className="about-subnav" aria-label="About page sections">
        <div className="container">
          <a href="#overview">Overview</a>
          <a href="#mission">Mission & vision</a>
          <a href="#mandate">Our mandate</a>
          <a href="#organisation">Organisation</a>
          <a href="#history">History</a>
        </div>
      </nav>

      <section className="section about-overview" id="overview">
        <div className="container about-overview-grid">
          <div>
            <div className="eyebrow"><span /> Our foundation</div>
            <h2>Created through a shared African commitment</h2>
          </div>
          <div className="about-prose">
            <p className="about-lead">
              ACMAD was established by the UNECA Conference of Ministers through
              Resolution 540 (XX) in 1985, acting on behalf of its African member states.
            </p>
            <p>
              The Centre was created to improve understanding of Africa’s atmosphere and
              climate, strengthen access to meteorological and hydrological information,
              operate weather-watch and early-warning services, and develop African
              scientific and technical capacity.
            </p>
            <p>
              Supported by UNECA member states and the World Meteorological Organization,
              ACMAD applies climate knowledge to practical challenges including food
              security, water resources, drought, tropical cyclones and renewable energy.
            </p>
          </div>
        </div>
        <div className="container about-facts">
          <div><strong>54</strong><span>African countries</span></div>
          <div><strong>1985</strong><span>Year established</span></div>
          <div><strong>Niamey</strong><span>Headquarters</span></div>
          <div><strong>Africa</strong><span>Continental mandate</span></div>
        </div>
      </section>

      <section className="section purpose-section" id="mission">
        <div className="container">
          <div className="section-heading purpose-heading">
            <div className="eyebrow"><span /> Our direction</div>
            <h2>Mission and vision</h2>
          </div>
          <div className="purpose-grid">
            <article className="purpose-card purpose-mission">
              <div className="purpose-icon"><ShieldCheck size={31} /></div>
              <span>Our mission</span>
              <h3>A centre of excellence for world-class meteorological and hydrological services.</h3>
              <p>Building the expertise, partnerships and operational capability required to serve the continent.</p>
            </article>
            <article className="purpose-card purpose-vision">
              <div className="purpose-icon"><Eye size={31} /></div>
              <span>Our vision</span>
              <h3>Accurate, timely weather and climate information for the welfare of people.</h3>
              <p>Ensuring climate knowledge reaches the institutions and communities that need it most.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section mandate-section" id="mandate">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> Resolution 540 (XX)</div>
              <h2>Our founding mandate</h2>
            </div>
            <p>Four connected responsibilities continue to guide how ACMAD serves African institutions and communities.</p>
          </div>
          <div className="mandate-grid">
            {mandate.map(({ icon: Icon, ...item }, index) => (
              <article className="mandate-card" key={item.title}>
                <div className="mandate-card-top">
                  <span>0{index + 1}</span>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section organisation-section" id="organisation">
        <div className="container organisation-grid">
          <div className="organisation-copy">
            <div className="eyebrow light"><span /> How we work</div>
            <h2>Science, forecasting and leadership under one centre</h2>
            <p>
              ACMAD is headed by a Director General and brings together specialised
              functions in weather, climate and forecasting. Its structure connects
              scientific analysis with operational services and regional coordination.
            </p>
            <a href="https://new.acmad.org/organisation/about/" className="button button-light">
              View official organisation information <ArrowRight size={17} />
            </a>
          </div>
          <div className="organisation-chart" aria-label="Simplified ACMAD organisational structure">
            <div className="org-node org-lead"><Landmark size={22} /><span>Director General</span></div>
            <div className="org-line" aria-hidden="true" />
            <div className="org-branches">
              <div className="org-node"><CloudSun size={21} /><span>Weather & climate</span></div>
              <div className="org-node"><Radar size={21} /><span>Forecasting</span></div>
              <div className="org-node"><Users size={21} /><span>Regional coordination</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section history-section" id="history">
        <div className="container history-layout">
          <div className="history-heading">
            <div className="eyebrow"><span /> Our journey</div>
            <h2>Milestones that shaped ACMAD</h2>
            <p>Key decisions and resolutions behind the Centre’s institutional development.</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone) => (
              <article className="timeline-item" key={milestone.year}>
                <div className="timeline-year"><strong>{milestone.year}</strong><span>{milestone.date}</span></div>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content"><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-resource-section">
        <div className="container about-resource-card">
          <div className="resource-icon"><FileText size={31} /></div>
          <div>
            <span className="card-kicker">Strategic resource</span>
            <h2>ACMAD Strategic Plan 2025–2027</h2>
            <p>Explore the Centre’s priorities and direction for stronger climate services across Africa.</p>
          </div>
          <a href="https://new.acmad.org/documents/109/SP-OnlineV_6.pdf" className="button button-accent">
            Download plan <Download size={17} />
          </a>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <BookOpenCheck size={38} />
          <div><span>Explore our work</span><h2>See climate science in action.</h2></div>
          <Link href="/#products" className="button button-light">View climate products <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
