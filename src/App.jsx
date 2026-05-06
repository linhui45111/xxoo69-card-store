import "./style.css";

const SITE = {
  name: "HSHB Tech",
  domain: "hshbtech.com",
  email: "contact@hshbtech.com",
  support: "support@hshbtech.com",
  business: "admin@hshbtech.com",
};

const services = [
  {
    title: "Software Development",
    titleJa: "ソフトウェア開発",
    text: "Custom web applications, internal tools, dashboards, and lightweight business systems for small teams.",
    textJa: "小規模チーム向けの Web アプリ、社内ツール、ダッシュボード、業務システムを設計・開発します。",
    icon: "▣",
  },
  {
    title: "AI Workflow Automation",
    titleJa: "AI ワークフロー自動化",
    text: "AI-assisted document processing, operational automation, and workflow design for practical business use.",
    textJa: "AI を活用した文書処理、業務自動化、実務に合わせたワークフロー設計を支援します。",
    icon: "✦",
  },
  {
    title: "Cloud & Infrastructure",
    titleJa: "クラウド導入支援",
    text: "Domain, email, DNS, hosting, deployment, security settings, and basic cloud infrastructure setup.",
    textJa: "ドメイン、メール、DNS、ホスティング、デプロイ、セキュリティ設定、クラウド環境構築を支援します。",
    icon: "☁",
  },
  {
    title: "Technical Consulting",
    titleJa: "技術コンサルティング",
    text: "Practical support for API integration, product setup, operational improvement, and troubleshooting.",
    textJa: "API 連携、プロダクト設定、運用改善、トラブルシューティングを実務目線でサポートします。",
    icon: "◇",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    titleJa: "要件確認",
    text: "We clarify your business needs, current tools, and expected outcomes.",
    textJa: "現在の課題、利用中のツール、実現したい成果を整理します。",
  },
  {
    step: "02",
    title: "Design & Build",
    titleJa: "設計と構築",
    text: "We design a practical solution and build the required website, workflow, or integration.",
    textJa: "実用性を重視し、必要なサイト、業務フロー、連携機能を構築します。",
  },
  {
    step: "03",
    title: "Launch & Support",
    titleJa: "公開と運用支援",
    text: "We help with launch checks, documentation, and ongoing technical support.",
    textJa: "公開前チェック、ドキュメント化、運用中の技術サポートまで対応します。",
  },
];

const faqs = [
  {
    q: "Do you provide services remotely?",
    qJa: "リモートで対応できますか？",
    a: "Yes. HSHB Tech operates as a remote-first technology service provider.",
    aJa: "はい。HSHB Tech はリモートファーストの技術サービスとして運営しています。",
  },
  {
    q: "What kind of clients do you support?",
    qJa: "どのような顧客を対象にしていますか？",
    a: "We mainly support small businesses, professional teams, and early-stage projects that need practical technical implementation.",
    aJa: "主に中小企業、専門チーム、実装力を必要とする初期段階のプロジェクトを支援します。",
  },
  {
    q: "How can I contact HSHB Tech?",
    qJa: "問い合わせ方法を教えてください。",
    a: `Please contact us at ${SITE.email}. For support, use ${SITE.support}.`,
    aJa: `お問い合わせは ${SITE.email} までご連絡ください。サポートは ${SITE.support} で受け付けています。`,
  },
];

function Logo() {
  return (
    <a className="brand" href="/" aria-label="HSHB Tech home">
      <span className="brand-mark">H</span>
      <span>
        <strong>HSHB TECH</strong>
        <small>{SITE.domain}</small>
      </span>
    </a>
  );
}

