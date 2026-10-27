import React, { useEffect, useState } from "react";
import {
  Activity, ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Cable,
  CheckCircle2, ChevronRight, Code2, Cpu, Globe2, Layers3, Mail,
  MapPin, Menu, Network, RadioTower, Router, Send, Server, ShieldCheck,
  Terminal, Wifi, X, Zap
} from "lucide-react";

/*
  PERSONALIZE THIS FILE:
  - Your name is already set to MD Nasim Hosen.
  - Replace the email, phone, LinkedIn and GitHub links below with your real details.
  - Add your real education, certificates and work experience before publishing.
  - Do not list a job, certification or skill level unless it is accurate.
*/

const PROFILE = {
  name: "MD Nasim Hosen",
  role: "Aspiring Network / ISP Engineer",
  location: "Bangladesh", // TODO: Add your city if you want it shown publicly.
  email: "your.email@example.com", // TODO: Replace with your real email.
  phone: "+880 1XXX-XXXXXX", // TODO: Replace with your real phone number.
  github: "https://github.com/", // TODO: Replace with your GitHub profile URL.
  linkedin: "https://www.linkedin.com/", // TODO: Replace with your LinkedIn profile URL.
};

const NAV_LINKS = [
  ["home", "Home"],
  ["skills", "Skill"],
  ["about", "About me"],
  ["contact", "Contact"],
  ["experience", "Experience"],
  ["projects", "Project"],
];

const SKILLS = [
  {
    icon: Network,
    number: "01",
    title: "IP Networking",
    category: "NETWORK FUNDAMENTALS",
    description: "IPv4 addressing, subnetting, CIDR, ARP, DNS, TCP/IP and common network ports.",
    tags: ["IPv4", "Subnetting", "TCP/IP"],
  },
  {
    icon: Cable,
    number: "02",
    title: "FTTH / GPON",
    category: "FIBER ACCESS",
    description: "PON architecture, splitter ratios, fiber paths, optical power levels and LOS basics.",
    tags: ["Fiber", "Splitter", "dBm"],
  },
  {
    icon: RadioTower,
    number: "03",
    title: "OLT / ONU",
    category: "ISP INFRASTRUCTURE",
    description: "ONU status checks, PON port basics, optical-info commands and customer-side diagnostics.",
    tags: ["OLT", "ONU", "PON"],
  },
  {
    icon: Layers3,
    number: "04",
    title: "VLAN",
    category: "TRAFFIC SEGMENTATION",
    description: "VLAN mapping, tagged frames, access/trunk modes and native VLAN concepts.",
    tags: ["802.1Q", "Tagging", "Trunk"],
  },
  {
    icon: Router,
    number: "05",
    title: "Routing & Switching",
    category: "CONNECTIVITY",
    description: "Router setup, LAN/WAN checks, gateway reachability and basic routing concepts.",
    tags: ["Routing", "Gateway", "LAN/WAN"],
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Troubleshooting",
    category: "FAULT ISOLATION",
    description: "Structured checks for PON down, ONU offline, packet loss, MAC mismatch and no internet.",
    tags: ["Diagnostics", "Ping", "LOS"],
  },
];

const PROJECTS = [
  {
    number: "01",
    type: "FTTH / GPON",
    title: "ONU Offline Troubleshooting",
    description:
      "A step-by-step learning workflow: verify OLT/PON status, review LOS alarms, inspect fiber connectors, check optical receive power and confirm ONU registration.",
    stack: ["OLT / ONU", "Optical Power", "PON"],
    icon: Cable,
  },
  {
    number: "02",
    type: "NETWORKING LAB",
    title: "IPv4 & Subnetting Notes",
    description:
      "Practice examples covering CIDR prefixes, subnet masks, network and broadcast addresses, usable host ranges and common ISP support questions.",
    stack: ["IPv4", "CIDR", "Subnetting"],
    icon: Terminal,
  },
  {
    number: "03",
    type: "ISP SUPPORT",
    title: "No-Internet Troubleshooting Flow",
    description:
      "A repeatable checklist for router status, WAN IP, gateway ping, DNS resolution, LAN cable testing and Wi-Fi-only connectivity issues.",
    stack: ["Router", "DNS", "Troubleshooting"],
    icon: Activity,
  },
];

