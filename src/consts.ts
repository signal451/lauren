import { Label } from "@radix-ui/react-dropdown-menu"

export type Site = {
  TITLE: string,
  DESCRIPTION: string,
  EMAIL: string,
  SITEURL: string,
  POSTS_PER_PAGE: number,
  NUM_POSTS_ON_HOMEPAGE: number
}

export type Link = {
  href: string,
  label: string
}

export const SITE: Site = {
  TITLE: "lauren.dev",
  DESCRIPTION: "frontend web development and other shenanigans",
  EMAIL: "enkhtugsog@gmail.com",
  SITEURL: "https://lauren.dev",
  POSTS_PER_PAGE: 3,
  NUM_POSTS_ON_HOMEPAGE: 2,
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'Home'},
  { href: '/blog', label: 'blog'}
]
  
export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/signal451', label: 'Github'}, 
  { href: 'enkhtugsog@gmail.com', label: 'Email' },
  { href: 'https://www.instagram.com/tugsuu.png/', label: 'Instagram'},
]