function Header() {
  const path = window.location.pathname;

  const nav = [
    ["Home", "/", "ホーム"],
    ["Services", "/services", "サービス"],
    ["About", "/about", "会社概要"],
    ["Contact", "/contact", "お問い合わせ"],
    ["Privacy", "/privacy", "Privacy"],
  ];

  return (
    <header className="site-header">
      <Logo />
      <nav className="nav-links" aria-label="Main navigation">
        {nav.map(([label, href, ja]) => (
          <a key={href} className={path === href ? "active" : ""} href={href}>
            <span>{label}</span>
            <small>{ja}</small>
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/contact">
        Start a Project
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Logo />
        <p>
          HSHB Tech provides software development, automation, and AI-enabled workflow solutions for small businesses and professional teams.
        </p>
        <p className="jp">
          HSHB Tech は、ソフトウェア開発、業務自動化、AI ワークフロー支援を提供しています。
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <h4>Pages</h4>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/security">Security</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`mailto:${SITE.support}`}>{SITE.support}</a>
          <a href={`mailto:${SITE.business}`}>{SITE.business}</a>
        </div>
      </div>

      <div className="copyright">
        <span>© 2026 HSHB Tech. All rights reserved.</span>
        <span>{SITE.domain}</span>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">Remote-first technology service provider</div>
        <h1 className="hero-title">
  <span className="hero-title-line">Build practical software,</span>
  <span className="hero-title-line">automation, and AI workflows.</span>
  <span className="hero-title-ja">実務に強いテクノロジー支援</span>
</h1>
        <p>
          HSHB Tech helps small businesses and professional teams build practical web systems,
          automate workflows, set up cloud infrastructure, and improve operations with AI-enabled tools.
        </p>
        <p className="jp">
          HSHB Tech は、中小企業や専門チーム向けに、Web システム開発、業務自動化、
          クラウド導入、AI ワークフロー支援を提供します。
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="/services">
            View Services
          </a>
          <a className="secondary-btn" href="/contact">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="HSHB Tech service overview">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="terminal-card">
          <div className="terminal-top">
            <span />
            <span />
            <span />
          </div>
          <pre>{`hshbtech.com
> software_development
> ai_workflow_automation
> cloud_infrastructure
> technical_consulting

status: reliable
region: global / japan-ready`}</pre>
        </div>
        <div className="mini-card floating-one">AI Workflow</div>
        <div className="mini-card floating-two">Cloud Setup</div>
        <div className="mini-card floating-three">Web Systems</div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      <section className="stat-row">
        <div>
          <strong>4</strong>
          <span>Core service areas</span>
        </div>
        <div>
          <strong>EN / JA</strong>
          <span>Business-ready content</span>
        </div>
        <div>
          <strong>HTTPS</strong>
          <span>Secure public website</span>
        </div>
        <div>
          <strong>Remote</strong>
          <span>Flexible collaboration</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>Services</span>
          <h2>Technology support for practical business needs.</h2>
          <p>開発、AI 自動化、クラウド導入、技術相談を、実務に合わせて提供します。</p>
        </div>
        <ServiceGrid />
      </section>

      <section className="split-section">
        <div className="glass-card large">
          <span className="tag">Why HSHB Tech</span>
          <h2>Clean implementation, clear communication, reliable delivery.</h2>
          <p>
            We focus on practical results: stable websites, useful automation, working integrations,
            and documentation that teams can understand and maintain.
          </p>
          <ul className="check-list">
            <li>Business-oriented technical planning</li>
            <li>Secure domain, email, and deployment setup</li>
            <li>AI workflow support without unnecessary complexity</li>
            <li>Remote-first support for international teams</li>
          </ul>
        </div>
        <ProcessList />
      </section>

      <section className="cta-panel">
        <div>
          <span>Get in touch</span>
          <h2>Start with a short technical consultation.</h2>
          <p>
            Tell us what you want to build, automate, or improve. We will help clarify the next practical step.
          </p>
        </div>
        <a className="primary-btn" href="/contact">
          Contact HSHB Tech
        </a>
      </section>
    </>
  );
}

function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((item) => (
        <article className="service-card" key={item.title}>
          <div className="service-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <h4>{item.titleJa}</h4>
          <p>{item.text}</p>
          <p className="jp">{item.textJa}</p>
        </article>
      ))}
    </div>
  );
}

