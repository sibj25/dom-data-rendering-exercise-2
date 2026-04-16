# 📱 JavaScript DOM Data Rendering #2  
## Datastruktur og visning i DOM  
### Mobile Phones Showcase

## Opgavebeskrivelse

Du skal bygge en lille side, hvor data om mobiltelefoner fra JavaScript bliver vist i DOM’en.

Du arbejder både med:

- JavaScript datastruktur (**array med objekter**)
- DOM-manipulation
- funktioner
- parametre
- forEach()
- querySelector()
- innerHTML
- template literals
- CSS Flexbox

Formålet med opgaven er at træne, om du kan opbygge en JavaScript-datastruktur og bruge den til at vise indhold dynamisk på en webside.

Du skal især arbejde med at koble **data og visning i DOM’en** sammen.

---

## Forudsætninger

Du må redigere i:

- `js/mobile-phones.js`
- `css/style.css`

---

## Trin-for-trin

1. Download projektkoden (ZIP-fil) fra GitHub, og udpak den på din computer.

2. Opret et nyt repository på GitHub.com med et passende navn, fx:

`dom-data-rendering-mobilephones`

3. Kopiér linket til dit GitHub-repository.

4. Åbn GitHub Desktop og vælg **Clone repository**.

5. Vælg fanen **URL**, indsæt linket, og vælg en passende placering under **Local Path**.

6. Kopiér indholdet fra den udpakkede projektmappe over i den klonede mappe.

7. Åbn projektmappen i Visual Studio Code.

8. Løs nu opgaverne herunder.

---

## Projektmappe

Du får udleveret en projektmappe, som indeholder:

- en `index.html` fil
- en `css`-mappe
- en `js`-mappe
- en `img`-mappe med billeder
- en `mobilephones.txt` fil med data om mobiltelefoner

Du skal **ikke** ændre HTML-strukturen i `index.html`.

---

### Opgave 1 – Link til CSS og JavaScript

I `index.html` skal du indsætte:

- et `<link>`-tag til `css/style.css`
- et `<script>`-tag til `js/mobile-phones.js`

CSS skal linkes i `<head>`, og JavaScript skal linkes lige før `</body>`.

---

### Opgave 2 – Tilføj Strict Mode

Åbn `js/mobile-phones.js`.

Tilføj denne linje som det allerførste i filen:

```js
"use strict";
```
---

### Opgave 3 – Opret datastrukturen mobilePhones med de første 5 telefoner

Åbn filen **mobilephones.txt**.

I `js/mobile-phones.js` skal du nu:

- Opret en konstant variabel med navnet mobilePhones
- Få variablen til at pege på et `array` med objekter
- Brug oplysningerne fra **mobilephones.txt**
- Vælg passende datatyper til de forskellige porperties
- Opret kun de første 5 telefoner i arrayet

Hvert objekt skal have følgende properties:

- id
- brandname
- brandmodel
- color
- price
- memory
- img

Du skal altså læse de første 5 telefoner i tekstfilen og skrive dem ind i din JavaScript-datastruktur.

---

### Opgave 4 – Opret variablen phonesContainer

- Opret en konstant variabel med navnet phonesContainer
- Variablen skal pege på elementet med id phones-container

Hint: Brug `document.querySelector()`.

---

### Opgave 5 – Opret funktionen `displayPhones(phoneList)`

- Opret en funktion med navnet `displayPhones`
- Funktionen skal have en parameter med navnet `phoneList`
- Funktionen skal bruges til at vise telefonerne på siden

---

### Opgave 6 – Tøm containeren før telefonerne vises

Inde i funktionen `displayPhones(phoneList)` skal du sætte variablen **phonesContainer** til en tom tekststreng ved at bruge `innerHTML`.

---

### Opgave 7 – Brug `forEach()` til at gennemløbe telefonerne

Inde i funktionen `displayPhones(phoneList)` skal du bruge `forEach()` til at gennemløbe alle telefoner i **phoneList**. **phoneList** er den parameter, som modtager din JS-datastruktur med telefoner.

---

### Opgave 8 – Brug innerHTML og template literals

Gennemgå hvert objekt i phoneList arrayet med `forEach()`.

Du skal bruge:

- `innerHTML`
- template literals med backticks
- `${}` til at indsætte data

For hver telefon skal du oprette HTML med et template literal og tilføje det til phonesContainer variablen med:

```JavaScript
phonesContainer.innerHTML += `...`;
``` 

HTML-strukturen er givet på forhånd og skal bygges op sådan her:

