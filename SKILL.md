---
name: blog-article-layout
description: Create beautifully structured blog articles with proper typography hierarchy, visual rhythm, and semantic HTML. Use this skill when the user asks to format, structure, or layout a blog article, rewrite content into blog format, create article templates, or apply editorial-style formatting to written content. Outputs clean React/JSX or HTML with Cormorant typography.
---

# Blog Article Layout

Create well-structured, readable blog articles with proper typography hierarchy and visual rhythm.

## Typography System

- **Headings:** Cormorant Garamond
- **Body Text:** Cormorant

Import fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
```

## Article Elements (in order)

1. **Category Label** — Wayfinding (12px, uppercase, 0.15em tracking)
2. **Title (H1)** — Primary headline (48-60px, Cormorant Garamond)
3. **Subtitle** — Secondary headline (20px, light weight, muted color)
4. **Author Block** — Avatar, name, date, reading time
5. **Featured Image** — Hero visual (16:9, with caption)
6. **Lead Paragraph** — Opening hook (24px, light weight)
7. **Body Text** — Main content (20px, 1.7 line height, max 650px)
8. **H2 Heading** — Section breaks (32px, 64px top margin)
9. **H3 Subheading** — Subsections (24px, 48px top margin)
10. **Blockquote** — External quotes (background tint, left border)
11. **Pull Quote** — Key insights (28px, centered, decorative ")
12. **Callout Box** — Supplementary info (subtle gradient, rounded)
13. **Content Image** — In-article visuals (3:2, with caption)
14. **Bullet List** — List content (accent-colored bullets)
15. **Section Divider** — Visual breaks (lines + ✦ symbol)

## Spacing Guidelines

- Between major sections: 64px
- Around images/callouts: 48px
- Between paragraphs: 28px
- Between heading and content: 20-24px

## Usage

1. Read `references/structure-guide.md` for detailed specifications on each element
2. Copy `assets/article-template.jsx` as starting point
3. Replace placeholder content with actual article
4. Adjust elements based on content needs (not all elements required)

## Element Usage Notes

- **Lead paragraph:** Use only once at the beginning
- **Pull quotes:** Maximum 1-2 per article
- **Section dividers:** Use between major thematic shifts only
- **Callout boxes:** Use sparingly for genuinely supplementary info
- **Lists:** Reserve for truly list-worthy content; default to prose