function ProcessList() {
  return (
    <div className="process-list">
      {process.map((item) => (
        <article key={item.step}>
          <span>{item.step}</span>
          <div>
            <h3>{item.title}</h3>
            <h4>{item.titleJa}</h4>
            <p>{item.text}</p>
            <p className="jp">{item.textJa}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function AboutPage() {
  return (
    <PageShell
      label="About"
      title="About HSHB Tech"
      subtitle="HSHB Tech is a remote-first technology service provider focused on practical software, automation, AI workflow support, and cloud setup."
      subtitleJa="HSHB Tech は、実用的なソフトウェア開発、業務自動化、AI ワークフロー支援、クラウド導入に取り組むリモートファーストのテクノロジーサービスです。"
    >
      <div className="content-grid">
        <div className="glass-card">
          <h2>Who we support</h2>
          <p>
            We support small businesses, independent operators, professional teams, and early-stage projects
            that need practical technical implementation.
          </p>
          <p className="jp">
            実務に合う技術実装を必要とする中小企業、個人事業者、専門チーム、初期段階のプロジェクトを支援します。
          </p>
        </div>

        <div className="glass-card">
          <h2>How we work</h2>
          <p>
            HSHB Tech operates as a remote-first technology service provider. Communication,
            planning, implementation, and documentation can be handled online.
          </p>
          <p className="jp">
            HSHB Tech はリモートファーストで運営しています。相談、設計、実装、ドキュメント作成までオンラインで対応可能です。
          </p>
        </div>

        <div className="glass-card">
          <h2>Official Information</h2>
          <p>
            Official website: <strong>{SITE.domain}</strong>
          </p>
          <p>
            Official domain: <strong>{SITE.domain}</strong>
          </p>
          <p>
            General inquiries: <strong>{SITE.email}</strong>
          </p>
          <p>
            Support: <strong>{SITE.support}</strong>
          </p>
          <p>
            Business administration: <strong>{SITE.business}</strong>
          </p>

          <h2
            style={{
              marginTop: "24px",
              paddingTop: "18px",
              borderTop: "1px solid var(--line)",
              fontSize: "1.2rem",
            }}
          >
            公式情報
          </h2>
          <p>
            公式ウェブサイト：<strong>{SITE.domain}</strong>
          </p>
          <p>
            公式ドメイン：<strong>{SITE.domain}</strong>
          </p>
          <p>
            一般お問い合わせ：<strong>{SITE.email}</strong>
          </p>
          <p>
            サポート：<strong>{SITE.support}</strong>
          </p>
          <p>
            管理連絡先：<strong>{SITE.business}</strong>
          </p>
        </div>
      </div>
    </PageShell>
  );
}

function ServicesPage() {
  return (
    <PageShell
      label="Services"
      title="Services designed for practical implementation."
      subtitle="From websites and automation to AI workflow support and deployment setup, HSHB Tech helps teams move from idea to working system."
      subtitleJa="Web サイト、業務自動化、AI ワークフロー支援、デプロイ環境構築まで、アイデアを実際に動く仕組みに変える支援を行います。"
    >
      <ServiceGrid />
      <div className="blue-note">
        <strong>Service scope depends on the project.</strong>
        <p>
          Each project is discussed based on requirements, timeline, available tools, and expected deliverables.
          HSHB Tech does not claim false partnerships, fake office addresses, or unauthorized certifications.
        </p>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="Contact HSHB Tech"
      subtitle="For general inquiries, support requests, or business discussions, please contact us through an official hshbtech.com email address."
      subtitleJa="一般的なお問い合わせ、サポート依頼、業務相談は、公式の hshbtech.com メールアドレスまでご連絡ください。"
    >
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${SITE.email}`}>
          <span>General inquiries</span>
          <strong>{SITE.email}</strong>
          <small>For general questions and project inquiries.</small>
        </a>
        <a className="contact-card" href={`mailto:${SITE.support}`}>
          <span>Support</span>
          <strong>{SITE.support}</strong>
          <small>For service support and technical questions.</small>
        </a>
        <a className="contact-card" href={`mailto:${SITE.business}`}>
          <span>Business</span>
          <strong>{SITE.business}</strong>
          <small>For business administration and account matters.</small>
        </a>
      </div>

      <div className="glass-card">
        <h2>Before contacting us</h2>
        <p>
          Please include a short description of your request, target website or system, timeline,
          and any existing tools or services involved.
        </p>
        <p className="jp">
          お問い合わせの際は、依頼内容、対象となるサイトやシステム、希望時期、利用中のツールやサービスを簡単にお知らせください。
        </p>
      </div>
    </PageShell>
  );
}

function PrivacyPage() {
  return (
    <PageShell
      label="Privacy Policy"
      title="Privacy Policy"
      subtitle="This privacy policy explains what information HSHB Tech may collect through this website and how it is used."
      subtitleJa="このプライバシーポリシーは、本ウェブサイトを通じて HSHB Tech が取得する可能性のある情報とその利用目的を説明します。"
    >
      <LegalContent
        sections={[
          [
            "Information we collect",
            "We may collect information you provide when contacting us, such as your name, email address, company name, and message content.",
          ],
          [
            "How we use information",
            "We use this information to respond to inquiries, provide requested support, discuss potential projects, and improve our services.",
          ],
          [
            "Sharing with third parties",
            "We do not sell personal information. Information may be processed by service providers only when necessary for email delivery, hosting, security, or business operations.",
          ],
          [
            "Data requests",
            `You may contact ${SITE.email} to request access, correction, or deletion of information you have provided.`,
          ],
          ["Contact", `For privacy questions, contact ${SITE.email}.`],
        ]}
      />
    </PageShell>
  );
}

function TermsPage() {
  return (
    <PageShell
      label="Terms"
      title="Website Terms"
      subtitle="These terms provide a simple overview of the acceptable use of this website and how HSHB Tech services are discussed."
      subtitleJa="本ページは、本ウェブサイトの利用および HSHB Tech のサービス相談に関する基本的な条件を説明します。"
    >
      <LegalContent
        sections={[
          [
            "Information only",
            "The content on this website is provided for general information and does not constitute a final service contract or binding quotation.",
          ],
          [
            "Services",
            "Actual service scope, fees, timeline, and deliverables are determined through separate discussion, proposal, or agreement.",
          ],
          [
            "Acceptable use",
            "You may not misuse this website, attempt unauthorized access, interfere with the service, or submit harmful content.",
          ],
          [
            "No false representation",
            "HSHB Tech does not claim unauthorized partner status, fake registrations, or false customer references.",
          ],
          ["Contact", `For questions about these terms, contact ${SITE.email}.`],
        ]}
      />
    </PageShell>
  );
}

function SecurityPage() {
  return (
    <PageShell
      label="Security"
      title="Security and trust"
      subtitle="HSHB Tech aims to maintain a secure and trustworthy public website experience."
      subtitleJa="HSHB Tech は、安全で信頼できる公式サイト体験の維持を目指しています。"
    >
      <div className="content-grid">
        <div className="glass-card">
          <h2>HTTPS</h2>
          <p>The official website should be accessed through HTTPS to help protect visitor connections.</p>
        </div>
        <div className="glass-card">
          <h2>Domain email</h2>
          <p>Official communication should use email addresses under the hshbtech.com domain.</p>
        </div>
        <div className="glass-card">
          <h2>Responsible content</h2>
          <p>
            We avoid false partner claims, fake office addresses, fake client logos, or misleading company information.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

function LegalContent({ sections }) {
  return (
    <div className="legal-stack">
      {sections.map(([title, text]) => (
        <section className="glass-card" key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="section faq-section">
      <div className="section-head">
        <span>FAQ</span>
        <h2>Frequently asked questions</h2>
        <p>よくある質問</p>
      </div>
      <div className="faq-grid">
        {faqs.map((item) => (
          <article className="glass-card" key={item.q}>
            <h3>{item.q}</h3>
            <h4>{item.qJa}</h4>
            <p>{item.a}</p>
            <p className="jp">{item.aJa}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PageShell({ label, title, subtitle, subtitleJa, children }) {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {subtitleJa && <p className="jp">{subtitleJa}</p>}
      </section>
      <section className="section">{children}</section>
    </>
  );
}

function NotFoundPage() {
  return (
    <PageShell
      label="404"
      title="Page not found"
      subtitle="The page you are looking for does not exist."
      subtitleJa="お探しのページは見つかりませんでした。"
    >
      <a className="primary-btn" href="/">
        Back to Home
      </a>
    </PageShell>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const routes = {
    "/": <HomePage />,
    "/about": <AboutPage />,
    "/services": <ServicesPage />,
    "/contact": <ContactPage />,
    "/privacy": <PrivacyPage />,
    "/terms": <TermsPage />,
    "/security": <SecurityPage />,
  };

  return (
    <div className="app">
      <div className="site-bg" />
      <Header />
      <main>{routes[path] || <NotFoundPage />}</main>
      {path === "/" && <FAQSection />}
      <Footer />
    </div>
  );
}

export default App;
