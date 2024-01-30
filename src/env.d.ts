/// <reference types="astro/client" />

import type { string } from 'astro/zod'

export interface Post {
  url: string
  frontmatter: {
    title: string
    pubDate: string
    description: string
    author: string
    image: {
      url: string
      alt: string
    }
    tags: string[]
  }
}
