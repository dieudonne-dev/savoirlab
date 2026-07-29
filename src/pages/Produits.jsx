import { useState } from 'react'
import './Produits.css'

const produits = [
  {
    id: 1,
    titre: "7 Outils Indispensables pour le Marketing Digital",
    categorie: "Marketing",
    ancienPrix: 5,
    prix: 1,
    reduction: 80,
    gratuit: false,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    description: "Découvre les 7 outils essentiels pour booster ta présence digitale et attirer plus de clients.",
    pages: 45,
    format: "PDF",
    avis: 4.9,
    nbAvis: 28
  },
  {
    id: 2,
    titre: "Comment Digitaliser un Business et Attirer Plus de Clients",
    categorie: "Business",
    ancienPrix: 15,
    prix: 9,
    reduction: 40,
    gratuit: false,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80",
    description: "Le guide simple pour transformer ton business avec internet et multiplier tes clients.",
    pages: 87,
    format: "PDF",
    avis: 4.8,
    nbAvis: 42
  },
  {
    id: 3,
    titre: "Devenir Développeur Web et Obtenir ses Premiers Clients",
    categorie: "Développement",
    ancienPrix: 8,
    prix: 4,
    reduction: 50,
    gratuit: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80",
    description: "De zéro au premier client — le guide complet pour lancer ta carrière de développeur web.",
    pages: 112,
    format: "PDF",
    avis: 4.7,
    nbAvis: 35
  },
  {
    id: 4,
    titre: "Reprendre le Contrôle de son Argent en 90 Jours",
    categorie: "Finance",
    ancienPrix: 7,
    prix: 3,
    reduction: 57,
    gratuit: false,
    bestseller: true,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
    description: "La méthode simple pour gérer ton budget, épargner et reprendre le contrôle de tes finances.",
    pages: 68,
    format: "PDF",
    avis: 4.9,
    nbAvis: 19
  },
  {
    id: 5,
    titre: "Guide Complet de l'Électronique pour Débutants",
    categorie: "Électronique",
    ancienPrix: 10,
    prix: 6,
    reduction: 40,
    gratuit: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    description: "Tout ce qu'il faut savoir pour débuter en électronique — composants, circuits et projets pratiques.",
    pages: 95,
    format: "PDF",
    avis: 4.6,
    nbAvis: 14
  },
  {
    id: 6,
    titre: "Python — 50 Scripts Pratiques pour Automatiser ta Vie",
    categorie: "Développement",
    ancienPrix: 12,
    prix: 7,
    reduction: 42,
    gratuit: false,
    bestseller: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    description: "50 scripts Python prêts à l'emploi pour automatiser tes tâches et gagner du temps chaque jour.",
    pages: 130,
    format: "PDF",
    avis: 4.8,
    nbAvis: 22
  },
]

const categories = ["Tous", "Marketing", "Business", "Développement", "Finance", "Électronique"]

function Produits() {
  const [categorie, setCategorie] = useState("Tous")
  const [recherche, setRecherche] = useState("")
  const [tri, setTri] = useState("popular")

  const filtres = produits
    .filter(p => {
      const matchCat = categorie === "Tous" || p.categorie === categorie
      const matchSearch = p.titre.toLowerCase().includes(recherche.toLowerCase())
      return matchCat && matchSearch
    })
    .sort((a, b) => {
      if (tri === "prix-asc") return a.prix - b.prix
      if (tri === "prix-desc") return b.prix - a.prix
      if (tri === "reduction") return b.reduction - a.reduction
      return b.nbAvis - a.nbAvis
    })

  return (
    <main className="produits-page">

      {/* HEADER */}
      <section className="produits-header">
        <div className="produits-header-container">
          <span className="section-tag">Produits digitaux</span>
          <h1>Nos e-books et ressources<br />premium</h1>
          <p>Des guides pratiques pour accélérer ton apprentissage et développer tes compétences</p>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={recherche}
              onChange={e => setRecherche(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FILTRES CATEGORIES */}
      <section className="produits-filtres">
        <div className="produits-filtres-container">
          <div className="categories-pills">
            {categories.map(c => (
              <button
                key={c}
                className={`pill ${categorie === c ? 'active' : ''}`}
                onClick={() => setCategorie(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="tri-select">
            <select value={tri} onChange={e => setTri(e.target.value)}>
              <option value="popular">Plus populaires</option>
              <option value="prix-asc">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
              <option value="reduction">Meilleures réductions</option>
            </select>
          </div>
        </div>
      </section>

      {/* GRILLE PRODUITS */}
      <section className="produits-body">
        <div className="produits-container">
          <p className="produits-count">
            <strong>{filtres.length}</strong> produit{filtres.length > 1 ? 's' : ''} trouvé{filtres.length > 1 ? 's' : ''}
          </p>
          {filtres.length === 0 ? (
            <div className="no-results">
              <span>😕</span>
              <p>Aucun produit trouvé</p>
            </div>
          ) : (
            <div className="produits-grid">
              {filtres.map(p => (
                <div className="produit-card" key={p.id}>
                  {p.bestseller && <div className="bestseller-tag">🔥 Bestseller</div>}
                  <div className="produit-image">
                    <img src={p.image} alt={p.titre} />
                    <span className="reduction-badge">-{p.reduction}%</span>
                  </div>
                  <div className="produit-body">
                    <span className="produit-cat">{p.categorie}</span>
                    <h3>{p.titre}</h3>
                    <p>{p.description}</p>
                    <div className="produit-meta">
                      <span>📄 {p.pages} pages</span>
                      <span>📁 {p.format}</span>
                      <span>⭐ {p.avis} ({p.nbAvis} avis)</span>
                    </div>
                    <div className="produit-footer">
                      <div className="produit-prix">
                        <span className="ancien-prix">{p.ancienPrix} $US</span>
                        <span className="nouveau-prix">{p.prix} $US</span>
                      </div>
                      <button className="btn-acheter">Acheter →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA BAS */}
      <section className="produits-cta">
        <div className="produits-container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Tu veux accéder à tout ?</h2>
              <p>Inscris-toi et accède à nos formations + produits digitaux en un seul endroit</p>
            </div>
            <a href="/register" className="btn-white">Créer un compte gratuit →</a>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Produits