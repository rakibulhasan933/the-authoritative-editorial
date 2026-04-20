# SEO Quick Reference Guide

Quick copy-paste reference for common SEO and accessibility patterns.

---

## Page Metadata Template

Use this template for all new pages:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Momo Travels",
  description: "Concise description of page content, ideally 150-160 characters.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Page Title | Momo Travels",
    description: "Concise description...",
    type: "website",
    url: "https://mumotravels.com/page-slug",
    images: [
      {
        url: "https://mumotravels.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image description",
      },
    ],
  },
  alternates: {
    canonical: "https://mumotravels.com/page-slug",
  },
};

export default function Page() {
  return (
    <>
      {/* Add schema markup if needed */}
      {/* Page content */}
    </>
  );
}
```

---

## Heading Structure Template

```tsx
// Page title - ONE H1 per page
<h1>Main Page Topic</h1>

// Section headings
<h2>Main Section</h2>

// Subsection headings
<h3>Subsection Topic</h3>

// Deeper nesting (use sparingly)
<h4>Deep subsection</h4>
```

**Using AccessibleHeading Component**:
```tsx
import { AccessibleHeading } from "@/components/seo/accessible-heading";

<AccessibleHeading level="h1">Page Title</AccessibleHeading>
<AccessibleHeading level="h2">Section Title</AccessibleHeading>
<AccessibleHeading level="h3">Subsection</AccessibleHeading>
```

---

## Semantic HTML Elements

### Navigation
```tsx
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>
```

### Article/Blog Post
```tsx
<article>
  <h1>Article Title</h1>
  <time dateTime="2024-01-15">January 15, 2024</time>
  <p>Article content...</p>
</article>
```

### Section
```tsx
<section aria-labelledby="section-title">
  <h2 id="section-title">Section Title</h2>
  <p>Section content...</p>
</section>
```

### Images with Captions
```tsx
<figure>
  <img src="image.jpg" alt="Descriptive text about the image" />
  <figcaption>Brief caption for the image</figcaption>
</figure>
```

### Footer
```tsx
<footer role="contentinfo" aria-label="Site footer">
  <p>&copy; 2024 Momo Travels. All rights reserved.</p>
</footer>
```

---

## Schema Markup Patterns

### Organization (Home Page)
```tsx
import { OrganizationSchema } from "@/components/seo/schema-script";

<OrganizationSchema
  name="Momo Travels"
  url="https://mumotravels.com"
  logo="https://mumotravels.com/logo.png"
/>
```

### Breadcrumbs (All Pages)
```tsx
import { BreadcrumbSchema } from "@/components/seo/schema-script";

<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://mumotravels.com" },
    { name: "Blog", url: "https://mumotravels.com/blogs" },
    { name: "Article Title", url: "https://mumotravels.com/blog/slug" },
  ]}
/>
```

### Article (Blog Post)
```tsx
import { ArticleSchema } from "@/components/seo/schema-script";

<ArticleSchema
  title="Article Title"
  description="Short article description"
  image="https://mumotravels.com/article-image.png"
  author="Author Name"
  publishedDate="2024-01-15T00:00:00Z"
  modifiedDate="2024-01-20T00:00:00Z"
  keywords={["keyword1", "keyword2"]}
/>
```

---

## Accessibility Patterns

### Button with ARIA Label
```tsx
<button
  onClick={handleClick}
  aria-label="Open navigation menu"
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  ☰
</button>
```

### Form with Accessible Labels
```tsx
<form>
  <label htmlFor="email">Email Address</label>
  <input
    id="email"
    type="email"
    placeholder="your@email.com"
    required
    aria-required="true"
    className="focus:outline-none focus:ring-2 focus:ring-primary"
  />
</form>
```

### Screen Reader Only Text
```tsx
import { ScreenReaderOnly } from "@/components/seo/accessible-heading";

<ScreenReaderOnly>
  Additional context for screen reader users
</ScreenReaderOnly>
```

### Link with External Indicator
```tsx
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
  <span aria-label="Opens in new tab">↗</span>
