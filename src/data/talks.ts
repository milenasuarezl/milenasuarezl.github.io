export type TalkLink = {
  label: "Video" | "Slides" | "Event" | "Recap";
  href: string;
};

export type Talk = {
  year: number;
  title: string;
  event: string;
  community: string;
  coSpeaker?: string;
  language: "EN" | "ES";
  topics: string[];
  links: TalkLink[];
  featured?: boolean;
};

export const talks: Talk[] = [
  {
    year: 2025,
    title: "Small Steps, Big Impact: Our Accessibility Journey at Babbel",
    event: "Design DNA 2025 — Design Systems Conference",
    community: "Design DNA",
    language: "EN",
    topics: ["Accessibility", "Design Systems"],
    featured: true,
    links: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=4NEHHWtqaoM&list=PL0gIJP8vZ68Tle-hkmg52qZCeMZMwM1ev&index=5&t=1624s",
      },
    ],
  },
  {
    year: 2025,
    title: "Small Steps, Big Impact? Accessibility at Babbel",
    event: "Into Design Systems Meetup — Berlin, hosted at Babbel",
    community: "Into Design Systems",
    coSpeaker: "Albina Kremer",
    language: "EN",
    topics: ["Accessibility", "Design Systems"],
    featured: true,
    links: [
      { label: "Event", href: "https://luma.com/ids-berlin-babbel" },
      { label: "Recap", href: "https://www.instagram.com/lifeatbabbel/p/DOyLMBtDc1r/" },
    ],
  },
  {
    year: 2019,
    title: "Domain-Driven Design applied to the Frontend",
    event: "BoyaConf",
    community: "BoyaConf",
    language: "ES",
    topics: ["Architecture"],
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1gvr5b_NRn0NS9aSVG5d3DR77qo2EXKWEJdDXN7DS-n8/edit#slide=id.g65b6a47305_2_5",
      },
    ],
  },
  {
    year: 2018,
    title: "Angular 7",
    event: "Angular Colombia Meetup",
    community: "Angular Colombia",
    language: "ES",
    topics: ["Angular"],
    links: [
      { label: "Event", href: "https://www.meetup.com/es-ES/Angular-Colombia/events/256081800/" },
      { label: "Slides", href: "https://slides.com/milenasuarez/angular-7" },
    ],
  },
  {
    year: 2018,
    title: "Reactive Forms in Angular",
    event: "Women Techmakers Bogotá",
    community: "Women Techmakers Bogotá",
    language: "ES",
    topics: ["Angular"],
    links: [
      { label: "Event", href: "https://www.meetup.com/es-ES/WTM-Bogota/events/252640287/" },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1quIlvn3YU9nN3ZmEw5FgblqOS8UYI3G6VPCH_phT4eI/edit#slide=id.p",
      },
    ],
  },
  {
    year: 2018,
    title: "Engineering Culture",
    event: "GDG Bogotá",
    community: "GDG Bogotá",
    language: "ES",
    topics: ["Culture"],
    links: [
      { label: "Event", href: "https://www.meetup.com/es-ES/gdgbogota/events/248262027/" },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1jz6Jv96R1kylbYJHW4oG8aLtXv_KnsFNdvCj8GNkwUU/edit?usp=sharing",
      },
    ],
  },
  {
    year: 2018,
    title: "The Flux Design Pattern",
    event: "Colpatria tech talks",
    community: "Colpatria",
    coSpeaker: "Cristian",
    language: "ES",
    topics: ["Architecture"],
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1kDGNfsOaZAjysxp-yJD_4NXdnAljcBmvIEiEFgEREkU/edit",
      },
    ],
  },
  {
    year: 2018,
    title: "State Management with NgRx/Store",
    event: "Colpatria tech talks",
    community: "Colpatria",
    coSpeaker: "Edwin",
    language: "ES",
    topics: ["Angular", "Architecture"],
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/13jQyHI1Aiuu720IbXXdlU5CYMYavkVRleHlpq4a1FpA/edit#slide=id.g3a9b46779b_0_199",
      },
    ],
  },
  {
    year: 2017,
    title: "What Not to Do in CSS",
    event: "BogotaJS",
    community: "BogotaJS",
    language: "ES",
    topics: ["CSS"],
    links: [
      { label: "Event", href: "https://www.meetup.com/es-ES/BogotaJS/events/243945554/" },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1nZRaWZjfYIqvZxb0nvT0MHE2hMDRz7axJo1AqKKTcZk/edit?usp=sharing",
      },
    ],
  },
  {
    year: 2017,
    title: "Arrow Functions and “this” in ES6",
    event: "BogotaJS",
    community: "BogotaJS",
    language: "ES",
    topics: ["JavaScript"],
    links: [
      { label: "Event", href: "https://www.meetup.com/es-ES/BogotaJS/events/239290167/" },
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/11fwpYwriXDYX3EmU7E32nobPpqR4g_IwLqQrVHvZN3w/edit",
      },
    ],
  },
  {
    year: 2017,
    title: "REST Services with Angular 2",
    event: "International Women's Day Bogotá 2017",
    community: "Women Techmakers Bogotá",
    language: "ES",
    topics: ["Angular"],
    links: [{ label: "Slides", href: "https://slides.com/milenasuarez/servicios-api-rest-ful" }],
  },
  {
    year: 2016,
    title: "Introduction to Angular 2",
    event: "BogotaJS",
    community: "BogotaJS",
    language: "ES",
    topics: ["Angular"],
    links: [{ label: "Event", href: "https://www.meetup.com/es-ES/BogotaJS/events/235096487/" }],
  },
  {
    year: 2016,
    title: "Triqui (Tic-Tac-Toe) in JavaScript",
    event: "BogotaJS",
    community: "BogotaJS",
    language: "ES",
    topics: ["JavaScript"],
    links: [{ label: "Video", href: "https://www.youtube.com/watch?v=nfMiiZI3kSo" }],
  },
  {
    year: 2016,
    title: "Concéntrese (Memory Game) in JavaScript",
    event: "BogotaJS",
    community: "BogotaJS",
    language: "ES",
    topics: ["JavaScript"],
    links: [],
  },
];

export const talksByYear = talks.reduce<Map<number, Talk[]>>((acc, talk) => {
  acc.set(talk.year, [...(acc.get(talk.year) ?? []), talk]);
  return acc;
}, new Map());

export const communities = [...new Set(talks.map((talk) => talk.community))].filter(
  (name) => name !== "Colpatria",
);

