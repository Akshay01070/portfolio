---
name: Lumina Digital
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#f5f5ff'
  on-tertiary: '#283044'
  tertiary-container: '#d1d9f3'
  on-tertiary-container: '#575e75'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '900'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1280px
---

## Brand & Style
The design system is engineered for the high-end developer portfolio, emphasizing technical mastery through a "Midnight Nebula" aesthetic. It targets a sophisticated audience of tech recruiters and founders who value both architectural precision and visual flair.

The style is a fusion of **Glassmorphism** and **Minimalism**. It utilizes deep, immersive backgrounds punctuated by vibrant, glowing accents that simulate a high-performance terminal or creative IDE. The interface should feel expansive, utilizing heavy whitespace to let complex code snippets and project imagery breathe. A subtle film grain texture is overlaid across the entire UI to prevent "banding" in gradients and to provide a tactile, premium feel.

## Colors
The palette is rooted in a deep midnight foundation, utilizing high-chroma accents to guide the eye.

- **Primary (Electric Blue):** Used for interactive states, primary calls to action, and focus rings. It should feel "charged" and energetic.
- **Secondary (Soft Violet):** Used for decorative elements, secondary buttons, and as a gradient partner to the primary blue.
- **Background (Deep Midnight):** The canvas is `#020617`, providing a high-contrast base for glass layers.
- **Surface Tiers:** Use `#1E293B` with varying opacities (20%–40%) for glass panels.
- **Nebula Accents:** Large, low-opacity (10-15%) radial gradients of blue and violet should be positioned behind main content sections to create depth without sacrificing legibility.

## Typography
The typography system uses a high-contrast pairing to distinguish between "Creative Expression" and "Technical Information."

- **Headlines:** Montserrat is utilized in heavy weights (Bold/Black) to create a strong visual anchor. For the largest display sizes, apply a subtle `text-shadow` bloom effect (3px blur, same color as text at 50% opacity) to evoke a glowing screen feel.
- **Body:** Inter provides maximum legibility for project descriptions and technical blog posts.
- **Labels/Technical:** JetBrains Mono is used for tags, technology stacks, and inline code to reinforce the "Full Stack Developer" identity.

## Layout & Spacing
The layout follows a **fluid grid** model with generous margins to preserve the premium feel.

- **Desktop:** A 12-column grid with 24px gutters. Content should be centered with a maximum width of 1280px.
- **Spacing Rhythm:** Use a base 8px increment. Vertical spacing between sections should be aggressive (e.g., 120px to 160px) to maintain a minimalist, editorial pacing.
- **Mobile:** Transition to a 4-column grid with 20px side margins. Elements that are side-by-side on desktop should stack vertically to maximize readability on smaller screens.

## Elevation & Depth
Depth in this design system is created through **translucency** rather than traditional shadows.

1.  **Glass Layers:** Components sit on semi-transparent backgrounds with a `backdrop-filter: blur(12px)`.
2.  **Stroke Definition:** Instead of drop shadows, use a 1px border with a linear gradient (Top-Left to Bottom-Right). The gradient should go from white (at 15% opacity) to white (at 5% opacity) to simulate light catching the edge of a glass pane.
3.  **Active Elevation:** When an element is hovered, increase the backdrop blur and add a subtle outer glow using the Primary Electric Blue color (0px 0px 15px rgba(0, 240, 255, 0.3)).

## Shapes
The shape language is refined and "modern-tech." 

Corners are significantly rounded (0.5rem base) to contrast with the sharp, technical nature of the monospaced fonts and terminal-style content. Use `rounded-xl` (1.5rem) for large project cards and main glass containers to soften the overall aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Electric Blue to Violet gradient with white text. Secondary buttons use a transparent background with a 1px glass border.
- **Glass Cards:** The core component. Must include a `backdrop-filter: blur(16px)`, a background of `rgba(30, 41, 59, 0.4)`, and the gradient border defined in Elevation.
- **Chips/Tags:** Small JetBrains Mono labels. Use a subtle violet background at 10% opacity with a solid violet border at 30% opacity.
- **Input Fields:** Dark, recessed backgrounds (`rgba(0,0,0,0.3)`) with the Electric Blue primary color used only for the focus border and cursor.
- **Project Grid:** Hovering over a card should trigger a scale effect (1.02x) and increase the intensity of the "Nebula" light blob behind it.
- **Code Block:** Use a dedicated glass container with "Mac-style" window controls (red, yellow, green dots) in the top left to emphasize the development context.