import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const produit = {
  titre: "Devenir Développeur Web et Obtenir ses Premiers Clients",
  type: "Formation",
  image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=300&q=80",
  ancienPrix: 15,
  prix: 9,
  reduction: 40,
}

function Checkout() {
  const [step, setStep] = useState(1)
  const [methode, setMethode] = useState('card')
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '',
    card: '', expiry: '', cvv: '',
    phone: ''
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="checkout-success">
        <div className="success-card">
          <div className="success-circle">
            <IconCheck />
          </div>
          <h1>Paiement réussi ! 🎉</h1>
          <p>Merci <strong>{formData.prenom}</strong> ! Tu as maintenant accès à ta formation.</p>
          <div className="success-produit">
            <img src={produit.image} alt={produit.titre} />
            <div>
              <strong>{produit.titre}</strong>
              <span>{produit.prix} $US payés</span>
            </div>
          </div>
          <div className="success-actions">
            <Link to="/dashboard" className="btn-dashboard">
              Accéder à ma formation →
            </Link>
            <Link to="/formations" className="btn-retour">
              Voir d'autres formations
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">

      {/* HEADER */}
      <header className="checkout-header">
        <Link to="/" className="checkout-logo">
          <img src="/src/assets/savoir.png" alt="SavoirLab" className="auth-logo-img" />
            Savoir<span>Lab</span>
        </Link>
        <div className="checkout-secure">
          <IconShield />
          <span>Paiement 100% sécurisé</span>
        </div>
      </header>

      <div className="checkout-container">

        {/* GAUCHE — Formulaire */}
        <div className="checkout-form-side">

          {/* Steps */}
          <div className="checkout-steps">
            <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>
              <div className="step-num">{step > 1 ? <IconCheck /> : '1'}</div>
              <span>Informations</span>
            </div>
            <div className="step-line" />
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-num">2</div>
              <span>Paiement</span>
            </div>
          </div>

          {/* STEP 1 — Infos */}
          {step === 1 && (
            <div className="checkout-step-content">
              <h2>Tes informations</h2>
              <p>Entre tes coordonnées pour finaliser la commande</p>
              <div className="checkout-fields">
                <div className="field-row">
                  <div className="checkout-field">
                    <label>Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Jean"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Nom</label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Dupont"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="checkout-field">
                  <label>Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ton@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button
                className="btn-next"
                onClick={() => setStep(2)}
                disabled={!formData.prenom || !formData.nom || !formData.email}
              >
                Continuer vers le paiement →
              </button>
            </div>
          )}

          {/* STEP 2 — Paiement */}
          {step === 2 && (
            <div className="checkout-step-content">
              <h2>Mode de paiement</h2>
              <p>Choisis ton mode de paiement préféré</p>

              {/* Méthodes */}
              <div className="methodes-grid">
                <button
                  className={'methode-btn ' + (methode === 'card' ? 'active' : '')}
                  onClick={() => setMethode('card')}
                >
                  <IconCard />
                  <span>Carte bancaire</span>
                </button>
                <button
                  className={'methode-btn ' + (methode === 'mobile' ? 'active' : '')}
                  onClick={() => setMethode('mobile')}
                >
                  <IconPhone />
                  <span>Mobile Money</span>
                </button>
              </div> 

              <form onSubmit={handleSubmit} className="checkout-fields">

                {methode === 'card' && (
                  <>
                    <div className="checkout-field">
                      <label>Numéro de carte</label>
                      <input
                        type="text"
                        name="card"
                        placeholder="1234 5678 9012 3456"
                        value={formData.card}
                        onChange={handleChange}
                        maxLength={19}
                        required
                      />
                    </div>
                    <div className="field-row">
                      <div className="checkout-field">
                        <label>Date d'expiration</label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/AA"
                          value={formData.expiry}
                          onChange={handleChange}
                          maxLength={5}
                          required
                        />
                      </div>
                      <div className="checkout-field">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {methode === 'mobile' && (
                  <div className="checkout-field">
                    <label>Numéro Mobile Money</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+257 XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <span className="field-hint">Lumicash, Ecocash ou autre</span>
                  </div>
                )}

                <div className="checkout-guarantee">
                  <IconShield />
                  <span>Paiement crypté et sécurisé. Tes données sont protégées.</span>
                </div>

                <div className="step2-actions">
                  <button type="button" className="btn-back" onClick={() => setStep(1)}>
                    ← Retour
                  </button>
                  <button type="submit" className="btn-pay">
                    <IconLock />
                    Payer {produit.prix} $US
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>

        {/* DROITE — Résumé */}
        <div className="checkout-summary">
          <h3>Résumé de la commande</h3>

          <div className="summary-produit">
            <img src={produit.image} alt={produit.titre} />
            <div>
              <strong>{produit.titre}</strong>
              <span>{produit.type}</span>
            </div>
          </div>

          <div className="summary-prix">
            <div className="summary-ligne">
              <span>Prix original</span>
              <span className="barre">{produit.ancienPrix} $US</span>
            </div>
            <div className="summary-ligne reduction">
              <span>Réduction ({produit.reduction}%)</span>
              <span>-{produit.ancienPrix - produit.prix} $US</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{produit.prix} $US</span>
            </div>
          </div>

          <div className="summary-garanties">
            <h4>Inclus dans ta commande :</h4>
            <div className="garantie-item">
              <IconCheck />
              <span>Accès à vie à la formation</span>
            </div>
            <div className="garantie-item">
              <IconCheck />
              <span>Certificat de completion</span>
            </div>
            <div className="garantie-item">
              <IconCheck />
              <span>Support communauté</span>
            </div>
            <div className="garantie-item">
              <IconCheck />
              <span>Mises à jour gratuites</span>
            </div>
          </div>

          <div className="summary-satisfaction">
            <span>🛡️</span>
            <div>
              <strong>Satisfait ou remboursé</strong>
              <p>30 jours pour changer d'avis, sans questions.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout