# Expert_Systen_Transport - Zināšanu balstīta ekspērtu sistēma

## Repozitorijs tiks arhivēts, jo sistēma ir derīga un tika apskatīta.

Šis repozitorijs satur izveidoto ekspertu sistēmu, kura ir balstīta uz IF-THEN likumiem.

Ekspertu sistēma risina problēmu - "Kādu transporta līdzekli es gribu izmantot šodien?"

Ekspertu sistēma ir pieejama [šeit](https://wolferado.github.io/Expert_System_Transport/).

### Darbības princips

Ir 4 atribūti, kuriem var izvēlēties vienu no piedāvātām vērtībām:
1. Kāda ir mana attieksme pret dabu? jeb **APD** _(Pozitīva / Neitrāla)_ 
2. Kāds transporta līdzekļa ir vajadzīgs? jeb **TLB** _(Personāls / Koplietojams / Sabiedriskais)_
3. Kas ir svarīgs transporta līdzeklī? jeb **STL** _(Elastīgums / Kompaktums / Budžets)_
4. Kāds ir transporta līdzekļa maksimālais ātrums? jeb **MA** _(5-15 / 15-25 / 25+ km/st.)_

Balstoties uz izvēlētām vērtībām, tiks izveidots 1 piedāvājums no saraksta:
- Automašīna;
- Sabiedriskais transports (autobuss);
- Ekoloģisks sabiedriskais transports (ūdeņraža elektriskais 
trolejbuss, elektriskais vilciens);
- Divriteņi un to paveidi;
- Elektriskie skrejriteni;
- Nav atbilstoša piedāvājuma (ja nav atrasta kombinācija ZB);
- Parametri nav izvēlēti (no sākuma).

### IF-THEN likumi:
| IF daļas saturs | THEN daļas saturs |
| --------------- | ----------------- |
| IF **APD** ir “neitrāla” AND **TLV** ir “personāls” AND **STL** ir “elastīgums” AND **MA** ir “25+”| THEN **Piedāvājums** ir “Automašīna” |
| IF **APD** ir “neitrāla” AND **TLV** ir “koplietojams” AND **STL** ir “elastīgums” AND **MA** ir “25+” | THEN **Piedāvājums** ir “Automašīna” |
| IF **APD** ir “neitrāla” AND **TLV** ir “sabiedriskais” AND **STL** ir “budžets” AND **MA** ir “25+” |THEN **Piedāvājums** ir “Sabiedriskais transports” |
| IF **APD** ir “pozitīva” AND **TLV** ir “sabiedriskais” AND **STL** ir “budžets” AND **MA** ir “25+” | THEN **Piedāvājums** ir “Ekoloģisks sabiedriskais transports” |
|IF **APD** ir “pozitīva” AND **TLV** ir “personāls” AND **STL** ir “elastīgums” AND **MA** ir “5-15” | THEN **Piedāvājums** ir “Divriteņi un to paveidi” |
| IF **APD** ir “pozitīva” AND **TLV** ir “koplietojams” AND **STL** ir “elastīgums” AND **MA** ir “5-15” | THEN **Piedāvājums** ir “Divriteņi un to paveidi” |
| IF **APD** ir “pozitīva” AND **TLV** ir “personāls” AND **STL** ir “kompaktums” AND **MA** ir “5-15” | THEN **Piedāvājums** ir “Divriteņi un to paveidi” |
| IF **APD** ir “pozitīva” AND **TLV** ir “koplietojams” AND **STL** ir “kompaktums” AND **MA** ir “5-15” | THEN **Piedāvājums** ir “Divriteņi un to paveidi” |
| IF **APD** ir “pozitīva” AND **TLV** ir “personāls” AND **STL** ir “elastīgums” AND **MA** ir “15-25” | THEN **Piedāvājums** ir “Elektriskie skrejriteņi” |
| IF **APD** ir “pozitīva” AND **TLV** ir “personāls” AND **STL** ir “kompaktums” AND **MA** ir “15-25” | THEN **Pieedāvājums** ir “Elektriskie skrejriteņi” |

Šī ekspertu sistēma tika izveidota priekš kursa "Mūsdienu mākslīga intelekta speciālās nodaļas".

### Izskats:
<div>
  <img src=https://github.com/Wolferado/Expert_System_Transport/blob/main/materials/Screenshot%202023-06-19%20160539.png?raw=true width=49% height=49%/>
  <img src=https://github.com/Wolferado/Expert_System_Transport/blob/main/materials/Screenshot%202023-06-19%20160558.png?raw=true width=49% height=49%/>)
</div>