```HTML
<article>
    <h2>placeholder-brandname</h2>
    <h4>placeholder-brandmodel</h4>
    <ul>
        <li>placeholder-color</li>
        <li>placeholder-memory</li>
        <li>placeholder-price</li>
    </ul>
    <figure>
        
    </figure>
</article>
````

Din opgave er at erstatte pladsholderne i HTML-strukturen med data fra JavaScript-datastrukturen ved hjælp af `${}`.

Det betyder for eksempel, at `brandname` skal erstattes med `${phone.brandname}`, `brandmodel` med `${phone.brandmodel}` osv.

Du skal altså ikke selv finde på HTML-strukturen. Den er allerede bestemt.
Det, du skal gøre, er at indsætte de rigtige værdier fra hvert `phone`-objekt de rigtige steder i strukturen

---

### Opgave 9 – Tilføj billede

Udvid den eksisterende HTML-struktur inde i `displayPhones()`.

Hver telefon skal nu vises med:

- et billede med `img`
- en `alt`-attribut på billedet
- en `figcaption`

HTML-strukturen er givet på forhånd og skal bygges op sådan her:

```HTML
<figure>
    <img src="placeholder-img" alt="placeholder-brandmodel">
    <figcaption>placeholder-brandmodel</figcaption>
</figure>
```

Din opgave er at erstatte pladsholderne i HTML-strukturen med data fra JavaScript-datastrukturen ved hjælp af `${}`.

Du skal altså ikke selv finde på HTML-strukturen. Den er allerede bestemt.
Det, du skal gøre, er at indsætte de rigtige værdier fra hvert `phone`-objekt de rigtige steder i strukturen

---

### Opgave 10 – Tilføj de næste 6 telefoner fra tekstfilen

Åbn filen **mobilephones.txt** igen.

Du har allerede oprettet de første 5 telefoner i din JavaScript-datastruktur.

Nu skal du udvide din eksisterende variabel `mobilePhones`, så den også indeholder de næste 6 telefoner fra tekstfilen.

Det betyder, at dit `array` til sidst skal indeholde 11 telefonobjekter i alt.

---

### Opgave 11 – Kald funktionen med telefondata

Nu skal du kalde funktionen `displayPhones()` og sende din JS-datastruktur med telefoner ind som et argument.

---

### Opgave 12 – Grundlæggende CSS styling

Style siden i `css/style.css`.

Siden skal mindst have:

- en centreret overskrift
- luft omkring indholdet
- filmkort med kant eller baggrund
- ensartet afstand mellem elementer
- billeder i en passende størrelse

Du skal forsøge at style siden, så den minder så meget som muligt om referencebilledet, som vises efter opgave 13.

Du må gerne bruge følgende CSS properties:

- margin
- padding
- border
- border-radius
- width
- height
- max-width

---

### Opgave 13 – Layout med CSS Flexbox

Brug CSS Flexbox til at lave layoutet til telefonerne.

Telefonerne skal vises som kort i rækker med luft imellem.

Du skal bruge Flexbox på `#phones-container`.

Her er nogle egenskaber, du kan arbejde med:

- display: flex;
- flex-wrap: wrap;
- justify-content
- align-items
- gap

![Smartphones Oversigt](img/power-smartphones-overview.pngpng)
---

## 📚 Ressourcer og hjælp

- W3Schools – JavaScript Arrays
  https://www.w3schools.com/js/js_arrays.asp

- W3Schools – JavaScript Objects
  https://www.w3schools.com/js/js_objects.asp

- W3Schools – JavaScript Functions
  https://www.w3schools.com/js/js_functions.asp

- W3Schools – JavaScript forEach()
  https://www.w3schools.com/jsref/jsref_foreach.asp

- W3Schools – JavaScript HTML DOM
  https://www.w3schools.com/js/js_htmldom.asp

- W3Schools – querySelector()
  https://www.w3schools.com/jsref/met_document_queryselector.asp

- W3Schools – innerHTML
  https://www.w3schools.com/jsref/prop_html_innerhtml.asp

- W3Schools – Template literals
  https://www.w3schools.com/js/js_string_templates.asp

- W3Schools – CSS Flexbox
  https://www.w3schools.com/css/css3_flexbox.asp

## 📤 Aflevering

Indsæt linket (URL) til dit GitHub-repository på Canvas.

Sørg for, at repository’et er public.

## ⏰ Afleveringsfrist

Torsdag d. 16. april 2026 kl. 23.59 på Canvas.

