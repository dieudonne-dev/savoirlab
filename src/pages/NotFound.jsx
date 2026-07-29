import { Link, useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="notfound-page">
      <div className="notfound-container">

        {/* Illustration */}
        <div className="notfound-visual">
          <div className="notfound-number">
            <span className="n4">4</span>
            <div className="n0">
              <div className="n0-inner">😕</div>
            </div>
            <span className="n4">4</span>
          </div>
        </div>

        {/* Contenu */}
        <div className="notfound-content">
          <span className="notfound-tag">Erreur 404</span>
          <h1>Page introuvable</h1>
          <p>
            Oups ! La page que tu cherches n'existe pas ou a été déplacée.
            Ne t'inquiète pas, on va t'aider à retrouver ton chemin.
          </p>

          {/* Actions */}
          <div className="notfound-actions">
            <button className="btn-back-home" onClick={() => navigate(-1)}>
              ← Retour en arrière
            </button>
            <Link to="/" className="btn-home">
              🏠 Accueil
            </Link>
          </div>

          {/* Liens utiles */}
          <div className="notfound-links">
            <p>Ou explore ces pages :</p>
            <div className="notfound-links-grid">
              <Link to="/formations" className="notfound-link">
                <span>📚</span>
                <div>
                  <strong>Formations</strong>
                  <small>Explore nos cours</small>
                </div>
              </Link>
              <Link to="/produits" className="notfound-link">
                <span>🛍️</span>
                <div>
                  <strong>Produits</strong>
                  <small>Nos e-books</small>
                </div>
              </Link>
              <Link to="/contact" className="notfound-link">
                <span>💬</span>
                <div>
                  <strong>Contact</strong>
                  <small>On peut t'aider</small>
                </div>
              </Link>
              <Link to="/dashboard" className="notfound-link">
                <span>🎓</span>
                <div>
                  <strong>Dashboard</strong>
                  <small>Ton espace</small>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default NotFound