# Mallisivut osana Tarmola Coden sivustoa

Mallisto sijaitsee tämän repositorion `mallisivut/`-kansiossa. Julkaisun jälkeen
malliston osoite on https://www.tarmola-code.fi/mallisivut/ ja yksittäisen mallin
esimerkiksi https://www.tarmola-code.fi/mallisivut/verso.html.

Mallisto sisältää kymmenen yritysesimerkkiä ja viisi yhdistysesimerkkiä.
Listauksen alussa ovat Virta (sähköasennus), Runko (rakennusala) ja Vaihde
(autokorjaamo). Ulkoasut voi sovittaa eri toimialoille. Palvelut, toiminta, tapahtumat,
jäsenmaksut ja yhteystiedot ovat kuvitteellista sisältöä.

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
- `/mallisivut/verso.html` ja muut 11 mallia avautuvat myös suoralla osoitteella.
- Pääsivuston mallistolinkit, mallien vertailulinkit ja paluu etusivulle toimivat.
- Malliston kuvat ja paikalliset fontit latautuvat myös puhelimella.

Alkuperäistä `C:\CodeGarage\Mallisivut`-kansiota ja sen erillistä Render-palvelua
ei ole muutettu. Jatkossa tähän sivustoon tulevat mallimuutokset tehdään tämän
repositorion `mallisivut/`-kansioon. Vanhan Render-palvelun voi myöhemmin ohjata
uusiin osoitteisiin, jos aiemmin jaettujen linkkien halutaan jatkavan toimintaansa.

Malliston nykyiset `noindex,nofollow`-asetukset on säilytetty, eikä kuvitteellisia
mallisivuja ole lisätty sivustokarttaan.
