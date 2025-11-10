# Responzívne Správanie - Popis Adaptácie Prvkov

## Breakpoints Overview

Stránka je optimalizovaná pre 4 hlavné breakpointy:

1. **550px** - Malé mobilné zariadenia (smartphones portrait)
2. **850px** - Väčšie smartfóny a menšie tablety
3. **1250px** - Notebooky a menšie desktopy
4. **1400px+** - Veľké obrazovky a monitory

Dynamické CSS načítanie pre špeciálne breakpointy:
- 700px, 900px, 1300px, 1600px (progressive enhancement)

## Globálne Zmeny

### Typography
- **< 550px:** font-size: 14px (base)
- **550px - 1400px:** font-size: 16px (base)
- **1400px+:** font-size: 18px (base)

Všetky veľkosti založené na rem jednotkách sa škálujú proporcionálne.

### Spacing
- **< 550px:** Kompaktné spacing (0.5rem - 1rem)
- **550px - 1250px:** Štandardné spacing (1rem - 2rem)
- **1250px+:** Priestorné spacing (1.5rem - 3rem)

### Main Content
- **< 550px:** padding: 1rem
- **550px+:** padding: 2rem
- Max-width: 1600px (centrované)

## Navigácia

### Desktop Mode (> 850px)
- Horizontálne menu, vždy viditeľné
- Logo vľavo, navigácia vpravo
- Hover efekty: border glow, background tint
- Flexbox: justify-content space-between

### Mobile Mode (≤ 850px)
- Hamburger menu ikona (3 čiary)
- Navigácia skrytá by default
- Klik na hamburger: slide-in animácia
- Vertikálny stack linkov
- Full-width menu overlay
- Klik mimo menu: zatvára sa

Animácia:
```
transform: translateY(-100%) → translateY(0)
opacity: 0 → 1
transition: 0.3s ease
```

## Stránka: Záľuby členov tímu

### Grid Behavior

**1400px+:**
- 4 stĺpce (repeat(4, 1fr))
- Gap: 2rem
- Karty: ~350px min-width

**1250px - 1400px:**
- 3-4 stĺpce (auto-fit minmax(350px, 1fr))
- Gap: 2rem

**850px - 1250px:**
- 3 stĺpce (repeat(3, 1fr))
- Gap: 1.5rem
- Karty: užšie

**550px - 850px:**
- 2 stĺpce (repeat(2, 1fr))
- Gap: 1.5rem
- Karty: stredná šírka

**< 550px:**
- 1 stĺpec (1fr)
- Gap: 1rem
- Karty: full-width

### Card Adaptation

**Desktop (> 1250px):**
- Hover: translateY(-5px), scale(1.02)
- Box-shadow: large glow
- Ikona: 120px výška
- Padding: 1.5rem
- Font-size: štandardná

**Tablet (850px - 1250px):**
- Hover: translateY(-3px)
- Redukovaný glow
- Ikona: 100px
- Padding: 1.25rem

**Mobile (< 850px):**
- Bez hover efektov (touch)
- Tap feedback: active state
- Ikona: 80px
- Padding: 1rem
- Menší font

## Stránka: Rozloženie

### Grid Template Areas

**Desktop (> 850px):**
```css
grid-template-areas:
  "header header sidebar"
  "main   main   sidebar"
  "footer footer footer";
grid-template-columns: 1fr 1fr 300px;
```

**Mobile (≤ 850px):**
```css
grid-template-areas:
  "header"
  "main"
  "sidebar"
  "footer";
grid-template-columns: 1fr;
```

### Sidebar Behavior

**Desktop:**
- Fixed width: 250px
- Viditeľný napravo
- Progress bars: full width
- Sticky position (optional)

**Mobile:**
- Full width
- Presunie sa pod main content
- Progress bars: zachované
- Kompaktnejší layout

### Content Blocks

**Desktop:**
- Flexbox row
- 3 bloky vedľa seba
- Equal width (flex: 1)

