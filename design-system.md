# Eliza Beauty Salon — design system

> A jóváhagyott, pasztell „Törődő fény” főoldal tényleges stíluslapja alapján. Ez a dokumentum a későbbi aloldalak vizuális alapja; a forrás igazsága a `public/site.css` és a főoldal `public/index.html` fájlja.

## Vizuális irány

Nyugodt, professzionális és nőies szalonhangulat, krém és púder felületekkel, rózsafa kiemelésekkel, finom homokarany részletekkel. A megjelenés letisztult, levegős, editorial jellegű; a karaktert a talpas Cormorant címsorok, a szabálytalanul lekerekített sarkok és a visszafogott díszítőívek adják. A vibráló koncepció színei nem részei ennek a kiválasztott iránynak.

## Színek

| CSS-token | Érték | Használat |
|---|---|---|
| `--color-brand-primary` | `#8E4A5A` | Rózsafa: elsődleges gomb, link, kiemelés, számozás és ikon |
| `--color-brand-primary-dark` | `#6E3644` | Elsődleges gomb hover állapota |
| `--color-brand-secondary` | `#2E2626` | Kakaóbarna alapszöveg és sötét lábléc |
| `--color-brand-accent` | `#C9A27E` | Homokarany díszítővonalak és ívek; kis felületen használjuk |
| `--color-brand-bg` | `#FAF6F2` | Meleg krém oldalháttér, világos gomb |
| `--color-brand-surface` | `#F1E6DF` | Púder szekcióháttér, kártya és képdíszítő felület |
| `--color-brand-text` | `#2E2626` | Elsődleges szöveg |
| `--color-brand-muted` | `#6B5F5C` | Másodlagos szöveg, leírás, kísérő információ |
| `--line` | `#E3D6CF` | Finom elválasztó és mezőkeret |

Kontextus szerinti felületszínek: törtfehér kártya `#FFFDFA`; sötét kakaó szekción világos szöveg `#FFFAF6`; finom fókuszjelölés `#A66A48`. A hero szöveg háttere a krém alapszín. A lábléc sötét kakaó felületén fehér szöveg jelenik meg. Az arany kiemelés dekoratív, ne legyen hosszú szöveg színe.

## Tipográfia

- **Címsorok:** Cormorant Garamond, 500-as vastagság, Georgia/serif tartalékbetűvel. Jellemzően `letter-spacing: -0.025em`, `line-height: 1.08`.
- **Törzsszöveg és kezelőfelület:** Jost, a `--font-body` token szerint, system-ui/sans-serif tartalékkal.
- **Hero főcím:** desktopon `clamp(48px, 5.1vw, 62px)`, sormagasság `0.99`, `letter-spacing: -0.04em`; a cím sorai külön blokkban törnek. 980px alatt `clamp(38px, 4.7vw, 46px)`, mobilon `clamp(42px, 10vw, 58px)`, a legkisebb telefonokon `clamp(34px, 10vw, 42px)`.
- **Általános szekciócím (`.title`):** desktopon `clamp(38px, 5vw, 62px)`, legfeljebb 760px szélesség; mobilon `clamp(37px, 10vw, 50px)`.
- **Kiemelt címsor-változatok:** szalonpanel `clamp(36px, 4.5vw, 56px)`; ajánlati panel `clamp(38px, 5vw, 64px)`; kapcsolatoldali cím `clamp(38px, 4.5vw, 54px)`. Ezek csak a megfelelő komponensben használandók.
- **Kártya- és komponenscímek:** a hierarchiától függően 22–31px, Cormorant Garamond 500.
- **Törzsszöveg:** 17px/1.65 alapméret. Hero leírás: 17px/1.75. Hosszabb review szöveg: 15–17px/1.75 Jost 400.
- **Eyebrow (`.eyebrow`):** Jost 600, 12px/1.4, nagybetű, `letter-spacing: .12em`; előtte 31px-es vékony homokarany vonal.
- **Navigáció:** Jost 500, 14px. Gomb: Jost 600, 14px, `letter-spacing: .025em`. Lábléc: Jost 300.

## Szélesség, rács és térköz

- **Tartalommaximum:** `--max: 1240px`.
- **Oldalsó konténerszél:** desktopon `min(1240px, 100% - 64px)` — legalább 32px oldalsó tér; 980px alatt `min(1240px, 100% - 44px)`; mobilon `100% - 40px`, azaz 20px margó.
- **Általános szekció:** függőleges padding `clamp(76px, 9vw, 128px)`; 760px alatt 70px.
- **Hero:** desktopon 42px felül, 94px alul; mobilon 20px felül, 64px alul. Kétoszlopos rácsa `.94fr / 1.06fr`, 590px minimális magassággal; tablet alatt közel egyenlő oszlopok, mobilon egy oszlop.
- **Fő rácsközök:** a CSS-ben kontextushoz igazodnak, többek között `clamp(48px, 8vw, 110px)` a hero és `clamp(55px, 9vw, 130px)` a bemutatkozó/kezelési rácsok esetén. A kártyarácsoknál tipikusan 15–22px.
- **Folyószöveg:** komponensenként korlátozott; hero 520px, bevezető `.intro` 650px, címsor `.title` 760px maximum.
- A térközök a komponenshez igazodnak, nem egy merev 8px-es skálából következnek. Az új szakaszoknál a fenti meglévő szekció- és rácsértékekből induljunk ki.

## Gombok és linkek

