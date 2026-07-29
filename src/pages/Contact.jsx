import { useState } from 'react'
import './Contact.css'

const IconEmail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const IconLocation = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)
const IconSend = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
)
const IconUser = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
)
const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconTag = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l8.58-8.58a1 1 0 0 0 0-1.42Z"/>
  </svg>
)
const IconMsg = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const IconCheck = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)
const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#e1306c" stroke="none"/>
  </svg>
)
const IconYoutube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff0000">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

function Contact() {
  const [formData, setFormData] = useState({
    nom: '', email: '', sujet: '', message: ''
  })
  const [envoye, setEnvoye] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnvoye(true)
  }

  return (
    <main className="contact-page">

      <section className="contact-header">
        <div className="contact-header-container">
          <span className="section-tag">Contact</span>
          <h1>On est là pour<br />t'aider 👋</h1>
          <p>Une question, une suggestion ou un partenariat ? On répond sous 24h.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-container">

          <div className="contact-infos">
            <h2>Parlons de ton projet</h2>
            <p>Étudiant, entreprise ou partenaire, nous sommes toujours disponibles.</p>
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><IconEmail /></div>
                <div><h4>Email</h4><p>contact@savoirlab.com</p></div>
              </div>
              <div className="info-card">
                <div className="info-icon"><IconPhone /></div>
                <div><h4>WhatsApp</h4><p>+257 XX XXX XXX</p></div>
              </div>
              <div className="info-card">
                <div className="info-icon"><IconLocation /></div>
                <div><h4>Localisation</h4><p>Bujumbura, Burundi</p></div>
              </div>
              <div className="info-card">
                <div className="info-icon"><IconClock /></div>
                <div><h4>Disponibilité</h4><p>Lun — Sam, 8h à 18h</p></div>
              </div>
            </div>

            <div className="social-links">
              <h4>Nous suivre</h4>
              <div className="socials">
                <a href="#" className="social-btn facebook"><IconFacebook /><span>Facebook</span></a>
                <a href="#" className="social-btn instagram"><IconInstagram /><span>Instagram</span></a>
                <a href="#" className="social-btn youtube"><IconYoutube /><span>YouTube</span></a>
                <a href="#" className="social-btn linkedin"><IconLinkedin /><span>LinkedIn</span></a>
              </div>
            </div>

            <div className="contact-image">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="Contact" />
            </div>
          </div>

          <div className="contact-form-wrapper">
            {envoye ? (
              <div className="success-message">
                <div className="success-icon-wrap"><IconCheck /></div>
                <h3>Message envoyé !</h3>
                <p>Merci <strong>{formData.nom}</strong> ! On te répondra dans les 24h.</p>
                <button className="btn-submit" onClick={() => { setEnvoye(false); setFormData({ nom: '', email: '', sujet: '', message: '' }) }}>
                  <IconSend /> Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <div className="form-header-icon"><IconEmail /></div>
                  <div>
                    <h3>Envoie-nous un message</h3>
                    <p>Remplis le formulaire, on répond rapidement</p>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label><IconUser /> Ton nom</label>
                    <input type="text" name="nom" placeholder="Ex: Jean Dupont" value={formData.nom} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label><IconMail /> Ton email</label>
                    <input type="email" name="email" placeholder="Ex: jean@gmail.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label><IconTag /> Sujet</label>
                  <select name="sujet" value={formData.sujet} onChange={handleChange} required>
                    <option value="">Choisir un sujet...</option>
                    <option value="formation">Question sur une formation</option>
                    <option value="produit">Question sur un produit</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="technique">Problème technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label><IconMsg /> Ton message</label>
                  <textarea name="message" placeholder="Décris ta question ou ton projet..." value={formData.message} onChange={handleChange} required rows={6} />
                </div>
                <button type="submit" className="btn-submit">
                  <IconSend /> Envoyer le message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <section className="faq">
        <div className="faq-container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-subtitle">Les réponses aux questions les plus posées</p>
          </div>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>Les formations sont-elles en français ?</h4>
              <p>Oui, toutes nos formations sont entièrement en français pour être accessibles au plus grand nombre.</p>
            </div>
            <div className="faq-card">
              <h4>Comment accéder aux formations gratuites ?</h4>
              <p>Crée un compte gratuit sur SavoirLab et accède immédiatement à toutes nos formations gratuites.</p>
            </div>
            <div className="faq-card">
              <h4>Les formations payantes ont-elles un accès à vie ?</h4>
              <p>Oui ! Une fois achetée, tu as accès à la formation pour toujours, même si le contenu est mis à jour.</p>
            </div>
            <div className="faq-card">
              <h4>Y a-t-il des certificats à la fin ?</h4>
              <p>Oui, chaque formation complétée te donne droit à un certificat que tu peux partager sur LinkedIn.</p>
            </div>
            <div className="faq-card">
              <h4>Comment payer les formations ?</h4>
              <p>Nous acceptons Mobile Money, carte bancaire et d'autres moyens de paiement locaux adaptés à l'Afrique.</p>
            </div>
            <div className="faq-card">
              <h4>Puis-je apprendre sur mobile ?</h4>
              <p>Absolument ! Notre plateforme est entièrement responsive et optimisée pour mobile.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact