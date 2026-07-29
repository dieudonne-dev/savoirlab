import { useParams, Link } from 'react-router-dom'
import './FormationDetail.css'

const IconStar = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconPlay = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
)
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const IconCert = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const formations = [
  {
    id: 1,
    titre: "Devenir Développeur Web de Zéro",
    categorie: "Développement Web",
    niveau: "Débutant",
    duree: "12h",
    inscrits: 340,
    prix: 0,
    gratuit: true,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    description: "Apprends HTML, CSS et JavaScript pour créer tes premiers sites web professionnels. Cette formation complète t'emmène de zéro à la création de sites web modernes et responsive.",
    instructor: "Dieudonné Safari",
    instructorRole: "Fondateur SavoirLab",
    instructorAvatar: "https://i.pravatar.cc/80?img=11",
    note: 4.9,
    nbAvis: 42,
    langue: "Français",
    certificat: true,
    acces: "À vie",
    objectifs: [
      "Maîtriser HTML5 et CSS3 de A à Z",
      "Créer des sites web modernes et responsive",
      "Apprendre JavaScript et la manipulation du DOM",
      "Déployer ton site web en ligne",
      "Utiliser Git et GitHub",
      "Construire 3 projets concrets"
    ],
    prerequis: [
      "Aucune connaissance en programmation requise",
      "Un ordinateur avec accès internet",
      "De la motivation et de la persévérance"
    ],
    programme: [
      { titre: "Introduction au développement web", lecons: 4, duree: "1h30" },
      { titre: "HTML5 — Les bases", lecons: 8, duree: "2h30" },
      { titre: "CSS3 — Mise en forme", lecons: 10, duree: "3h00" },
      { titre: "JavaScript — Les fondamentaux", lecons: 12, duree: "4h00" },
      { titre: "Projet 1 — Portfolio personnel", lecons: 5, duree: "2h00" },
      { titre: "Git et GitHub", lecons: 4, duree: "1h30" },
      { titre: "Déploiement en ligne", lecons: 3, duree: "1h00" },
    ],
    avis: [
      { nom: "Jean K.", avatar: "https://i.pravatar.cc/48?img=1", note: 5, commentaire: "Formation excellente ! J'ai trouvé mon premier job 3 mois après.", date: "Mars 2026" },
      { nom: "Marie N.", avatar: "https://i.pravatar.cc/48?img=5", note: 5, commentaire: "Très bien expliqué, les projets sont concrets et motivants.", date: "Avril 2026" },
      { nom: "Paul M.", avatar: "https://i.pravatar.cc/48?img=3", note: 4, commentaire: "Bonne formation, j'aurais aimé plus de contenu sur React.", date: "Mai 2026" },
    ]
  },
  {
    id: 2,
    titre: "React JS — De Zéro à Expert",
    categorie: "Développement Web",
    niveau: "Intermédiaire",
    duree: "18h",
    inscrits: 210,
    prix: 15,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    description: "Maîtrise React et construis des applications web modernes et performantes.",
    instructor: "Dieudonné Safari",
    instructorRole: "Fondateur SavoirLab",
    instructorAvatar: "https://i.pravatar.cc/80?img=11",
    note: 4.8,
    nbAvis: 28,
    langue: "Français",
    certificat: true,
    acces: "À vie",
    objectifs: [
      "Comprendre les concepts fondamentaux de React",
      "Créer des composants réutilisables",
      "Gérer l'état avec useState et useEffect",
      "Naviguer entre pages avec React Router",
      "Consommer des APIs REST",
      "Déployer une app React en production"
    ],
    prerequis: [
      "Maîtriser HTML, CSS et JavaScript",
      "Notions de base en ES6+",
      "Un ordinateur avec Node.js installé"
    ],
    programme: [
      { titre: "Introduction à React", lecons: 5, duree: "1h30" },
      { titre: "Composants et JSX", lecons: 8, duree: "2h30" },
      { titre: "State et Props", lecons: 10, duree: "3h00" },
      { titre: "Hooks React", lecons: 8, duree: "2h30" },
      { titre: "React Router", lecons: 6, duree: "2h00" },
      { titre: "Appels API", lecons: 7, duree: "2h30" },
      { titre: "Projet final", lecons: 8, duree: "3h00" },
    ],
    avis: [
      { nom: "Alice B.", avatar: "https://i.pravatar.cc/48?img=9", note: 5, commentaire: "La meilleure formation React en français !", date: "Mai 2026" },
      { nom: "Marc T.", avatar: "https://i.pravatar.cc/48?img=7", note: 4, commentaire: "Bien structuré, les exercices pratiques sont très utiles.", date: "Juin 2026" },
    ]
  },
  {
    id: 3,
    titre: "Arduino — Du Débutant à l'Expert",
    categorie: "Electronique",
    niveau: "Débutant",
    duree: "20h",
    inscrits: 180,
    prix: 12,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    description: "Maîtrise l'Arduino et crée des projets électroniques impressionnants.",
    instructor: "Dieudonné Safari",
    instructorRole: "Fondateur SavoirLab",
    instructorAvatar: "https://i.pravatar.cc/80?img=11",
    note: 4.7,
    nbAvis: 19,
    langue: "Français",
    certificat: true,
    acces: "À vie",
    objectifs: [
      "Comprendre les composants électroniques de base",
      "Programmer un Arduino en C++",
      "Réaliser des montages électroniques",
      "Contrôler des moteurs, LEDs et capteurs",
      "Créer des projets IoT connectés",
      "Lire et comprendre des schémas électroniques"
    ],
    prerequis: [
      "Aucune connaissance en électronique requise",
      "Un kit Arduino recommandé",
      "Un ordinateur avec l'IDE Arduino"
    ],
    programme: [
      { titre: "Introduction à l'électronique", lecons: 5, duree: "1h30" },
      { titre: "Prise en main Arduino", lecons: 6, duree: "2h00" },
      { titre: "Composants de base", lecons: 8, duree: "2h30" },
      { titre: "Capteurs et actionneurs", lecons: 10, duree: "3h30" },
      { titre: "Communication série", lecons: 6, duree: "2h00" },
      { titre: "Projets IoT", lecons: 8, duree: "3h00" },
      { titre: "Projet final", lecons: 5, duree: "2h00" },
    ],
    avis: [
      { nom: "Kevin L.", avatar: "https://i.pravatar.cc/48?img=12", note: 5, commentaire: "Parfait pour débuter en électronique. Très pédagogique.", date: "Avril 2026" },
    ]
  },
]

