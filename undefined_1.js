<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lysande Elservice</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Lysande Elservice</h1>
        <nav>
            <ul>
                <li><a href="#tjanster">Tjänster</a></li>
                <li><a href="#om-oss">Om oss</a></li>
                <li><a href="#team">Vårt Team</a></li>
                <li><a href="#testimonials">Referenser</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Din pålitliga elservice</h2>
            <p>Vi erbjuder högkvalitativa elinstallationer och reparationer.</p>
            <a href="#kontakt" class="cta-button">Kontakta oss</a>
        </section>

        <section id="tjanster">
            <h2>Tjänster</h2>
            <div class="tjanster-grid">
                <div class="tjanst">
                    <i class="fas fa-plug"></i>
                    <h3>Installation</h3>
                    <p>Professionell installation av elutrustning och belysning.</p>
                </div>
                <div class="tjanst">
                    <i class="fas fa-wrench"></i>
                    <h3>Reparation</h3>
                    <p>Snabb och effektiv reparation av elektriska problem.</p>
                </div>
                <div class="tjanst">
                    <i class="fas fa-tools"></i>
                    <h3>Underhåll</h3>
                    <p>Regelbundet underhåll för att säkerställa din säkerhet.</p>
                </div>
            </div>
        </section>

        <section id="om-oss">
            <h2>Om oss</h2>
            <p>Vi är ett dedikerat team av elektriker med många års erfarenhet. Vår mission är att erbjuda högkvalitativ service till konkurrenskraftiga priser.</p>
        </section>

        <section id="team">
            <h2>Vårt Team</h2>
            <div class="team-grid">
                <div class="team-member">
                    <h3>Ola Andersson</h3>
                    <p>Certifierad elektriker med över 10 års erfarenhet.</p>
                </div>
                <div class="team-member">
                    <h3>Lisa Karlsson</h3>
                    <p>Expert på belysningsdesign och installation.</p>
                </div>
                <div class="team-member">
                    <h3>Johan Eriksson</h3>
                    <p>Specialist på reparationer och underhåll.</p>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <h2>Referenser</h2>
            <div class="testimonial">
                <p>"Lysande Elservice gjorde en fantastisk jobb med vår belysning. Rekommenderas varmt!"</p>
                <cite>- Anna Svensson</cite>
            </div>
            <div class="testimonial">
                <p>"Snabb och effektiv service. Jag är mycket nöjd!"</p>
                <cite>- Erik Johansson</cite>
            </div>
        </section>

        <section id="faq">
            <h2>FAQ</h2>
            <div class="faq-item">
                <h3 class="faq-question">Vad kostar era tjänster?</h3>
                <p class="faq-answer">Priser varierar beroende på tjänst. Kontakta oss för en offert.</p>
            </div>
            <div class="faq-item">
                <h3 class="faq-question">Är ni licensierade?</h3>
                <p class="faq-answer">Ja, alla våra elektriker är certifierade och licensierade.</p>
            </div>
        </section>

        <section id="kontakt">
            <h2>Kontakta oss</h2>
            <form id="contact-form">
                <label for="namn">Namn:</label>
                <input type="text" id="namn" name="namn" required>
                
                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="meddelande">Meddelande:</label>
                <textarea id="meddelande" name="meddelande" required></textarea>
                
                <button type="submit">Skicka</button>
                <p id="response-message" class="hidden"></p>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Lysande Elservice. Alla rättigheter förbehållna.</p>
    </footer>
</body>
</html>
