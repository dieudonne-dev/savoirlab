import './APropos.css'

const equipe = [
  {
    nom: "Dieudonné Safari",
    role: "Fondateur & CEO",
    bio: "Passionné de tech et d'éducation, Dieudonné a créé SavoirLab pour rendre la formation tech accessible à tous en Afrique.",
    avatar: "https://i.pravatar.cc/150?img=11",
    linkedin: "#"
  },
  {
    nom: "Marie Nakimana",
    role: "Responsable Formations",
    bio: "Ingénieure en informatique avec 5 ans d'expérience, Marie conçoit nos programmes de formation avec passion et rigueur.",
    avatar: "https://i.pravatar.cc/150?img=5",
    linkedin: "#"
  },
  {
    nom: "Paul Mutombo",
    role: "Lead Développeur",
    bio: "Expert en développement web et mobile, Paul s'assure que la plateforme offre la meilleure expérience possible.",
    avatar: "https://i.pravatar.cc/150?img=3",
    linkedin: "#"
  },
  {
    nom: "Grace Iradukunda",
    role: "Community Manager",
    bio: "Grace anime notre communauté d'apprenants et s'assure que chaque étudiant reçoit le soutien dont il a besoin.",
    avatar: "https://i.pravatar.cc/150?img=9",
    linkedin: "#"
  },
]

const valeurs = [
  {
    icon: "🎯",
    titre: "Excellence",
    desc: "Nous visons l'excellence dans chaque formation, chaque ressource et chaque interaction avec nos étudiants."
  },
  {
    icon: "🌍",
    titre: "Accessibilité",
    desc: "Nous croyons que tout le monde mérite d'accéder à une éducation tech de qualité, peu importe sa situation."
  },
  {
    icon: "🤝",
    titre: "Communauté",
    desc: "Apprendre ensemble est plus puissant qu'apprendre seul. Nous cultivons une communauté soudée et bienveillante."
  },
  {
    icon: "🚀",
    titre: "Innovation",
    desc: "Nous restons constamment à la pointe pour offrir les compétences les plus demandées sur le marché."
  },
]

function APropos() {
  return (
    <main className="apropos-page">

      {/* HEADER */}
      <section className="apropos-header">
        <div className="apropos-header-container">
          <span className="section-tag">À propos</span>
          <h1>Notre mission : rendre la<br />tech <span className="accent">accessible à tous</span></h1>
          <p>SavoirLab est né d'une conviction simple — chaque personne mérite d'accéder aux compétences numériques qui transforment des vies.</p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="histoire">
        <div className="apropos-container">
          <div className="histoire-grid">
            <div className="histoire-content">
              <span className="section-tag">Notre histoire</span>
              <h2 className="section-title">De zéro à une<br />communauté de <span className="accent">1200+</span> apprenants</h2>
              <p>SavoirLab a été fondé en 2024 par Dieudonné Safari, un développeur passionné qui constatait le manque de ressources de qualité en français pour apprendre la tech en Afrique.</p>
              <p>Partant d'un simple blog, la plateforme s'est rapidement transformée en une véritable école digitale, offrant des formations complètes en informatique, électronique et développement personnel.</p>
              <p>Aujourd'hui, SavoirLab compte plus de 1200 étudiants actifs, 50 formations et une communauté engagée qui grandit chaque jour.</p>
              <div className="histoire-stats">
                <div className="h-stat">
                  <span className="h-stat-number">2024</span>
                  <span className="h-stat-label">Année de création</span>
                </div>
                <div className="h-stat">
                  <span className="h-stat-number">1200+</span>
                  <span className="h-stat-label">Étudiants</span>
                </div>
                <div className="h-stat">
                  <span className="h-stat-number">50+</span>
                  <span className="h-stat-label">Formations</span>
                </div>
                <div className="h-stat">
                  <span className="h-stat-number">4.9⭐</span>
                  <span className="h-stat-label">Note moyenne</span>
                </div>
              </div>
            </div>
            <div className="histoire-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="Notre équipe"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="valeurs">
        <div className="apropos-container">
          <div className="section-header">
            <span className="section-tag">Nos valeurs</span>
            <h2 className="section-title">Ce qui nous guide<br />chaque jour</h2>
            <p className="section-subtitle">Nos valeurs sont le fondement de tout ce que nous faisons chez SavoirLab</p>
          </div>
          <div className="valeurs-grid">
            {valeurs.map((v, i) => (
              <div className="valeur-card" key={i}>
                <span className="valeur-icon">{v.icon}</span>
                <h3>{v.titre}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="equipe">
        <div className="apropos-container">
          <div className="section-header">
            <span className="section-tag">Notre équipe</span>
            <h2 className="section-title">Les personnes derrière<br />SavoirLab</h2>
            <p className="section-subtitle">Une équipe passionnée dédiée à ta réussite</p>
          </div>
          <div className="equipe-grid">
            {equipe.map((m, i) => (
              <div className="membre-card" key={i}>
                <div className="membre-avatar">
                  <img src={m.avatar} alt={m.nom} />
                </div>
                <div className="membre-info">
                  <h3>{m.nom}</h3>
                  <span className="membre-role">{m.role}</span>
                  <p>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="apropos-cta">
        <div className="apropos-container">
          <div className="cta-box">
            <h2>Prêt à rejoindre l'aventure ?</h2>
            <p>Rejoins plus de 1200 étudiants qui apprennent déjà sur SavoirLab</p>
            <div className="cta-buttons">
              <a href="/register" className="btn-white">Créer un compte gratuit</a>
              <a href="/formations" className="btn-outline-white">Voir les formations</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default APropos