function FormationDetail() {
  const { id } = useParams()
  const formation = formations.find(f => f.id === parseInt(id))

  if (!formation) {
    return (
      <div className="not-found">
        <h1>Formation introuvable</h1>
        <Link to="/formations" className="btn-back">← Retour aux formations</Link>
      </div>
    )
  }

  const renderStars = (note) => {
    return [1,2,3,4,5].map(i => (
      <IconStar key={i} filled={i <= Math.round(note)} />
    ))
  }

  const similaires = formations.filter(f => f.id !== formation.id).slice(0, 2)

  return (
    <main className="formation-detail-page">

      <section className="detail-hero">
        <div className="detail-hero-container">
          <div className="detail-hero-content">
            <div className="detail-breadcrumb">
              <Link to="/formations">Formations</Link>
              <span>›</span>
              <span>{formation.categorie}</span>
            </div>
            <span className="detail-categorie">{formation.categorie}</span>
            <h1>{formation.titre}</h1>
            <p>{formation.description}</p>
            <div className="detail-meta">
              <div className="detail-note">
                <div className="stars-row">{renderStars(formation.note)}</div>
                <strong>{formation.note}</strong>
                <span>({formation.nbAvis} avis)</span>
              </div>
              <span className="detail-separator">•</span>
              <span><IconUsers /> {formation.inscrits} inscrits</span>
              <span className="detail-separator">•</span>
              <span><IconClock /> {formation.duree}</span>
              <span className="detail-separator">•</span>
              <span className={'detail-niveau ' + formation.niveau.toLowerCase()}>
                {formation.niveau}
              </span>
            </div>
            <div className="detail-instructor">
              <img src={formation.instructorAvatar} alt={formation.instructor} />
              <span>Par <strong>{formation.instructor}</strong> — {formation.instructorRole}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="detail-body">
        <div className="detail-container">

          <div className="detail-main">

            <div className="detail-section">
              <h2>Ce que tu vas apprendre</h2>
              <div className="objectifs-grid">
                {formation.objectifs.map((obj, i) => (
                  <div className="objectif-item" key={i}>
                    <IconCheck />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>Programme de la formation</h2>
              <div className="programme-list">
                {formation.programme.map((section, i) => (
                  <div className="programme-item" key={i}>
                    <div className="programme-info">
                      <div className="programme-num">{i + 1}</div>
                      <div>
                        <strong>{section.titre}</strong>
                        <span>{section.lecons} leçons • {section.duree}</span>
                      </div>
                    </div>
                    <div className="programme-icon"><IconPlay /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>Prérequis</h2>
              <ul className="prerequis-list">
                {formation.prerequis.map((p, i) => (
                  <li key={i}>
                    <IconCheck />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h2>Ton instructeur</h2>
              <div className="instructor-card">
                <img src={formation.instructorAvatar} alt={formation.instructor} />
                <div>
                  <h3>{formation.instructor}</h3>
                  <span>{formation.instructorRole}</span>
                  <p>Passionné de tech et d'éducation, {formation.instructor} a créé SavoirLab pour rendre la formation tech accessible à tous. Il cumule plus de 5 ans d'expérience en développement et en enseignement.</p>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>Avis des étudiants</h2>
              <div className="avis-summary">
                <div className="avis-note-big">
                  <span>{formation.note}</span>
                  <div className="stars-row">{renderStars(formation.note)}</div>
                  <p>Note de la formation</p>
                </div>
              </div>
              <div className="avis-list">
                {formation.avis.map((a, i) => (
                  <div className="avis-item" key={i}>
                    <img src={a.avatar} alt={a.nom} />
                    <div className="avis-content">
                      <div className="avis-header">
                        <strong>{a.nom}</strong>
                        <div className="stars-row">{renderStars(a.note)}</div>
                        <span className="avis-date">{a.date}</span>
                      </div>
                      <p>{a.commentaire}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <aside className="detail-sidebar">
            <div className="detail-card">
              <div className="detail-card-img">
                <img src={formation.image} alt={formation.titre} />
                <div className="play-overlay">
                  <div className="play-btn"><IconPlay /></div>
                  <span>Aperçu gratuit</span>
                </div>
              </div>
              <div className="detail-card-body">
                <div className="detail-prix">
                  {formation.gratuit
                    ? <span className="prix-gratuit">Gratuit</span>
                    : <span className="prix-payant">{formation.prix} $US</span>
                  }
                </div>
                <button className="btn-inscrire">
                  {formation.gratuit ? '🎓 Commencer gratuitement' : "💳 S'inscrire maintenant"}
                </button>
                <Link to="/register" className="btn-essai">
                  Créer un compte gratuit
                </Link>
                <div className="detail-includes">
                  <h4>Cette formation inclut :</h4>
                  <div className="include-item">
                    <IconClock />
                    <span>{formation.duree} de contenu vidéo</span>
                  </div>
                  <div className="include-item">
                    <IconPlay />
                    <span>Accès {formation.acces}</span>
                  </div>
                  <div className="include-item">
                    <IconCert />
                    <span>Certificat de completion</span>
                  </div>
                  <div className="include-item">
                    <IconUsers />
                    <span>Communauté d'entraide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="similar-formations">
              <h3>Formations similaires</h3>
              {similaires.map(f => (
                <Link
                  to={'/formations/' + f.id}
                  className="similar-card"
                  key={f.id}
                >
                  <img src={f.image} alt={f.titre} />
                  <div>
                    <strong>{f.titre}</strong>
                    <span>{f.gratuit ? 'Gratuit' : f.prix + ' $US'}</span>
                  </div>
                </Link>
              ))}
            </div>

          </aside>

        </div>
      </div>

    </main>
  )
}

export default FormationDetail