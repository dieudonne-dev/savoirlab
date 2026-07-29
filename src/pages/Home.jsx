import './Home.css'

function Home() {
  return (
    <main className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">🚀 Plateforme N°1 de formation tech en Afrique</div>
            <h1 className="hero-title">
              Apprends les skills<br />
              qui changent ta <span className="accent">vie</span>
            </h1>
            <p className="hero-subtitle">
              Des formations en informatique et électronique conçues pour 
              t'amener de zéro à expert. Gratuites ou payantes, 
              apprends à ton rythme, où que tu sois.
            </p>
            <div className="hero-buttons">
              <a href="/formations" className="btn-primary">
                🎓 Commencer gratuitement
              </a>
              <a href="/produits" className="btn-secondary">
                📚 Voir les produits
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Formations</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">1200+</span>
                <span className="stat-label">Étudiants</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">4.9⭐</span>
                <span className="stat-label">Note moyenne</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">En ligne</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" 
              alt="Étudiants qui apprennent"
            />
          </div>
        </div>
      </section>

      {/* ===== LOGOS CONFIANCE ===== */}
        <section className="trust">
            <div className="section-container">
                <p className="trust-label">Ils nous font confiance</p>
                <div className="trust-track-wrapper">
                <div className="trust-track">
                    {[...Array(2)].map((_, i) => (
                    <div className="trust-items" key={i}>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#16a34a"}}>TA</div>
                        <span>TechAfrica</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#2563eb"}}>DL</div>
                        <span>DigiLearn</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#9333ea"}}>IH</div>
                        <span>InnoHub</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#ea580c"}}>SB</div>
                        <span>StartupBJ</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#0891b2"}}>TL</div>
                        <span>Tronelix Lab</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#dc2626"}}>ML</div>
                        <span>MakeLab</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#d97706"}}>CI</div>
                        <span>CIM</span>
                        </div>
                        <div className="trust-item">
                        <div className="trust-logo-box" style={{"--c":"#0f766e"}}>SL</div>
                        <span>ScienceLab</span>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>

      {/* ===== CATEGORIES ===== */}
        <section className="categories">
            <div className="section-container">
                <div className="section-header">
                <span className="section-tag">Domaines</span>
                <h2 className="section-title">Explore nos domaines<br />de formation</h2>
                <p className="section-subtitle">
                    Du développement web à l'électronique, trouve la formation 
                    qui correspond à tes objectifs
                </p>
                </div>
                <div className="categories-grid">
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&q=80" alt="Dev Web" />
                    </div>
                    <div className="category-info">
                    <h3>Développement Web</h3>
                    <p>HTML, CSS, JavaScript, React, Node.js et bien plus</p>
                    <span className="category-count">12 formations</span>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" alt="Électronique" />
                    </div>
                    <div className="category-info">
                    <h3>Électronique</h3>
                    <p>Arduino, circuits imprimés, composants électroniques</p>
                    <span className="category-count">8 formations</span>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80" alt="Python" />
                    </div>
                    <div className="category-info">
                    <h3>Python</h3>
                    <p>Programmation, automatisation, intelligence artificielle</p>
                    <span className="category-count">10 formations</span>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" alt="Mobile" />
                    </div>
                    <div className="category-info">
                    <h3>Développement Mobile</h3>
                    <p>React Native, Flutter, apps iOS et Android</p>
                    <span className="category-count">6 formations</span>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" alt="Cybersécurité" />
                    </div>
                    <div className="category-info">
                    <h3>Cybersécurité</h3>
                    <p>Ethical hacking, sécurité réseau, protection des données</p>
                    <span className="category-count">5 formations</span>
                    </div>
                </div>
                <div className="category-card">
                    <div className="category-img">
                    <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80" alt="Base de données" />
                    </div>
                    <div className="category-info">
                    <h3>Base de données</h3>
                    <p>MySQL, MongoDB, PostgreSQL, gestion des données</p>
                    <span className="category-count">7 formations</span>
                    </div>
                </div>
                </div>
                <div className="section-cta">
                <a href="/formations" className="btn-primary">Voir toutes les formations →</a>
                </div>
            </div>
        </section>

      {/* ===== PRODUITS DIGITAUX ===== */}
      <section className="products">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Produits digitaux</span>
            <h2 className="section-title">Nos e-books et<br />ressources premium</h2>
            <p className="section-subtitle">Des guides pratiques pour accélérer ton apprentissage</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80" alt="Ebook" />
                <span className="discount-badge">40% OFF</span>
              </div>
              <div className="product-body">
                <h3>Digitaliser son business et attirer plus de clients</h3>
                <div className="product-price">
                  <span className="old-price">15 $US</span>
                  <span className="new-price">9 $US</span>
                </div>
                <a href="/produits" className="btn-primary">Acheter maintenant</a>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=300&q=80" alt="Ebook Dev" />
                <span className="discount-badge">50% OFF</span>
              </div>
              <div className="product-body">
                <h3>Devenir Développeur Web et obtenir ses premiers clients</h3>
                <div className="product-price">
                  <span className="old-price">8 $US</span>
                  <span className="new-price">4 $US</span>
                </div>
                <a href="/produits" className="btn-primary">Acheter maintenant</a>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80" alt="Finance" />
                <span className="discount-badge">57% OFF</span>
              </div>
              <div className="product-body">
                <h3>Reprendre le contrôle de son argent en 90 jours</h3>
                <div className="product-price">
                  <span className="old-price">7 $US</span>
                  <span className="new-price">3 $US</span>
                </div>
                <a href="/produits" className="btn-primary">Acheter maintenant</a>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <a href="/produits" className="btn-outline">Voir tous les produits →</a>
          </div>
        </div>
      </section>

      {/* ===== POURQUOI NOUS ===== */}
      <section className="why">
        <div className="section-container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-tag">Pourquoi SavoirLab ?</span>
              <h2 className="section-title">La plateforme pensée<br />pour <span className="accent">ton succès</span></h2>
              <p className="section-subtitle" style={{textAlign:'left'}}>
                Nous croyons que tout le monde mérite d'accéder à une 
                éducation tech de qualité, peu importe sa situation.
              </p>
              <div className="why-features">
                <div className="why-feature">
                  <span className="why-icon">✅</span>
                  <div>
                    <h4>Formations pratiques</h4>
                    <p>Des projets réels pour apprendre en faisant</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">✅</span>
                  <div>
                    <h4>Accès à vie</h4>
                    <p>Achète une fois, accède pour toujours</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">✅</span>
                  <div>
                    <h4>Communauté active</h4>
                    <p>Un groupe d'entraide avec des milliers de membres</p>
                  </div>
                </div>
                <div className="why-feature">
                  <span className="why-icon">✅</span>
                  <div>
                    <h4>Certificat de completion</h4>
                    <p>Valorise tes compétences avec nos certificats</p>
                  </div>
                </div>
              </div>
              <a href="/a-propos" className="btn-primary" style={{marginTop:'32px', display:'inline-block'}}>
                En savoir plus →
              </a>
            </div>
            <div className="why-image">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80" 
                alt="Apprentissage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEMOIGNAGES ===== */}
      <section className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Témoignages</span>
            <h2 className="section-title">Ce que disent<br />nos étudiants</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"SavoirLab a complètement changé ma carrière. J'ai trouvé mon premier job de développeur 3 mois après avoir terminé la formation Web."</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/48?img=1" alt="Jean" />
                <div>
                  <strong>Jean K.</strong>
                  <span>Développeur Web Junior</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Les formations sont claires, bien structurées et très pratiques. Le meilleur investissement que j'ai fait pour ma carrière tech."</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/48?img=5" alt="Marie" />
                <div>
                  <strong>Marie N.</strong>
                  <span>Ingénieure en électronique</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"J'ai commencé avec zéro connaissance en programmation. Aujourd'hui je crée des applications Python. Merci SavoirLab !"</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/48?img=3" alt="Paul" />
                <div>
                  <strong>Paul M.</strong>
                  <span>Développeur Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="final-cta">
        <div className="section-container">
          <div className="cta-box">
            <h2>Prêt à transformer ta carrière ?</h2>
            <p>Rejoins plus de 1200 étudiants qui apprennent déjà sur SavoirLab</p>
            <div className="cta-buttons">
              <a href="/register" className="btn-white">Créer un compte gratuit</a>
              <a href="/formations" className="btn-outline-white">Voir les formations</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div>
                    <img src="/src/assets/savoir.png" alt="SavoirLab" className="logo-img" />
                    <div className="footer-logo"> Savoir<span className="accent">Lab</span></div>
              </div>
              <p>La plateforme de formation tech pensée pour ceux qui veulent vraiment progresser.</p>
            </div>

            <div className="footer-links">
              <h4>Formations</h4>
              <a href="/formations">Développement Web</a>
              <a href="/formations">Électronique</a>
              <a href="/formations">Python</a>
              <a href="/formations">Mobile</a>
            </div>
            <div className="footer-links">
              <h4>Produits</h4>
              <a href="/produits">E-books</a>
              <a href="/produits">Guides</a>
              <a href="/produits">Ressources</a>
            </div>
            <div className="footer-links">
              <h4>Entreprise</h4>
              <a href="/a-propos">À propos</a>
              <a href="/contact">Contact</a>
              <a href="/affiliation">Affiliation</a>
              <a>Forum discord</a>
              
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 SavoirLab. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

    </main>
  )
}

export default Home