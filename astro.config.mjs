import { defineConfig } from 'astro/config'
//integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from "astro-icon"

//markdown
import rehypePrettyCode from 'rehype-pretty-code'
import remarkToc from 'remark-toc'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import sectionize from '@hbsnow/rehype-sectionize'

//shiki
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'
import { transformerCopyButton } from '@rehype-pretty/transformers'


// https://astro.build/config
export default defineConfig({
  site: 'https://astro-erudite.vercel.app',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    sitemap(),
    icon(),
  ],

  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      sectionize,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light-high-contrast',
            dark: 'github-dark-high-contrast',
          },
          transformers: [
            transformerNotationDiff({
              matchAlgorithm: 'v3'
            }),
            transformerMetaHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 1000,
            })

          ],
        },
      ],
    ],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji],
  },

});