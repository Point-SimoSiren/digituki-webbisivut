# Google Search Console -toimenpiteet (15.2.2026)

## 1) Lisää oikea property
- Avaa: https://search.google.com/search-console
- Lisää property: `https://tarmola-code.fi/` (URL prefix)
- Vahvista omistus (suositus: DNS, jos mahdollista).

## 2) Lähetä sitemap
- Search Consolessa: `Sitemaps`
- Syötä: `https://tarmola-code.fi/sitemap.xml`
- Varmista tila: `Success`.

## 3) Pyydä indeksointi tärkeimmille sivuille
- `URL inspection` -> `Request indexing`
- Lähetä ainakin:
  - `https://tarmola-code.fi/`
  - `https://tarmola-code.fi/esittely.html`
  - `https://tarmola-code.fi/yritysohjelmistot.html`

## 4) Seuraa hakutermejä
- `Performance` -> hakusuodatin:
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

## 6) Vahvista robots/sitemap-julkaisu
- Testaa selaimessa:
  - `https://tarmola-code.fi/robots.txt`
  - `https://tarmola-code.fi/sitemap.xml`
- Varmista, että nämä palautuvat HTTP 200 -tilalla.