</a>
```

### Expandable Section
```tsx
const [isOpen, setIsOpen] = useState(false);

<button
  aria-expanded={isOpen}
  aria-controls="expandable-content"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? "Hide" : "Show"} Details
</button>
<div id="expandable-content" hidden={!isOpen}>
  Expandable content...
</div>
```

---

## Image Alt Text Guidelines

### Informative Images
```tsx
// GOOD: Describes the image content
<img src="team-photo.jpg" alt="Five team members standing in front of office building" />

// BAD: Generic or misleading
<img src="team-photo.jpg" alt="Photo" />
<img src="team-photo.jpg" alt="image123" />
```

### Decorative Images
```tsx
// GOOD: Empty alt text for purely decorative images
<img src="divider.svg" alt="" aria-hidden="true" />

// BAD: Using decorative images for content
<img src="divider.svg" alt="decorative divider" />
```

### Complex Images (Charts, Diagrams)
```tsx
<figure>
  <img
    src="chart.png"
    alt="Bar chart showing sales growth from Q1 to Q4"
  />
  <figcaption>
    Sales data shows 25% growth across all quarters, with Q4 reaching peak performance.
  </figcaption>
</figure>
```

---

## Focus Management Classes

Use these Tailwind utilities for consistent focus states:

```tsx
// Standard focus ring
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

// For buttons
className="focus:outline-none focus:ring-2 focus:ring-primary transition-ring duration-200"

// For links
className="focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
```

---

## Common ARIA Attributes

```tsx
// For toggle buttons
aria-pressed={isPressed}
aria-expanded={isOpen}

// For disabled state
aria-disabled={isDisabled}

// For live regions (notifications)
aria-live="polite"
aria-atomic="true"

// For required form fields
aria-required="true"

// For descriptions
aria-describedby="help-text-id"

// For labels
aria-labelledby="heading-id"

// Navigation regions
aria-label="Main navigation"
```

---

## SEO Best Practices Checklist

### For Every Page
- [ ] Unique, descriptive H1 (main topic)
- [ ] Meta description (150-160 characters)
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Descriptive alt text for all images
- [ ] Internal links to related content
- [ ] Mobile-friendly design

### For Blog Posts
- [ ] Article schema with author and date
- [ ] Breadcrumb schema
- [ ] Featured image with proper alt text
- [ ] Word count 1500+ for better ranking
- [ ] Internal links to related posts
- [ ] Meta description with keyword focus

### For All Content
- [ ] Read time estimate
- [ ] Author byline
- [ ] Publication date and last updated
- [ ] Related content links
- [ ] Clear call-to-action
- [ ] Social sharing buttons

---

## URL Structure Best Practices

```
# GOOD: Descriptive, SEO-friendly URLs
/blog/seo-basics-beginners-guide
/about-us
/services/content-marketing
/contact-us

# BAD: Generic, unclear URLs
/blog/123
/p/article
/s/content
```

---

## Meta Description Template

**Format**: Action word + Benefit + Primary keyword

**Examples**:
- "Learn SEO basics for beginners. Master keyword research, on-page optimization, and link building strategies to improve search rankings."
- "Discover cutting-edge digital marketing strategies. Expert insights on content marketing, social media, and conversion optimization."

**Guidelines**:
- 150-160 characters (including spaces)
- Include primary keyword naturally
- Make it compelling to encourage clicks
- Unique for each page

---

## Testing Commands

```bash
# Lighthouse audit
npm run build && npx lighthouse https://localhost:3000

# Check for accessibility issues
npm install --save-dev axe-playwright

# Validate schema markup
# Visit: https://validator.schema.org/

# Test with Google Mobile-Friendly Test
# Visit: https://search.google.com/test/mobile-friendly

# Check indexability
# Visit: Google Search Console
```

---

## Resources

- **Next.js Metadata Docs**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Schema.org Reference**: https://schema.org/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **OpenGraph Protocol**: https://ogp.me/
- **Google Search Central**: https://developers.google.com/search

---

Last Updated: 2024
