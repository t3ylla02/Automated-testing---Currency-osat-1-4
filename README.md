# Ohjelmistotestauksen harjoitustehtävä

Tämä repositorio sisältää ohjelmistotestauksen kurssin tehtävät (Osat 1–4). Ohjeen mukaisesti ei kohtia 5 ja 6.

Projekti on rakennettu Viteellä ja TypeScriptillä, ja testauskehyksenä toimii Vitest.

## Mitä ohjelma tekee?

Testit sijaitsevat kansiossa (`src/`) se sisältää erilaisia yksinkertaisia funktioita, joiden ainoa tarkoitus on toimia testauksen kohteena. Mukana on:
- Yksinkertainen laskutoimitus
- Käyttäjän luontifunktio, joka käyttää sisäisesti satunnaisuutta ja erillistä loggeria
- Funktio joka hakee dataa ulkoisesta rajapinnasta api testaus ja api mockaus