**Mobile:**
- Flexbox column
- Bloky pod sebou
- Full width každý

## Stránka: Zmeny

### Grid for Change Cards

**1250px+:**
- 2 stĺpce (repeat(2, 1fr))
- Gap: 2rem
- Cards: polovičná šírka

**< 1250px:**
- 1 stĺpec (1fr)
- Gap: 1.5rem
- Cards: full-width

### Size Controls

**Desktop:**
- Flexbox row
- All controls inline
- Keyboard hint: visible na konci
- justify-content: flex-start s gap

**Mobile (< 550px):**
- Flexbox column
- Controls stack vertically
- Buttons: full width
- Keyboard hint: centered alebo skrytý

### Dynamic Content Sizing

Ovládané cez JavaScript (ui.js):

**Small size:**
- font-size: 0.875rem
- padding: 1rem
- Aplikuje sa automaticky na < 550px

**Medium size (default):**
- font-size: 1rem
- padding: 1.5rem
- Default pre 550px - 850px

**Large size:**
- font-size: 1.25rem
- padding: 2rem
- User-selectable

Window resize trigger:
- Width ≤ 550px → auto "small"
- Width 550px - 850px → auto "medium"
- User môže override

## Footer

### Desktop:
- Flexbox row
- justify-content: space-between
- Info vľavo, links vpravo
- Padding: 2rem

### Tablet:
- Flexbox row, môže wrapiť
- Gap medzi elementmi
- Padding: 1.5rem

### Mobile:
- Flexbox column
- Text-align: center
- Elementy stacknuté
- Padding: 1rem

## Progresívne CSS Enhancement

### responsive-loader.js Správanie

JavaScript detekuje šírku okna a načíta príslušný CSS:

**Width ≥ 1600px:** breakpoint-1600px.css
- Najintenzívnejšie efekty
- 3D transforms
- Multiple shadows
- Gradient backgrounds

**Width 1300px - 1599px:** breakpoint-1300px.css
- Pokročilé efekty
- Transform perspective
- Enhanced filters

**Width 900px - 1299px:** breakpoint-900px.css
- Stredné efekty
- Radial gradients
- Moderate shadows

**Width 700px - 899px:** breakpoint-700px.css
- Základné efekty
- Linear gradients
- Light shadows

**Width < 700px:** Žiadny extra CSS
- Len base styles
- Minimal effects
- Optimalizované pre mobilný výkon

### Resize Handling

- Debounce: 100ms
- Načítanie CSS len pri prechode breakpointu
- Unload starého CSS pri zmene
- Link element dynamicky pridaný/odobraný

## Touch vs. Mouse Optimalizácia

### Desktop (myš):
- Hover efekty aktívne
- Cursor: pointer na interaktívnych elementoch
- Focus states pre keyboard

### Mobile (touch):
- Hover efekty deaktivované
- Tap highlight: -webkit-tap-highlight-color
- Väčšie touch targets (min 44x44px)
- Active states namiesto hover

## Accessibility Adaptations

### Screen Reader Support:
- Semantic HTML zachované na všetkých veľkostiach
- ARIA labels konzistentné
- Skip links (optional)

### Keyboard Navigation:
- Focus indicators viditeľné
- Tab order logický
- Ctrl+E shortcut funguje na všetkých veľkostiach

### Reduced Motion:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

Aplikované na:
- Status indicators
- Card hover animations
- Transitions

## Obrázky a Ikony

### Icon Placeholders:
- **Desktop:** 120px výška, large font
- **Tablet:** 100px výška
- **Mobile:** 80px výška

Responsive scaling cez percentá namiesto fixed values.

## Performance Optimalizácie

### CSS:
- Separate breakpoint files → lazy loading
- Will-change property pre animácie
- Transform a opacity pre GPU acceleration

### JavaScript:
- Debounced resize handlers
- Event delegation
- JSON fetch s error handling

### Layout:
- Flexbox/Grid namiesto float
- CSS containment kde možné
- Minimal reflows
