# BUILD SPACE — COMPLETE DESIGN SYSTEM DOCUMENTATION

### Pixel-Perfect Awwwards-Style UI/UX System

For:
**Commercial Construction & Facility Management Website**

---

# 01. DESIGN PHILOSOPHY

The UI style shown in your reference images follows a very specific modern web aesthetic used in:

* Awwwards websites
* Architectural studios
* Luxury construction brands
* Minimal portfolio systems

This design language is built around:

### Core Principles

* Massive typography
* Cinematic photography
* Minimal color palette
* Deep whitespace
* Negative spacing
* Glassmorphism overlays
* Smooth parallax motion
* Ultra-clean grid alignment
* Premium micro interactions

---

# 02. VISUAL STYLE FOUNDATION

---

# COLOR SYSTEM

## Primary Palette

| Token           | Color                    | Usage            |
| --------------- | ------------------------ | ---------------- |
| Primary Black   | `#070B11`                | Main background  |
| Secondary Black | `#0F1722`                | Cards / overlays |
| Soft White      | `#F3F4F6`                | Main text        |
| Gray            | `#9CA3AF`                | Secondary text   |
| Border          | `rgba(255,255,255,0.08)` | 1px separators   |
| Accent          | `#4F46E5`                | CTA highlights   |

---

# Gradient System

## Hero Overlay

```css
background:
linear-gradient(
180deg,
rgba(0,0,0,0.7) 0%,
rgba(0,0,0,0.25) 100%
);
```

## Dark Ambient Glow

```css
background:
radial-gradient(
circle at center,
rgba(79,70,229,0.08),
transparent 70%
);
```

---

# TYPOGRAPHY SYSTEM

## Font Family

### Primary

```css
font-family: "Inter", sans-serif;
```

### Alternative Premium

* Satoshi
* Neue Montreal
* General Sans

---

# Typography Scale

| Role       | Size  | Weight | Line Height |
| ---------- | ----- | ------ | ----------- |
| Hero XL    | 120px | 300    | 0.9         |
| H1         | 72px  | 400    | 1           |
| H2         | 48px  | 500    | 1.1         |
| H3         | 32px  | 500    | 1.2         |
| Body Large | 20px  | 400    | 1.6         |
| Body       | 16px  | 400    | 1.7         |
| Caption    | 12px  | 500    | 1.4         |

---

# Letter Spacing Rules

## Hero Headlines

```css
letter-spacing: -0.06em;
```

## Section Titles

```css
letter-spacing: -0.03em;
```

## Small Labels

```css
letter-spacing: 0.12em;
text-transform: uppercase;
```

---

# 03. LAYOUT SYSTEM

---

# DESKTOP GRID

## Main Container

```css
max-width: 1600px;
padding-left: 80px;
padding-right: 80px;
margin: auto;
```

---

# 12 COLUMN GRID

| Property  | Value  |
| --------- | ------ |
| Columns   | 12     |
| Gutter    | 24px   |
| Margin    | 80px   |
| Max Width | 1600px |

---

# NEGATIVE SPACING SYSTEM (IMPORTANT)

This is what creates the premium look.

## Example

```css
margin-top: -120px;
```

Used for:

* overlapping cards
* hero stats
* image sections
* floating panels

---

# SECTION SPACING

| Type   | Space |
| ------ | ----- |
| Small  | 64px  |
| Medium | 96px  |
| Large  | 160px |
| Hero   | 240px |

---

# 04. HERO SECTION SYSTEM

---

# STRUCTURE

## Layout

```txt
LEFT:
- Eyebrow text
- Massive headline
- Description
- CTA

RIGHT:
- Architecture image
- Floating stats glass card
```

---

# HERO IMAGE RULES

## Style

* Wide angle
* Cool tone
* High contrast
* Architectural geometry
* Dramatic lighting

---

# HERO HEADLINE RULES

## Example

```txt
SPACES
THAT DRIVE
POSSIBILITY
```

### Styling

```css
font-size: clamp(72px, 9vw, 140px);
font-weight: 300;
line-height: 0.92;
```

---

# FLOATING STATS PANEL

## Position

```css
position: absolute;
bottom: -40px;
right: 80px;
```

## Style

```css
backdrop-filter: blur(20px);
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.08);
```

---

# 05. COMPONENT SYSTEM

---

# BUTTON SYSTEM

## Primary Button

```css
height: 56px;
padding: 0 28px;
border-radius: 999px;
background: white;
color: black;
```

---

# Secondary Button

```css
background: transparent;
border: 1px solid rgba(255,255,255,0.15);
```

---

# Button Hover Animation

## Framer Motion

```jsx
whileHover={{
scale: 1.04,
y: -2
}}
```

---

# CARD SYSTEM

## Construction Cards

```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.06);
border-radius: 20px;
overflow: hidden;
```

---

# Glassmorphism Cards

```css
backdrop-filter: blur(18px);
background: rgba(255,255,255,0.04);
```

---

# 06. ANIMATION SYSTEM

THIS IS THE MOST IMPORTANT PART.

---

# TECHNOLOGY STACK

| Purpose         | Library            |
| --------------- | ------------------ |
| Smooth Scroll   | Lenis              |
| Advanced Scroll | GSAP               |
| UI Motion       | Framer Motion      |
| Parallax        | GSAP ScrollTrigger |
| Page Transition | Framer Motion      |

---

# SMOOTH SCROLL SYSTEM

## Lenis Setup

```js
const lenis = new Lenis({
duration: 1.2,
smoothWheel: true,
smoothTouch: false,
});
```

---

# GSAP PARALLAX SYSTEM

## Hero Image

