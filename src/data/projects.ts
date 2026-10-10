export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Super Mario Landing Page",
    description: "Landningssida för en fiktiv Super Mario-film, framtagen i kursen Grafiska verktyg.",
    image: "/images/supermario.jpg",
    tags: ["HTML", "CSS", "Design"],
    repo: "https://github.com/aldacat-fed/super-mario-landing-movie-page",
    demo: "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-cmyk/",
  },
  {
    id: 2,
    title: "Stranger Woods",
    description: "Spel byggt i grupp med JavaScript. Jag arbetade med spelmekanik och gränssnitt.",
    image: "/images/strangerwoods.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Grupparbete"],
    repo: "https://github.com/aldacat-fed/stranger-woods-game",
    demo: "https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-dopefish-admirers/",
  },
  {
    id: 3,
    title: "Book App",
    description: "App för att bläddra bland och hålla koll på böcker.",
    image: "/images/bookapp.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/aldacat-fed/Book-app",
  },
  {
    id: 4,
    title: "Budget App",
    description: "Budgetapp där man lägger till inkomster och utgifter och ser sin balans.",
    image: "/images/budgetapp.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/aldacat-fed/inl-2-js-budget-app",
    demo: "https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-aldacat-fed/",
  },
  {
    id: 5,
    title: "Nordic Haven",
    description: "Responsiv webbsida med interaktiva element i JavaScript.",
    image: "/images/nordichaven.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Design"],
    repo: "https://github.com/aldacat-fed/inl-1-js-webbsida-nordic-haven",
    demo: "https://medieinstitutet.github.io/fed25d-js-intro-inl-1-aldacat-fed/",
  },
  {
    id: 6,
    title: "Min portfolio",
    description: "Den här sidan: en React-SPA med filtrering, formulär och animationer.",
    image: "/images/portfolio.jpg",
    tags: ["React", "TypeScript", "Design", "Animation"],
    repo: "https://github.com/aldacat-fed/portfolio",
  },
];