- **Elsődleges gomb (`.btn`):** kapszula alak (`border-radius: 999px`), rózsafa háttér, fehér szöveg, minimum 54px magas, 14px 25px belső térköz, Jost 600 / 14px. Hoverre sötét rózsafa, enyhe felfelé mozdulás, finom árnyék; a nyíl ikon kissé jobbra mozdul.
- **Világos gomb (`.btn-light`):** krém háttér és rózsafa szöveg; hoverre fehér háttér és sötétebb rózsafa szöveg. A főoldalon az ajánlati panel CTA-ja használja.
- **Körvonalas gomb (`.outline`):** átlátszó háttér, visszafogott rózsafa keret és rózsafa szöveg; hoverre kitöltött rózsafa felület. Csak ahol a hierarchia indokolja.
- **Szöveges link (`.text-link`):** rózsafa, Jost 600; nyíl/ikon mellett 10px rés, hoverre a rés 15px-re nő.
- **Fejléc-navigáció (`.links a`):** Jost 500 / 14px, visszafogott sötétbarna; hover vagy aktuális oldal esetén homokarany aláhúzás jelenik meg.
- A billentyűzetfókuszt látható, 3px-es `#A66A48` körvonal jelzi.

## Komponensnevek és megjelenési szabályok

Az aloldalak a meglévő neveket használják, és a `public/site.css` közös stílusaira építenek. Oldalspecifikus szabályok a `public/pages.css` fájlba kerülnek.

| Csoport | Meglévő osztálynevek |
|---|---|
| Alap és navigáció | `.page-container`, `.section`, `.eyebrow`, `.title`, `.intro`, `.header`, `.nav`, `.brand`, `.links`, `.nav-cta`, `.menu` |
| Gomb és díszítés | `.btn`, `.btn-light`, `.outline`, `.text-link`, `.arc` |
| Hero és bizalmi sáv | `.hero`, `.hero-grid`, `.hero-copy`, `.hero-visual`, `.portrait`, `.hero-actions`, `.hero-note`, `.hero-bottom`, `.proof`, `.proof-row`, `.proof-item` |
| Vélemények | `.reviews`, `.reviews-head`, `.review-grid`, `.review`, `.quote`, `.small-note` |
| Kezelés és panasz kártyák/listák | `.care`, `.care-list`, `.care-item`, `.care-icon`, `.concerns`, `.concern-grid`, `.concern-card`, `.concern-icon`, `.paths`, `.path-list`, `.path`, `.path-icon` |
| Bemutatkozás és szalon | `.about-grid`, `.about-photo`, `.about-copy`, `.metrics`, `.salon-panel`, `.salon-copy`, `.salon-mood-gallery` |
| Folyamat és ajánlat | `.process`, `.steps`, `.step`, `.offer`, `.offer-panel`, `.offer-action` |
| GYIK és űrlapok | `.faq-layout`, `.faq-list`, `.guide-panel`, `.guide-form`, `.field`, `.booking-form`, `.contact-panel`, `.contact-details` |
| Lábléc és animáció | `.footer`, `.footer-top`, `.footer-bottom`, `.signoff`, `.reveal` |
| Aloldal-specifikus | `.inner-hero`, `.inner-copy`, `.treatment-family`, `.package-card`, `.timeline`, `.value-card`, `.contact-page`, `.contact-form-panel` |

Kártyák és panelek jellemzően törtfehér vagy púder felületet, finom vonalat és aszimmetrikus sarkot használnak (például `3px 24px`, illetve `3px 30px`), nem egységes, mindenütt alkalmazott lekerekítést. A kezelésikonok a mellékelt SVG-k; a CSS illesztett ikonkeretben, `object-fit: contain` módon kezeli őket. Képek maradjanak természetesek, `object-fit: cover` vágással és a komponenshez igazított képaránnyal.

## Reszponzív viselkedés

- **980px-ig:** tablet rácsok; a hero kétoszlopos marad kisebb hézaggal és 510px-es képmagassággal. A konténer oldalsó tere 22px. A kezelési és panaszrács két oszlopra vált.
- **760px-ig:** mobil elrendezés. A fő navigáció hamburgeres, lenyitható menüvé alakul, a fejléc CTA-ja elrejtőzik; a legtöbb kétoszlopos blokk egymás alá kerül. A hero kép a szöveg alá kerül, a tartalom 20px oldalsó margót kap. A gombok és linkek maradjanak könnyen elérhetők; a vélemények és kezelési kártyák egyoszloposak.
- **420px-ig:** kompakt telefonos finomhangolás. A hero és az aloldali hero címe `clamp(34px, 10vw, 42px)`; a hero elsődleges műveleti gombja teljes szélességű, a lábléc és a kapcsolati panel egyoszlopos.
- **Csökkentett mozgás:** `prefers-reduced-motion: reduce` esetén az animációk, átmenetek és sima görgetés minimálisra csökkennek; a megjelenésre váró tartalom azonnal látható.

## Forrás szerinti ellenőrzés

Ezt a leírást a jóváhagyott pasztell főoldal `public/index.html` és `public/site.css` fájljaihoz igazítottam. A korábbi vázlat több pontja nem felelt meg a kész oldalnak — ilyen volt a 1200px-es maximum, a merev 8px-es térközrendszer, a 64/40px-es H1, a gombok mérete és a minden kártyára egységes 16px-es lekerekítés —, ezért ezek helyett a tényleges CSS-értékek szerepelnek. Új aloldal komponensnél a közös tokeneket és viselkedési mintákat tartsuk meg; új token vagy eltérő komponensstílus csak indokolt, egységes bővítésként kerüljön be.