```js
gsap.to(heroImage, {
yPercent: 20,
ease: "none",
scrollTrigger: {
trigger: hero,
start: "top top",
end: "bottom top",
scrub: true,
}
});
```

---

# TEXT REVEAL ANIMATION

## Framer Motion

```jsx
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{
duration: 1,
ease: [0.16, 1, 0.3, 1]
}}
```

---

# IMAGE SCALE ON SCROLL

```js
gsap.fromTo(image,
{ scale: 1.2 },
{
scale: 1,
scrollTrigger: {
scrub: true
}
}
);
```

---

# FLOATING PANEL ANIMATION

```js
gsap.to(panel, {
y: -20,
repeat: -1,
yoyo: true,
duration: 3
});
```

---

# 07. PARALLAX SYSTEM

---

# MULTI-LAYER PARALLAX

| Layer      | Speed |
| ---------- | ----- |
| Background | 0.5   |
| Midground  | 0.8   |
| Foreground | 1     |

---

# SECTION TRANSITIONS

Every section:

* fades in
* moves upward
* slight blur removal
* stagger animation

---

# 08. SERVICES SECTION

---

# Layout

## 4 Column Grid

```css
grid-template-columns:
repeat(4, 1fr);
```

---

# Service Card Rules

### Top

* icon

### Middle

* title

### Bottom

* description

### Hover

* line animation
* slight upward motion

---

# 09. PROJECT SHOWCASE SYSTEM

---

# PROJECT CARD STYLE

## Image

```css
aspect-ratio: 4/5;
overflow: hidden;
```

## Hover

```css
transform: scale(1.06);
```

---

# CARD OVERLAY

```css
background:
linear-gradient(
to top,
rgba(0,0,0,0.7),
transparent
);
```

---

# 10. INSIGHTS SECTION

---

# Blog Card System

## Layout

```txt
IMAGE
CATEGORY
TITLE
CTA
```

---

# Hover Motion

* image zoom
* underline grow
* slight text movement

---

# 11. NAVBAR SYSTEM

---

# Transparent Navbar

## Initial

```css
background: transparent;
```

## Scrolled

```css
backdrop-filter: blur(16px);
background: rgba(7,11,17,0.7);
border-bottom:
1px solid rgba(255,255,255,0.06);
```

---

# Navbar Animation

```js
gsap.from(navbar, {
y: -100,
duration: 1
});
```

---

# 12. FOOTER SYSTEM

---

# Layout

```txt
LEFT:
Brand description

CENTER:
Navigation columns

RIGHT:
Contact
Socials
```

---

# Footer Style

```css
background:
linear-gradient(
180deg,
#070B11,
#05070B
);
```

---

# 13. RESPONSIVE SYSTEM

---

# BREAKPOINTS

| Device     | Width  |
| ---------- | ------ |
| Desktop XL | 1600px |
| Desktop    | 1440px |
| Laptop     | 1280px |
| Tablet     | 768px  |
| Mobile     | 480px  |

---

# MOBILE HERO RULES

## Typography

```css
font-size: 64px;
```

## Layout

* stack vertically
* stats below image
* reduce spacing

---

# MOBILE SPACING

```css
padding-left: 20px;
padding-right: 20px;
```

---

# 14. PERFORMANCE SYSTEM

---

# IMAGE OPTIMIZATION

Use:

* WebP
* AVIF
* Next/Image

---

# LAZY LOADING

```jsx
loading="lazy"
```

---

# 15. DEVELOPMENT STACK

---

# Recommended Stack

| Technology    | Purpose          |
| ------------- | ---------------- |
| Next.js       | Framework        |
| TailwindCSS   | Styling          |
| Framer Motion | UI Animation     |
| GSAP          | Scroll Animation |
| Lenis         | Smooth Scroll    |
| Three.js      | Optional 3D      |
| Vercel        | Deployment       |

---

# 16. FILE STRUCTURE

```txt
src/
 ├── components/
 ├── sections/
 ├── animations/
 ├── hooks/
 ├── lib/
 ├── styles/
 └── app/
```

---

# 17. ADVANCED AWWWARDS EFFECTS

---

# Recommended Premium Effects

## Magnetic Buttons

## Cursor Glow

## Noise Overlay

## Grain Texture

## Text Split Animation

## Reveal Mask Animation

## Horizontal Scroll Gallery

## Velocity Based Motion

---

# 18. FINAL UI/UX CHECKLIST

✅ Massive typography
✅ Negative spacing
✅ Cinematic imagery
✅ Glassmorphism
✅ Smooth scroll
✅ GSAP parallax
✅ Responsive layout
✅ Premium spacing
✅ Floating overlays
✅ Subtle motion
✅ Minimal UI
✅ Thin borders
✅ Blur navigation
✅ Image scale effect
✅ Elegant transitions

---

# 19. RECOMMENDED BUILD ORDER

## STEP 1

Build:

* typography
* colors
* spacing
* grid

## STEP 2

Build components:

* buttons
* cards
* navbar

## STEP 3

Build sections:

* hero
* services
* projects
* insights

## STEP 4

Add animation:

* Framer Motion
* GSAP
* Lenis

## STEP 5

Optimize:

* responsiveness
* performance
* accessibility

---

# 20. BEST IMPLEMENTATION APPROACH

To achieve EXACTLY the style shown in your images:

## Use:

* TailwindCSS
* CSS clamp()
* Framer Motion
* GSAP ScrollTrigger
* Lenis smooth scroll

## Avoid:

* Bootstrap
* excessive colors
* excessive shadows
* too many animations
* bright UI

The elegance comes from:

* restraint
* spacing
* typography
* motion timing
* image quality
