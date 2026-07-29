import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)
const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const IconEyeOff = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>
  </svg>
)
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const IconGoogle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', password: '', confirm: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Register:', formData)
  }

  const passwordStrength = () => {
    const p = formData.password
    if (p.length === 0) return 0
    if (p.length < 6) return 1
    if (p.length < 10) return 2
    return 3
  }

  const strength = passwordStrength()
  const strengthLabels = ['', 'Faible', 'Moyen', 'Fort']
  const strengthColors = ['', '#ef4444', '#f59e0b', '#16a34a']

  return (
    <div className="auth-page">

      {/* GAUCHE — Visuel */}
      <div className="auth-visual">
        <div className="auth-visual-content">
          <Link to="/" className="auth-logo">
            <img src="/src/assets/savoir.png" alt="SavoirLab" className="auth-logo-img" />
                Savoir<span>Lab</span>
          </Link>
          <div className="auth-visual-text">
            <h2>Commence ton<br />voyage tech<br />aujourd'hui</h2>
            <p>Rejoins une communauté de plus de 1200 apprenants passionnés et transforme ta carrière.</p>
          </div>
          <div className="register-benefits">
            <div className="benefit-item">
              <div className="benefit-check"><IconCheck /></div>
              <span>Accès immédiat aux formations gratuites</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check"><IconCheck /></div>
              <span>Certificats de completion reconnus</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check"><IconCheck /></div>
              <span>Communauté active d'entraide</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check"><IconCheck /></div>
              <span>Contenu mis à jour régulièrement</span>
            </div>
            <div className="benefit-item">
              <div className="benefit-check"><IconCheck /></div>
              <span>Support disponible 6j/7</span>
            </div>
          </div>
          <div className="auth-testimonial">
            <img src="https://i.pravatar.cc/48?img=5" alt="Marie" />
            <div>
              <p>"J'ai trouvé mon premier emploi tech grâce à SavoirLab !"</p>
              <strong>Marie N. — Ingénieure électronique</strong>
            </div>
          </div>
        </div>
        <img
          className="auth-bg-img"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
          alt="bg"
        />
      </div>

      {/* DROITE — Formulaire */}
      <div className="auth-form-side">
        <div className="auth-form-container">

          <div className="auth-form-header">
            <h1>Créer un compte </h1>
            <p>C'est gratuit et ça prend moins d'une minute</p>
          </div>

          <button className="btn-google">
            <IconGoogle />
            Continuer avec Google
          </button>

          <div className="auth-divider"><span>ou</span></div>

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-row-2">
              <div className="auth-field">
                <label>Prénom</label>
                <div className="input-wrapper">
                  <span className="input-icon"><IconUser /></span>
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Jean"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="auth-field">
                <label>Nom</label>
                <div className="input-wrapper">
                  <span className="input-icon"><IconUser /></span>
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
            </div>

            <div className="auth-field">
              <label>Adresse email</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconMail /></span>
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

            <div className="auth-field">
              <label>Mot de passe</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconLock /></span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
              {formData.password.length > 0 && (
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1,2,3].map(i => (
                      <div
                        key={i}
                        className="strength-bar"
                        style={{ backgroundColor: i <= strength ? strengthColors[strength] : '#e2e8f0' }}
                      />
                    ))}
                  </div>
                  <span style={{ color: strengthColors[strength] }}>
                    {strengthLabels[strength]}
                  </span>
                </div>
              )}
            </div>

            <div className="auth-field">
              <label>Confirmer le mot de passe</label>
              <div className="input-wrapper">
                <span className="input-icon"><IconLock /></span>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirm"
                  placeholder="••••••••"
                  value={formData.confirm}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
              {formData.confirm.length > 0 && (
                <p className={`match-msg ${formData.password === formData.confirm ? 'match' : 'no-match'}`}>
                  {formData.password === formData.confirm ? '✓ Les mots de passe correspondent' : '✗ Les mots de passe ne correspondent pas'}
                </p>
              )}
            </div>

            <div className="terms-check">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a>
              </label>
            </div>

            <button type="submit" className="btn-auth-submit">
              Créer mon compte gratuitement →
            </button>

          </form>

          <p className="auth-switch">
            Déjà un compte ?{' '}
            <Link to="/login">Se connecter</Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Register