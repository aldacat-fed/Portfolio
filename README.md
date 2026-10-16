# Alda - Portfolio
En responsiv one-page portfolio byggd som en React single page application. Sidan har sektionerna Hem, Om mig, Projekt och Kontakt, ett filter för att sortera mina projekt på teknik, ett kontaktformulär med validering och animationer som gör sidan levande.

**Live-sida:**
https://portfolio-theta-dun.vercel.app

**Vercel-länk:**
https://vercel.com/alda8/portfolio

**Figma-skiss:**
https://www.figma.com/design/HxlBim9xD1inOtKA5o9N7U/Alda---Portfolio?node-id=0-1&t=Ypqlj1g5hzKDSArb-1

## Tech stack
React, TypeScript, Vite, Motion (animationer), vanlig CSS med variabler, Git/GitHub, Vercel och Figma.

## Ändringar jämfört med Figma-skissen
- Projektkorten har lite högre bilder på den färdiga sidan än i skissen, där de är kortare för att få plats i en ram på 1440 x 1024.
- Scroll-animationerna, layout-animationerna vid filtrering och mobilmenyns animation syns inte i skissen, eftersom den är statisk.
- Projektbilderna är riktiga skärmbilder i stället för platshållare.

## Reflektion
**Komponentarkitektur.** Jag har delat upp sidan i fyra sektioner, Hero, About, Projects och Contact, som sätts ihop i App. Mindre delar som ProjectCard, FilterBar, ContactForm och Reveal är återanvändbara och får sin data via props. Projektdatan ligger separat i `data/projects.ts` och renderas med `map()` och en unik `key`, så att jag kan lägga till eller byta projekt utan att ändra någon komponent.

**State.** Jag har placerat state så nära de komponenter som använder det som möjligt. Mobilmenyns öppet/stängt-läge ligger i Header, eftersom ingen annan behöver det. De valda filtertaggarna sparas som en array i Projects, som är närmaste gemensamma förälder till FilterBar och korten. Taggar läggs till och tas bort genom att skapa nya arrayer med spread och `filter`. Listan med synliga projekt räknas fram vid rendering i stället för att sparas i eget state, så att den aldrig hamnar ur synk med filtret. Kontaktformuläret har ett state-objekt för fältens värden och ett för felmeddelanden och ligger i ContactForm eftersom ingen annan komponent behöver det.

**Animationer.** Jag använder Motion för scroll-animationer, layout-animationer när projekten filtreras och AnimatePresence för att öppna och stänga mobilmenyn.

**Vad jag skulle göra annorlunda.** Jag skulle göra mindre och tätare commits från början. När jag börjar koda glömmer jag ofta att committa, vilket gör historiken mindre tydlig än den borde vara. Jag skulle också använda `console.log` oftare för att följa vad koden gör, och skriva korta kommentarer i koden så att den blir lättare att förstå och underhålla. Dessutom vill jag lära mig JavaScript och TypeScript mer på djupet.