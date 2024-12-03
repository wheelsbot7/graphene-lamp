import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Wheelsblog V7",
  DESCRIPTION: "Personal blog of Owen Wertzberger",
  EMAIL: "o.wertzberger@wheelsbot.dev",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home page of this website.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Information about this website and its owner.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "BlueSky",
    HREF: "https://bsky.app/profile/wheelsbot.dev",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/wheelsbot7",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/owen-wertzberger-14992b164/",
  },
];