const EXPERIENCE = [
  {
    date: "ONGOING",
    label: "TECHNICAL LEARNING",
    title: "Networking & ISP Practice",
    description:
      "Learning IP networking, subnetting, VLAN concepts, routing basics, FTTH/GPON architecture and structured troubleshooting for common connectivity problems.",
    tags: ["IP Networking", "VLAN", "Routing"],
  },
  {
    date: "ONGOING",
    label: "ACCESS NETWORK STUDY",
    title: "FTTH / GPON Fundamentals",
    description:
      "Studying OLT/ONU roles, PON port status, splitter loss, optical receive power and practical checks for fiber access faults.",
    tags: ["OLT / ONU", "Splitter", "Optical Power"],
  },
  {
    date: "ADD YOUR DATES",
    label: "WORK EXPERIENCE",
    title: "Your Job Title / Internship", // TODO: Replace with a real role, or remove this item if not applicable.
    description:
      "Add your actual company, responsibilities and achievements here. Avoid adding experience that you have not had.",
    tags: ["TODO: Add relevant tools", "TODO: Add responsibilities"],
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function NetworkOrb() {
  const nodes = [
    [50, 10], [76, 19], [87, 43], [73, 73], [48, 87],
    [22, 73], [12, 46], [26, 20], [51, 48], [65, 37], [34, 57],
  ];
  return (
    <div className="orb-scene" aria-label="Abstract neon network globe">
      <div className="orb-glow" />
      <div className="orb-ring ring-a" />
      <div className="orb-ring ring-b" />
      <div className="orb-ring ring-c" />
      <div className="network-orb">
        <div className="orb-grid orb-grid-one" />
        <div className="orb-grid orb-grid-two" />
        <svg className="orb-connections" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M50 10 L76 19 L87 43 L73 73 L48 87 L22 73 L12 46 L26 20 Z M50 10 L48 87 M12 46 L87 43 M26 20 L73 73 M76 19 L22 73 M26 20 L50 48 L87 43 M22 73 L50 48 L76 19 M34 57 L50 48 L65 37" />
        </svg>
        {nodes.map(([x, y], index) => (
          <span key={index} className={`orb-node orb-node-${index}`} style={{ left: `${x}%`, top: `${y}%` }} />
        ))}
        <div className="orb-center"><Globe2 size={34} strokeWidth={1.2} /></div>
      </div>
      <div className="floating-label label-online"><span className="live-dot" /> NETWORK ONLINE</div>
      <div className="floating-label label-packet"><Activity size={15} /> PACKETS IN MOTION</div>
      <div className="orb-caption">FTTH · GPON · IP NETWORKS</div>
      <div className="orb-spark spark-one" />
      <div className="orb-spark spark-two" />
    </div>
  );
}

function SectionTitle({ kicker, title, accent, description, number }) {
  return (
    <div className="section-title reveal">
      <div>
        <div className="eyebrow"><span>{number}</span>{kicker}</div>
        <h2>{title}<br /><span>{accent}</span></h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formMessage, setFormMessage] = useState("");
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      NAV_LINKS.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 160) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    // TODO: Replace PROFILE.email above before publishing. This uses the visitor's email app; it does not send to a server.
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormMessage("Your email app should open with your message. If it does not, email me directly using the address shown here.");
  };

  return (
    <div className="site-shell">
      <div className="background-grid" />
      <div className="ambient ambient-top" />
      <div className="ambient ambient-bottom" />

      <header className="header">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark"><Network size={19} /></span>
          <span className="brand-word">NASIM<span>.NET</span><small>NETWORK ENGINEERING</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
          {NAV_LINKS.map(([id, label]) => (
            <a key={id} className={activeSection === id ? "nav-link active" : "nav-link"} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="availability reveal"><span className="live-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <h1 className="reveal delay-1">Connecting ideas.<br /><span>Building networks.</span></h1>
            <p className="hero-intro reveal delay-2">
              Hello, I'm <strong>{PROFILE.name}</strong> — an <em>{PROFILE.role}</em> interested in ISP infrastructure, FTTH/GPON, routing and real-world network troubleshooting.
            </p>
            <div className="hero-buttons reveal delay-3">
              <a className="btn btn-primary" href="#projects">Explore projects <ArrowUpRight size={16} /></a>
              <a className="btn btn-outline" href="#about">About me <ChevronRight size={16} /></a>
            </div>
            <div className="hero-metrics reveal delay-3">
              <div><strong>06<span>+</span></strong><small>Core skill areas</small></div>
              <div><strong>03</strong><small>Practice projects</small></div>
              <div><strong>∞</strong><small>Curiosity to learn</small></div>
            </div>
          </div>

          
          <div className="hero-visual reveal delay-2">
  <NetworkOrb />
  <div className="photo-placeholder">
    <img
      src="/profile.jpg"
      alt="MD Nasim Hosen"
      className="profile-photo"
    />
  </div>
</div>

          <div className="hero-footer">
            <span>NETWORKING</span><i /><span>ISP</span><i /><span>FTTH / GPON</span><i /><span>ROUTING & SWITCHING</span>
            <a href="#skills">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
          </div>
        </section>

        {/* SKILL */}
        <section className="section-container section-block" id="skills">
          <SectionTitle number="01 /" kicker="TECHNICAL TOOLKIT" title="My network" accent="skill set." description="Networking concepts and ISP technologies I’m studying and practising. Replace or extend these with your real experience and skill level." />
          <div className="skills-grid">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <article className={`skill-card reveal delay-${(index % 3) + 1}`} key={skill.number}>
                  <div className="skill-top"><span className="skill-icon"><Icon size={22} /></span><span className="skill-number">{skill.number}</span></div>
                  <div className="skill-category">{skill.category}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-tags">{skill.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="card-arrow"><ArrowUpRight size={17} /></div>
                </article>
              );
            })}
          </div>
          <div className="skill-note reveal"><Zap size={16} /><span>Learning mindset: understand the concept, test it in a lab, then troubleshoot step by step.</span></div>
        </section>

        {/* ABOUT ME */}
        <section className="about-section" id="about">
          <div className="section-container section-block">
            <SectionTitle number="02 /" kicker="ABOUT ME" title="Curious by nature." accent="Technical by mindset." description="" />
            <div className="about-layout">
              <div className="about-copy reveal">
                <div className="about-lead">I’m interested in how the internet works — from a network packet to a fiber connection at a customer’s home.</div>
                <p>I’m building my knowledge in IP networking, ISP operations, FTTH/GPON access networks and practical troubleshooting. I enjoy breaking a problem into small checks, reading the evidence and learning why a solution works.</p>
                <p>My goal is to keep improving my technical skills and become a skilled Network Engineer.</p>

                <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
              </div>
              <div className="about-panel reveal delay-2">
                <div className="panel-header"><span className="terminal-dot red" /><span className="terminal-dot yellow" /><span className="terminal-dot green" /><small>nasim@network:~</small></div>
                <div className="terminal-content">
                  <p><span className="terminal-prompt">$</span> whoami</p>
                  <strong>{PROFILE.name}</strong>
                  <p><span className="terminal-prompt">$</span> focus --areas</p>
                  <div className="terminal-list"><span>01</span> IP Networking & Subnetting</div>
                  <div className="terminal-list"><span>02</span> FTTH / GPON · OLT / ONU</div>
                  <div className="terminal-list"><span>03</span> VLAN · Routing · Switching</div>
                  <div className="terminal-list"><span>04</span> Network Troubleshooting</div>
                  <p className="terminal-ready"><span className="live-dot" /> Always learning<span className="blinking-cursor">_</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section-container section-block" id="experience">
          <SectionTitle number="03 /" kicker="EXPERIENCE" title="Learning through" accent="hands-on practice." description="Update this timeline with your actual employment, internship, lab work, education or certifications. Sample items are clearly marked." />
          <div className="timeline">
            {EXPERIENCE.map((item, index) => (
              <article className={`timeline-item reveal delay-${index + 1}`} key={item.title}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-card">
                  <div className="timeline-meta"><span>{item.label}</span><time>{item.date}</time></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="skill-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section className="projects-section" id="projects">
          <div className="section-container section-block">
            <SectionTitle number="04 /" kicker="SELECTED PROJECTS" title="Practice that builds" accent="real understanding." description="These are starter project descriptions for your portfolio. Replace them with your own labs, screenshots, diagrams, commands and verified results." />
            <div className="projects-list">
              {PROJECTS.map((project, index) => {
                const Icon = project.icon;
                return (
                  <article className={`project-row reveal delay-${index + 1}`} key={project.number}>
                    <div className="project-number">{project.number}</div>
                    <div className="project-symbol"><Icon size={25} /></div>
                    <div className="project-content">
                      <div className="project-type">{project.type}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="skill-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                    <a href="#contact" className="project-open" aria-label={`Contact about ${project.title}`}><ArrowUpRight size={21} /></a>
                  </article>
                );
              })}
            </div>
            <div className="code-ribbon reveal"><span><span className="terminal-prompt">nasim@network</span>:~$</span> keep-learning --mode=always <span className="blinking-cursor">_</span></div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-container contact-layout">
            <div className="contact-copy reveal">
              <div className="eyebrow"><span>05 /</span> CONTACT</div>
              <h2>Let's build<br />something <span>connected.</span></h2>
              <p>Have a networking opportunity, technical discussion or project idea? Send me a message.</p>
              <div className="contact-details">
                <a href={`mailto:${PROFILE.email}`}><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small>{PROFILE.email}</span></a>
                <div><span className="contact-icon"><MapPin size={17} /></span><span><small>LOCATION</small>{PROFILE.location}</span></div>
                <a href={`tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`}><span className="contact-icon"><Wifi size={17} /></span><span><small>PHONE</small>{PROFILE.phone}</span></a>
              </div>
              <div className="social-row">
               <a href={PROFILE.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub <ArrowUpRight size={13} /></a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Globe2 size={18} /> LinkedIn <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form reveal delay-2" onSubmit={handleContact}>
              <div className="form-heading"><span className="live-dot" /> SEND A MESSAGE</div>
              <label>Your name<input name="name" type="text" placeholder="Enter your name" required /></label>
              <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>What would you like to discuss?<textarea name="message" rows="4" placeholder="Write your message..." required /></label>
              <button className="btn btn-primary submit-btn" type="submit">Prepare email <Send size={15} /></button>
              {formMessage && <p className="form-feedback" role="status">{formMessage}</p>}
              <small className="form-disclaimer">The form opens your email app. It does not send data to a server.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Network size={17} /></span><span className="brand-word">NASIM<span>.NET</span></span></a>
        <p>© {new Date().getFullYear()} {PROFILE.name}. Built with curiosity & React.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}

export default App;
