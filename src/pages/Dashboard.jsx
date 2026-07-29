import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)
const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
)
const IconCert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)
const IconStats = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconCommunity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
)
const IconHelp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)
const IconLogout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
)
const IconPlay = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
)
const IconTrophy = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
)
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const IconMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)
const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)
const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const IconCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const mesFormations = [
  { id: 1, titre: "Devenir Développeur Web de Zéro", categorie: "Développement Web", progression: 75, duree: "12h", image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80", lastLecon: "Les fonctions JavaScript", totalLecons: 24, leconsTerminees: 18 },
  { id: 2, titre: "Python pour l'Automatisation", categorie: "Python", progression: 40, duree: "16h", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80", lastLecon: "Les boucles et conditions", totalLecons: 20, leconsTerminees: 8 },
  { id: 3, titre: "Arduino — Du Débutant à l'Expert", categorie: "Électronique", progression: 10, duree: "20h", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", lastLecon: "Introduction à Arduino", totalLecons: 30, leconsTerminees: 3 },
]

const mesAchats = [
  { id: 1, titre: "Digitaliser un business et attirer plus de clients", date: "02 Juin 2026", prix: "9 $US", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&q=80" },
  { id: 2, titre: "Reprendre le contrôle de son argent en 90 jours", date: "15 Mai 2026", prix: "3 $US", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" },
]

const certificats = [
  { id: 1, titre: "MySQL — Bases de Données", date: "15 Mars 2026", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&q=80" }
]

const menuItems = [
  { id: 'accueil', label: 'Tableau de bord', icon: <IconHome /> },
  { id: 'formations', label: 'Mes formations', icon: <IconBook /> },
  { id: 'achats', label: 'Mes achats', icon: <IconCart /> },
  { id: 'certificats', label: 'Certificats', icon: <IconCert /> },
  { id: 'statistiques', label: 'Statistiques', icon: <IconStats /> },
  { id: 'communaute', label: 'Communauté', icon: <IconCommunity /> },
]

const menuBottom = [
  { id: 'parametres', label: 'Paramètres', icon: <IconSettings /> },
  { id: 'aide', label: "Centre d'aide", icon: <IconHelp /> },
]

function Dashboard() {
  const [activeTab, setActiveTab] = useState('accueil')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState('clair')
  const [langue, setLangue] = useState('fr')
  const [notifs, setNotifs] = useState({
    email: true, push: true, formations: true, promo: false
  })

  const handleNotif = (key) => {
    setNotifs({ ...notifs, [key]: !notifs[key] })
  }

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <img src="/src/assets/savoir.png" alt="SavoirLab" className="auth-logo-img" />
            Savoir<span>Lab</span>
          </Link>
        </div>

        <div className="sidebar-user">
          <img src="https://i.pravatar.cc/80?img=11" alt="User" className="sidebar-avatar" />
          <div>
            <strong>Dieudonné S.</strong>
            <span>Étudiant Premium</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-section-label">PRINCIPAL</p>
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          <p className="sidebar-section-label">COMPTE</p>
          {menuBottom.map(item => (
            <button
              key={item.id}
              className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false) }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-item logout">
            <IconLogout />
            <span>Se déconnecter</span>
          </Link>
        </div>
      </aside>

      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* MAIN */}
      <main className="dashboard-main">

        <header className="dashboard-topbar">
          <button className="burger-dash" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span></span><span></span><span></span>
          </button>
          <div className="topbar-right">
            <Link to="/formations" className="btn-primary-sm">+ Nouvelle formation</Link>
            <img src="https://i.pravatar.cc/40?img=11" alt="User" className="topbar-avatar" />
          </div>
        </header>

        <div className="dashboard-content">

          {/* ===== TABLEAU DE BORD ===== */}
          {activeTab === 'accueil' && (
            <div className="tab-content">
              <div className="welcome-banner">
                <div className="welcome-text">
                  <h1>Bon retour, Dieudonné ! 👋</h1>
                  <p>Tu as progressé de <strong>12%</strong> cette semaine. Continue comme ça !</p>
                </div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80" alt="welcome" />
              </div>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon green"><IconBook /></div>
                  <div><span className="stat-val">3</span><span className="stat-lbl">Formations en cours</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon blue"><IconCert /></div>
                  <div><span className="stat-val">1</span><span className="stat-lbl">Certificat obtenu</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon yellow"><IconTrophy /></div>
                  <div><span className="stat-val">29</span><span className="stat-lbl">Leçons terminées</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon purple"><IconStar /></div>
                  <div><span className="stat-val">42h</span><span className="stat-lbl">Temps d'apprentissage</span></div>
                </div>
              </div>
              <div className="section-block">
                <div className="section-block-header">
                  <h2>Continuer l'apprentissage</h2>
                  <button className="see-all" onClick={() => setActiveTab('formations')}>Voir tout →</button>
                </div>
                <div className="formations-dash-grid">
                  {mesFormations.map(f => (
                    <div className="formation-dash-card" key={f.id}>
                      <div className="fdash-img">
                        <img src={f.image} alt={f.titre} />
                        <span className="fdash-cat">{f.categorie}</span>
                      </div>
                      <div className="fdash-body">
                        <h3>{f.titre}</h3>
                        <p>Dernière leçon : <strong>{f.lastLecon}</strong></p>
                        <div className="progress-bar-wrap">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${f.progression}%` }} />
                          </div>
                          <span>{f.progression}%</span>
                        </div>
                        <div className="fdash-meta">
                          <span>{f.leconsTerminees}/{f.totalLecons} leçons</span>
                        </div>
                        <button className="btn-continuer"><IconPlay /> Continuer</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== MES FORMATIONS ===== */}
          {activeTab === 'formations' && (
            <div className="tab-content">
              <h1>Mes formations</h1>
              <p className="tab-subtitle">Toutes tes formations en cours et terminées</p>
              <div className="formations-dash-grid full">
                {mesFormations.map(f => (
                  <div className="formation-dash-card" key={f.id}>
                    <div className="fdash-img">
                      <img src={f.image} alt={f.titre} />
                      <span className="fdash-cat">{f.categorie}</span>
                    </div>
                    <div className="fdash-body">
                      <h3>{f.titre}</h3>
                      <p>Dernière leçon : <strong>{f.lastLecon}</strong></p>
                      <div className="progress-bar-wrap">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${f.progression}%` }} />
                        </div>
                        <span>{f.progression}%</span>
                      </div>
                      <div className="fdash-meta">
                        <span>⏱ {f.duree}</span>
                        <span>{f.leconsTerminees}/{f.totalLecons} leçons</span>
                      </div>
                      <button className="btn-continuer"><IconPlay /> Continuer</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="discover-more">
                <h3>Découvre plus de formations</h3>
                <p>Enrichis tes compétences avec nos nouvelles formations</p>
                <Link to="/formations" className="btn-primary-link">Voir le catalogue →</Link>
              </div>
            </div>
          )}

          {/* ===== MES ACHATS ===== */}
          {activeTab === 'achats' && (
            <div className="tab-content">
              <h1>Mes achats</h1>
              <p className="tab-subtitle">Tous tes produits digitaux achetés</p>
              <div className="achats-grid">
                {mesAchats.map(a => (
                  <div className="achat-card" key={a.id}>
                    <div className="achat-img">
                      <img src={a.image} alt={a.titre} />
                    </div>
                    <div className="achat-body">
                      <h3>{a.titre}</h3>
                      <div className="achat-meta">
                        <span>📅 {a.date}</span>
                        <span className="achat-prix">{a.prix}</span>
                      </div>
                      <button className="btn-continuer">📥 Télécharger</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="discover-more">
                <h3>Découvre nos produits digitaux</h3>
                <p>E-books et guides pour accélérer ton apprentissage</p>
                <Link to="/produits" className="btn-primary-link">Voir les produits →</Link>
              </div>
            </div>
          )}

          {/* ===== CERTIFICATS ===== */}
          {activeTab === 'certificats' && (
            <div className="tab-content">
              <h1>Mes certificats</h1>
              <p className="tab-subtitle">Les certificats que tu as obtenus</p>
              {certificats.length > 0 ? (
                <div className="certificats-grid">
                  {certificats.map(c => (
                    <div className="certificat-card" key={c.id}>
                      <div className="cert-img">
                        <img src={c.image} alt={c.titre} />
                        <div className="cert-badge"><IconCert /></div>
                      </div>
                      <div className="cert-body">
                        <h3>{c.titre}</h3>
                        <span>Obtenu le {c.date}</span>
                        <button className="btn-continuer">📥 Télécharger</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span>🏆</span>
                  <h3>Pas encore de certificat</h3>
                  <p>Termine une formation pour obtenir ton premier certificat !</p>
                  <Link to="/formations" className="btn-primary-link">Voir les formations</Link>
                </div>
              )}
            </div>
          )}

          {/* ===== STATISTIQUES ===== */}
          {activeTab === 'statistiques' && (
            <div className="tab-content">
              <h1>Statistiques</h1>
              <p className="tab-subtitle">Suis ta progression et tes performances</p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon green"><IconBook /></div>
                  <div><span className="stat-val">3</span><span className="stat-lbl">Formations actives</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon blue"><IconCert /></div>
                  <div><span className="stat-val">1</span><span className="stat-lbl">Certificats</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon yellow"><IconTrophy /></div>
                  <div><span className="stat-val">29</span><span className="stat-lbl">Leçons terminées</span></div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon purple"><IconStar /></div>
                  <div><span className="stat-val">42h</span><span className="stat-lbl">Temps total</span></div>
                </div>
              </div>
              <div className="section-block">
                <div className="section-block-header"><h2>Progression par formation</h2></div>
                <div className="stats-formations">
                  {mesFormations.map(f => (
                    <div className="stat-formation-row" key={f.id}>
                      <div className="stat-formation-info">
                        <img src={f.image} alt={f.titre} />
                        <div>
                          <strong>{f.titre}</strong>
                          <span>{f.categorie}</span>
                        </div>
                      </div>
                      <div className="stat-formation-progress">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${f.progression}%` }} />
                        </div>
                        <span>{f.progression}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="section-block">
                <div className="section-block-header"><h2>Activité hebdomadaire</h2></div>
                <div className="weekly-activity">
                  {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((j, i) => {
                    const heights = [60, 80, 45, 90, 70, 30, 50]
                    return (
                      <div className="activity-col" key={j}>
                        <div className="activity-bar-wrap">
                          <div className="activity-bar" style={{ height: `${heights[i]}%` }} />
                        </div>
                        <span>{j}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ===== COMMUNAUTE ===== */}
          {activeTab === 'communaute' && (
            <div className="tab-content">
              <h1>Communauté</h1>
              <p className="tab-subtitle">Rejoins et interagis avec les autres apprenants</p>
              <div className="communaute-cards">
                <div className="comm-card">
                  <div className="comm-icon">💬</div>
                  <h3>Forum d'entraide</h3>
                  <p>Pose tes questions et aide les autres membres de la communauté</p>
                  <button className="btn-continuer">Accéder au forum →</button>
                </div>
                <div className="comm-card">
                  <div className="comm-icon">📱</div>
                  <h3>Groupe WhatsApp</h3>
                  <p>Rejoins notre groupe WhatsApp pour échanger en temps réel</p>
                  <button className="btn-continuer">Rejoindre →</button>
                </div>
                <div className="comm-card">
                  <div className="comm-icon">🎯</div>
                  <h3>Défis hebdomadaires</h3>
                  <p>Participe aux défis de la semaine et gagne des badges exclusifs</p>
                  <button className="btn-continuer">Voir les défis →</button>
                </div>
              </div>
            </div>
          )}

          {/* ===== PARAMETRES ===== */}
          {activeTab === 'parametres' && (
            <div className="tab-content">
              <h1>Paramètres</h1>
              <p className="tab-subtitle">Personnalise ton expérience SavoirLab</p>
              <div className="settings-layout">

                {/* Profil */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon green"><IconSettings /></div>
                    <h3>Profil personnel</h3>
                  </div>
                  <div className="settings-form">
                    <div className="form-row-2">
                      <div className="settings-field">
                        <label>Prénom</label>
                        <input type="text" defaultValue="Dieudonné" />
                      </div>
                      <div className="settings-field">
                        <label>Nom</label>
                        <input type="text" defaultValue="Safari" />
                      </div>
                    </div>
                    <div className="settings-field">
                      <label>Email</label>
                      <input type="email" defaultValue="dieudonne@savoirlab.com" />
                    </div>
                    <div className="settings-field">
                      <label>Téléphone</label>
                      <input type="tel" defaultValue="+257 XX XXX XXX" />
                    </div>
                    <div className="settings-field">
                      <label>Bio</label>
                      <textarea rows={3} defaultValue="Passionné de tech et d'apprentissage continu." />
                    </div>
                    <button className="btn-save">Sauvegarder</button>
                  </div>
                </div>

                {/* Apparence */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon purple"><IconSun /></div>
                    <h3>Apparence</h3>
                  </div>
                  <div className="settings-form">
                    <label className="settings-label">Thème</label>
                    <div className="theme-options">
                      <button
                        className={`theme-btn ${theme === 'clair' ? 'active' : ''}`}
                        onClick={() => setTheme('clair')}
                      >
                        <IconSun /> Clair
                      </button>
                      <button
                        className={`theme-btn ${theme === 'sombre' ? 'active' : ''}`}
                        onClick={() => setTheme('sombre')}
                      >
                        <IconMoon /> Sombre
                      </button>
                      <button
                        className={`theme-btn ${theme === 'auto' ? 'active' : ''}`}
                        onClick={() => setTheme('auto')}
                      >
                        💻 Système
                      </button>
                    </div>
                    <label className="settings-label" style={{marginTop:'20px'}}>Couleur d'accent</label>
                    <div className="color-options">
                      {['#16a34a','#2563eb','#9333ea','#dc2626','#f59e0b','#0891b2'].map(c => (
                        <button
                          key={c}
                          className="color-btn"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon blue"><IconBell /></div>
                    <h3>Notifications</h3>
                  </div>
                  <div className="settings-form">
                    {[
                      { key: 'email', label: 'Notifications par email', desc: 'Reçois les mises à jour par email' },
                      { key: 'push', label: 'Notifications push', desc: 'Alertes directement dans le navigateur' },
                      { key: 'formations', label: 'Nouvelles formations', desc: 'Sois averti des nouvelles formations' },
                      { key: 'promo', label: 'Offres promotionnelles', desc: 'Reçois nos meilleures offres' },
                    ].map(n => (
                      <div className="notif-row" key={n.key}>
                        <div>
                          <strong>{n.label}</strong>
                          <span>{n.desc}</span>
                        </div>
                        <button
                          className={`toggle-btn ${notifs[n.key] ? 'on' : 'off'}`}
                          onClick={() => handleNotif(n.key)}
                        >
                          <div className="toggle-thumb" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sécurité */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon red"><IconShield /></div>
                    <h3>Sécurité</h3>
                  </div>
                  <div className="settings-form">
                    <div className="settings-field">
                      <label>Mot de passe actuel</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="settings-field">
                      <label>Nouveau mot de passe</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="settings-field">
                      <label>Confirmer</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <button className="btn-save">Mettre à jour</button>
                    <div className="security-option">
                      <div>
                        <strong>Double authentification (2FA)</strong>
                        <span>Sécurise ton compte avec une vérification en 2 étapes</span>
                      </div>
                      <button className="btn-enable">Activer</button>
                    </div>
                  </div>
                </div>

                {/* Langue */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon yellow"><IconGlobe /></div>
                    <h3>Langue & Région</h3>
                  </div>
                  <div className="settings-form">
                    <label className="settings-label">Langue de l'interface</label>
                    <div className="langue-options">
                      {[
                        { code: 'fr', label: '🇫🇷 Français' },
                        { code: 'en', label: '🇬🇧 English' },
                        { code: 'sw', label: '🇰🇪 Swahili' },
                      ].map(l => (
                        <button
                          key={l.code}
                          className={`langue-btn ${langue === l.code ? 'active' : ''}`}
                          onClick={() => setLangue(l.code)}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                    <div className="settings-field" style={{marginTop:'20px'}}>
                      <label>Fuseau horaire</label>
                      <select defaultValue="Africa/Bujumbura">
                        <option value="Africa/Bujumbura">Africa/Bujumbura (GMT+2)</option>
                        <option value="Africa/Nairobi">Africa/Nairobi (GMT+3)</option>
                        <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
                      </select>
                    </div>
                    <button className="btn-save">Sauvegarder</button>
                  </div>
                </div>

                {/* Abonnement */}
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-card-icon green"><IconCard /></div>
                    <h3>Abonnement & Facturation</h3>
                  </div>
                  <div className="settings-form">
                    <div className="plan-actuel">
                      <div className="plan-badge">Premium</div>
                      <div>
                        <strong>Plan Premium Actif</strong>
                        <span>Accès illimité à toutes les formations</span>
                      </div>
                    </div>
                    <div className="facture-list">
                      <div className="facture-row">
                        <span>📄 Facture Juin 2026</span>
                        <button className="btn-dl">Télécharger</button>
                      </div>
                      <div className="facture-row">
                        <span>📄 Facture Mai 2026</span>
                        <button className="btn-dl">Télécharger</button>
                      </div>
                      <div className="facture-row">
                        <span>📄 Facture Avril 2026</span>
                        <button className="btn-dl">Télécharger</button>
                      </div>
                    </div>
                    <button className="btn-save">Gérer l'abonnement</button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ===== AIDE ===== */}
          {activeTab === 'aide' && (
            <div className="tab-content">
              <h1>Centre d'aide</h1>
              <p className="tab-subtitle">Comment pouvons-nous t'aider ?</p>
              <div className="aide-grid">
                <div className="aide-card">
                  <span>📚</span>
                  <h3>Documentation</h3>
                  <p>Consulte nos guides détaillés pour utiliser la plateforme</p>
                  <button className="btn-continuer">Consulter →</button>
                </div>
                <div className="aide-card">
                  <span>💬</span>
                  <h3>Chat en direct</h3>
                  <p>Discute avec notre équipe support en temps réel</p>
                  <button className="btn-continuer">Ouvrir le chat →</button>
                </div>
                <div className="aide-card">
                  <span>📧</span>
                  <h3>Email support</h3>
                  <p>Envoie-nous un email, on répond sous 24h</p>
                  <button className="btn-continuer">Envoyer un email →</button>
                </div>
                <div className="aide-card">
                  <span>❓</span>
                  <h3>FAQ</h3>
                  <p>Les réponses aux questions les plus fréquentes</p>
                  <button className="btn-continuer">Voir la FAQ →</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}

export default Dashboard