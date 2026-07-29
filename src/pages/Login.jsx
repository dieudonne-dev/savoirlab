import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

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

const IconGoogle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

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
            <h2>Reprends là où<br />tu t'étais arrêté</h2>
            <p>Accède à toutes tes formations, suis ta progression et continue d'apprendre à ton rythme.</p>
          </div>
          <div className="auth-stats">
            <div className="auth-stat">
              <strong>1200+</strong>
              <span>Étudiants actifs</span>
            </div>
            <div className="auth-stat">
              <strong>50+</strong>
              <span>Formations</span>
            </div>
            <div className="auth-stat">
              <strong>4.9⭐</strong>
              <span>Note moyenne</span>
            </div>
          </div>
          <div className="auth-testimonial">
            <img src="https://i.pravatar.cc/48?img=1" alt="Jean" />
            <div>
              <p>"SavoirLab a transformé ma carrière en seulement 3 mois !"</p>
              <strong>Jean K. — Développeur Web</strong>
            </div>
          </div>
        </div>
        <img
          className="auth-bg-img"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
          alt="bg"
        />
      </div>

      {/* DROITE — Formulaire */}
      <div className="auth-form-side">
        <div className="auth-form-container">

          <div className="auth-form-header">
            <h1>Bon retour ! 👋</h1>
            <p>Connecte-toi pour accéder à tes formations</p>
          </div>

          {/* Google */}
          <button className="btn-google">
            <IconGoogle />
            Continuer avec Google
          </button>

          <div className="auth-divider">
            <span>ou</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">

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
              <div className="label-row">
                <label>Mot de passe</label>
                <a href="#" className="forgot-link">Mot de passe oublié ?</a>
              </div>
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
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-auth-submit">
              Se connecter →
            </button>

          </form>

          <p className="auth-switch">
            Pas encore de compte ?{' '}
            <Link to="/register">Créer un compte gratuit</Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Login