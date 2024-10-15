<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lysande Elservice</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Lysande Elservice</h1>
        <nav>
            <ul>
                <li><a href="#tjanster">Tjänster</a></li>
                <li><a href="#om-oss">Om oss</a></li>
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
            <div class="tjanst">
                <h3>Installation</h3>
                <p>Professionell installation av elutrustning och belysning.</p>
            </div>
            <div class="tjanst">
                <h3>Reparation</h3>
                <p>Snabb och effektiv reparation av elektriska problem.</p>
            </div>
            <div class="tjanst">
                <h3>Underhåll</h3>
                <p>Regelbundet underhåll för att säkerställa din säkerhet.</p>
            </div>
        </section>

        <section id="om-oss">
            <h2>Om oss</h2>
            <p>Vi är ett dedikerat team av elektriker med många års erfarenhet.</p>
        </section>

        <section id="kontakt">
            <h2>Kontakta oss</h2>
            <form>
                <label for="namn">Namn:</label>
                <input type="text" id="namn" name="namn" required>
                
                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="meddelande">Meddelande:</label>
                <textarea id="meddelande" name="meddelande" required></textarea>
                
                <button type="submit">Skicka</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Lysande Elservice. Alla rättigheter förbehållna.</p>
    </footer>
</body>
</html>
