# Mallisivut osana Tarmola Coden sivustoa

Mallisto sijaitsee tämän repositorion `mallisivut/`-kansiossa. Julkaisun jälkeen
malliston osoite on https://www.tarmola-code.fi/mallisivut/ ja yksittäisen mallin
esimerkiksi https://www.tarmola-code.fi/mallisivut/verso.html.

Mallisto sisältää 25 mallia: 18 yritysesimerkkiä ja seitsemän yhdistysesimerkkiä.
Listauksen alussa ovat Virta (sähköasennus), Runko (rakennusala) ja Vaihde
(autokorjaamo). Ulkoasut voi sovittaa eri toimialoille. Palvelut, toiminta, tapahtumat,
jäsenmaksut ja yhteystiedot ovat kuvitteellista sisältöä. Uusia suuntia ovat
Paahto, Silmu, Galleria, Kipinä, Tempo, Sointu, Polku, Kide, Tori ja Arkki.
Mallistoa voi suodattaa tunnelman mukaan ja järjestää uusimmat ensin.
Ilman JavaScriptiä kaikki 25 mallia näkyvät ja avautuvat tavallisista linkeistä.

Verkkosivupalvelun oma sivu on `verkkosivut.html`. Se esittelee toteutuksen
(alkaen 170 €), hostingin ja ylläpidon (alkaen 19 €/kk), työn vaiheet sekä
usein kysytyt kysymykset. Pääsivuston navigointi linkittää palvelusivulle.

Pääsivuston navigointi ja etusivun mallistolinkki käyttävät suhteellista polkua
`mallisivut/index.html`. Malliston Tarmola Code -paluulinkit johtavat polkuun
`../index.html`. Näin linkit toimivat myös avattaessa HTML-tiedostot suoraan
levyltä ilman paikallista palvelinta. Mallien väliset linkit,
kuvat, tyylit, JavaScript ja fontit toimivat mallisivut-kansion sisällä.

## Julkaiseminen Renderiin

Julkaise muutokset nykyisen tarmola-code.fi-sivuston käyttämään repositorioon ja
haaraan. Renderin tulee julkaista myös `mallisivut/` kaikkine alikansioineen osana
samaa staattista sivustoa. Jos nykyinen palvelu julkaisee repositorion juuren
sellaisenaan, erillistä build-komentoa tai uutta palvelua ei tarvita. Jos käytössä
on tiedostoja erikseen kopioiva build-komento, lisää myös `mallisivut/` siihen.

Tarkista julkaisun jälkeen:

- `/mallisivut/` avaa malliston.
- `/mallisivut/verso.html` ja muut 24 mallia avautuvat myös suoralla osoitteella.
- `/verkkosivut.html` avautuu ja sen yhteydenottolinkki vie etusivun lomakkeelle.
- Malliston tyylisuodatus, järjestysvalinta ja kaikkien 25 mallin vertailuketju toimivat.
- Pääsivuston mallistolinkit, mallien vertailulinkit ja paluu etusivulle toimivat.
- Malliston kuvat ja paikalliset fontit latautuvat myös puhelimella.

Alkuperäistä `C:\CodeGarage\Mallisivut`-kansiota ja sen erillistä Render-palvelua
ei ole muutettu. Jatkossa tähän sivustoon tulevat mallimuutokset tehdään tämän
repositorion `mallisivut/`-kansioon. Vanhan Render-palvelun voi myöhemmin ohjata
uusiin osoitteisiin, jos aiemmin jaettujen linkkien halutaan jatkavan toimintaansa.

Malliston koontisivu `/mallisivut/` ja verkkosivupalvelun sivu ovat indeksoitavia.
Molemmilla on oma otsikko, kuvaus, canonical-osoite, jakotiedot ja rakenteinen
tieto. Ne on lisätty sivustokarttaan. Yksittäiset kuvitteelliset mallisivut
käyttävät `noindex,follow`-asetusta, eikä niitä ole lisätty sivustokarttaan.
Näin oikea verkkosivupalvelu ja mallien vertailu voivat löytyä hakukoneista,
mutta kuvitteelliset yritykset eivät esiinny oikeina palveluntarjoajina.
