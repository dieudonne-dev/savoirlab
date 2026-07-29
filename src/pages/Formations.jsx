import { useState } from 'react'
import './Formations.css'

const formations = [
  {
    id: 1,
    titre: "Devenir Développeur Web de Zéro",
    categorie: "Développement Web",
    niveau: "Débutant",
    duree: "9h",
    inscrits: 340,
    prix: 0,
    gratuit: true,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
    description: "Apprends HTML, CSS et JavaScript pour créer tes premiers sites web professionnels."
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
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
    description: "Maîtrise React et construis des applications web modernes et performantes."
  },
  {
    id: 3,
    titre: "Arduino — Du Débutant à l'Expert",
    categorie: "Électronique",
    niveau: "Débutant",
    duree: "20h",
    inscrits: 180,
    prix: 12,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    description: "Maîtrise l'Arduino et crée des projets électroniques impressionnants."
  },
  {
    id: 4,
    titre: "Python pour l'Automatisation",
    categorie: "Python",
    niveau: "Intermédiaire",
    duree: "16h",
    inscrits: 290,
    prix: 10,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    description: "Automatise tes tâches quotidiennes et gagne un temps précieux avec Python."
  },
  {
    id: 5,
    titre: "Python Débutant — Les Bases",
    categorie: "Python",
    niveau: "Débutant",
    duree: "8h",
    inscrits: 420,
    prix: 0,
    gratuit: true,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    description: "Découvre Python depuis zéro avec des exercices pratiques et concrets."
  },
  {
    id: 6,
    titre: "Cybersécurité — Ethical Hacking",
    categorie: "Cybersécurité",
    niveau: "Avancé",
    duree: "24h",
    inscrits: 150,
    prix: 20,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    description: "Apprends les techniques de hacking éthique pour sécuriser les systèmes."
  },
  {
    id: 7,
    titre: "React Native — Apps Mobile",
    categorie: "Mobile",
    niveau: "Intermédiaire",
    duree: "22h",
    inscrits: 130,
    prix: 18,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
    description: "Crée des applications mobiles iOS et Android avec React Native."
  },
  {
    id: 8,
    titre: "MySQL — Bases de Données",
    categorie: "Base de données",
    niveau: "Débutant",
    duree: "10h",
    inscrits: 200,
    prix: 0,
    gratuit: true,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
    description: "Maîtrise les bases de données relationnelles avec MySQL."
  },
  {
    id: 9,
    titre: "Node.js — Backend Complet",
    categorie: "Développement Web",
    niveau: "Avancé",
    duree: "20h",
    inscrits: 160,
    prix: 15,
    gratuit: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    description: "Construis des APIs robustes et des serveurs performants avec Node.js."
  },
]

const categories = ["Tous", "Développement Web", "Électronique", "Python", "Cybersécurité", "Mobile", "Base de données"]
const niveaux = ["Tous", "Débutant", "Intermédiaire", "Avancé"]

function Formations() {
  const [categorie, setCategorie] = useState("Tous")
  const [niveau, setNiveau] = useState("Tous")
  const [filtre, setFiltre] = useState("Tous")
  const [recherche, setRecherche] = useState("")

  const filtrees = formations.filter(f => {
    const matchCat = categorie === "Tous" || f.categorie === categorie
    const matchNiv = niveau === "Tous" || f.niveau === niveau
    const matchFil = filtre === "Tous" || (filtre === "Gratuit" ? f.gratuit : !f.gratuit)
    const matchSearch = f.titre.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchNiv && matchFil && matchSearch
  })

  return (
    <main className="formations-page">

      {/* HEADER */}
      <section className="formations-header">
        <div className="formations-header-container">
          <span className="section-tag">Formations</span>
          <h1>Toutes nos formations</h1>
          <p>Trouve la formation qui correspond à tes objectifs et commence aujourd'hui</p>

          {/* Recherche */}
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={recherche}
              onChange={e => setRecherche(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FILTRES + CONTENU */}
      <section className="formations-body">
        <div className="formations-container">

          {/* Sidebar filtres */}
          <aside className="filtres-sidebar">
            <div className="filtre-group">
              <h4>Catégorie</h4>
              {categories.map(c => (
                <button
                  key={c}
                  className={`filtre-btn ${categorie === c ? 'active' : ''}`}
                  onClick={() => setCategorie(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="filtre-group">
              <h4>Niveau</h4>
              {niveaux.map(n => (
                <button
                  key={n}
                  className={`filtre-btn ${niveau === n ? 'active' : ''}`}
                  onClick={() => setNiveau(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="filtre-group">
              <h4>Prix</h4>
              {["Tous", "Gratuit", "Payant"].map(p => (
                <button
                  key={p}
                  className={`filtre-btn ${filtre === p ? 'active' : ''}`}
                  onClick={() => setFiltre(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </aside>

          {/* Grille formations */}
          <div className="formations-content">
            <div className="formations-top-bar">
              <p><strong>{filtrees.length}</strong> formation{filtrees.length > 1 ? 's' : ''} trouvée{filtrees.length > 1 ? 's' : ''}</p>
            </div>
            {filtrees.length === 0 ? (
              <div className="no-results">
                <span>😕</span>
                <p>Aucune formation trouvée</p>
              </div>
            ) : (
              <div className="formations-grid">
                {filtrees.map(f => (
                  <div className="formation-card" key={f.id}>
                    <div className="formation-img">
                      <img src={f.image} alt={f.titre} />
                      <span className={`badge ${f.gratuit ? 'free' : 'paid'}`}>
                        {f.gratuit ? 'Gratuit' : 'Payant'}
                      </span>
                      <span className="badge-niveau">{f.niveau}</span>
                    </div>
                    <div className="formation-body">
                      <span className="formation-cat">{f.categorie}</span>
                      <h3>{f.titre}</h3>
                      <p>{f.description}</p>
                      <div className="formation-meta">
                        <span>⏱ {f.duree}</span>
                        <span>👥 {f.inscrits} inscrits</span>
                      </div>
                      <div className="formation-footer">
                        <span className={`formation-prix ${f.gratuit ? 'free' : ''}`}>
                          {f.gratuit ? 'Gratuit' : `${f.prix} $US`}
                        </span>
                        <button className="btn-acceder">
                          {f.gratuit ? 'Commencer →' : "S'inscrire →"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}

export default Formations