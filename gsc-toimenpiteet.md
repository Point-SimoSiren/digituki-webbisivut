# Google Search Console -toimenpiteet (päivitetty 18.10.2026)

## 1) Lisää oikea property
- Avaa: https://search.google.com/search-console
- Lisää property: `https://www.tarmola-code.fi/` (URL prefix) tai koko verkkotunnuksen kattava Domain-property.
- Vahvista omistus (suositus: DNS, jos mahdollista).

## 2) Lähetä sitemap
- Search Consolessa: `Sitemaps`
- Syötä: `https://www.tarmola-code.fi/sitemap.xml`
- Varmista tila: `Success`.

## 3) Pyydä indeksointi tärkeimmille sivuille
- `URL inspection` -> `Request indexing`
- Lähetä ainakin:
  - `https://www.tarmola-code.fi/`
  - `https://www.tarmola-code.fi/verkkosivut.html`
  - `https://www.tarmola-code.fi/mallisivut/`
  - `https://www.tarmola-code.fi/esittely.html`
  - `https://www.tarmola-code.fi/yritysohjelmistot.html`
- Pyyntö vaatii kirjautuneen omistajan. Tiedostojen muuttaminen ei lähetä sitä automaattisesti.

## 4) Seuraa hakutermejä
- `Performance` -> hakusuodatin:
  - `verkkosivut`, `nettisivut`, `www sivut`, `www-sivut`
  - `edulliset verkkosivut`, `edulliset nettisivut`
  - `verkkosivut yritykselle`, `nettisivut yritykselle`
  - `verkkosivut yhdistykselle`, `verkkosivujen ylläpito`
  - `verkkosivut porvoo`, `nettisivut porvoo`
  - `it-tuki porvoo`
  - `atk-apu porvoo`
  - `atk-tuki porvoo`
  - `it-apu porvoo`
- Seuraa näyttöjä, klikkejä ja keskimääräistä sijaintia 2-8 viikon ajan.

## 5) Korjaa mahdolliset esteet
- `Pages`-raportissa tarkista:
  - `Crawled - currently not indexed`
  - `Duplicate, Google chose different canonical`
  - `Excluded by 'noindex'` (tätä ei pitäisi näkyä etusivulle)
- Jos etusivulla virheitä: korjaa ensin ja pyydä indeksointi uudelleen.
- `/verkkosivut.html` ja `/mallisivut/` ovat indeksoitavia ja mukana sivustokartassa.
- Yksittäiset kuvitteelliset mallisivut käyttävät `noindex,follow`-asetusta.
  Niiden puuttuminen hakemistosta on tarkoituksellista.
- Tarkista myös, ettei palvelimen `X-Robots-Tag` estä oikeita palvelusivuja.

## 6) Vahvista robots/sitemap-julkaisu
- Testaa selaimessa:
  - `https://www.tarmola-code.fi/robots.txt`
  - `https://www.tarmola-code.fi/sitemap.xml`
  - `https://www.tarmola-code.fi/verkkosivut.html`
  - `https://www.tarmola-code.fi/mallisivut/`
- Varmista, että nämä palautuvat HTTP 200 -tilalla.
- Varmista, että www- ja ilman www:tä käytettävät osoitteet ohjautuvat samaan
  pääosoitteeseen ja canonicalit vastaavat sitä.

## 7) Sisältö ja rakenteinen tieto

- Palvelusivu käsittelee edullisia ja huolettomia verkkosivuja, nettisivuja ja
  www-sivuja. Näkyvissä ovat oikeat alkaen-hinnat ja ylläpidon sovittava sisältö.
- Malligalleria esittelee 25 erilaista tyylisuuntaa. Esimerkkien toiminta ja
  yhteystiedot ovat kuvitteellisia.
- Etusivulta poistettiin vanha FAQ-merkintä, joka sisälsi näkymättömiä vastauksia
  ja vanhentuneen hinnan. Rakenteisen tiedon tulee vastata näkyvää sisältöä.
- Yritys kuvataan `LocalBusiness`-tyypillä ja verkkosivupalvelu `Service`-tyypillä.
  Vanha `ProfessionalService` on poistettu, ja `serviceType` on palvelun ominaisuus.
- Hakusanat ovat luontevissa otsikoissa, kuvauksissa, linkeissä ja teksteissä.
  Google ei käytä meta keywords -tagia. Hakusanojen toisto ei korvaa hyödyllistä sisältöä.

Lähteet: [Googlen SEO-aloitusopas](https://developers.google.com/search/docs/fundamentals/seo-starter-guide),
[hakutuloskuvaukset](https://developers.google.com/search/docs/appearance/snippet) ja
[kehittäjän SEO-ohje](https://developers.google.com/search/docs/fundamentals/get-started-developers).
Rakenteinen tieto: [ProfessionalService-tyypin poistuminen käytöstä](https://schema.org/ProfessionalService)
ja [serviceType-ominaisuus](https://schema.org/serviceType).

Julkaisu tai indeksointipyyntö ei takaa tiettyä hakusijoitusta tai indeksoinnin ajankohtaa.
