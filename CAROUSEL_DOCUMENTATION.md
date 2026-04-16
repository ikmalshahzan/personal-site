# SkillsCarousel Component Documentation

## Overview
A smooth, auto-scrolling horizontal carousel component with fade-in/fade-out transitions on the edges and hover tooltips. Perfect for displaying skills, technologies, or any list of items in an infinite loop.

## Features
✨ **Auto-Scrolling** - Continuously scrolls horizontally at a steady, customizable pace
✨ **Fade Effects** - Smooth gradient overlays on left and right edges create an illusion of items fading in and out
✨ **Infinite Loop** - Seamlessly repeats items for endless scrolling
✨ **Hover Tooltips** - Displays skill details when hovering over any item
✨ **Responsive Design** - Adapts beautifully to mobile, tablet, and desktop screens
✨ **Smooth Animations** - Uses CSS transitions and React animations for polished UX
✨ **Customizable Speed** - Control the scroll speed via props

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | Array | `[]` | Array of skill objects to display |
| `speed` | Number | `30` | Scroll animation speed in milliseconds (lower = faster) |

## Item Object Structure

Each item in the `items` array should have this structure:

```javascript
{
  name: string,           // Required: Name of the skill
  icon: string,          // Optional: Emoji or icon to display
  pct: number,           // Optional: Proficiency percentage (0-100)
  description: string    // Optional: Tooltip description text
}
```

## Basic Usage

### Simple Implementation
```jsx
import SkillsCarousel from './components/SkillsCarousel';

const skills = [
  { name: 'React', icon: '⚛️', pct: 95 },
  { name: 'JavaScript', icon: '📝', pct: 92 },
  { name: 'CSS', icon: '🎨', pct: 90 },
];

function App() {
  return <SkillsCarousel items={skills} speed={30} />;
}
```

### With Your Existing Data
```jsx
import SkillsCarousel from './components/SkillsCarousel';
import { skills } from './data';

const skillsWithIcons = skills.map((skill) => ({
  ...skill,
  icon: getIcon(skill.name), // Your icon mapping function
}));

function SkillsSection() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <SkillsCarousel items={skillsWithIcons} speed={30} />
    </section>
  );
}
```

## Customization

### Adjust Scroll Speed
```jsx
// Slower scroll (more time to see each item)
<SkillsCarousel items={skills} speed={50} />

// Faster scroll (quick pace)
<SkillsCarousel items={skills} speed={15} />
```

### Styling
The component uses CSS custom properties and can be styled by:

1. **Modifying the CSS file** (`SkillsCarousel.css`)
2. **Adding wrapper styles** around the component
3. **Using CSS variables** (if added to the CSS)

### Key CSS Classes for Customization
- `.skills-carousel-wrapper` - Main container
- `.carousel-item` - Individual skill item
- `.skill-card` - Card styling around each item
- `.carousel-fade-left` / `.carousel-fade-right` - Fade overlay effects
- `.carousel-tooltip` - Tooltip styling

## Styling Examples

### Change Fade Effect Colors
Edit `SkillsCarousel.css`:
```css
.carousel-fade-left {
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
```

### Adjust Card Styling
```css
.skill-card {
  background: rgba(100, 150, 255, 0.1);
  border: 2px solid rgba(100, 150, 255, 0.3);
}
```

### Change Tooltip Position
```css
.carousel-tooltip {
  bottom: -100px; /* Move tooltip further down */
}
```

## Performance Tips
- The component handles large lists efficiently by not rendering off-screen items
- Uses `requestAnimationFrame` for smooth animations
- Scrolling is optimized with CSS transforms
- Tooltips are only rendered when hovering (conditional rendering)

## Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 13+)
- IE: Not supported

## Accessibility
- Hover tooltips provide context for each skill
- The component maintains semantic HTML structure
- Keyboard interaction is supported on scroll container

## Examples

### With Proficiency Levels
```jsx
<SkillsCarousel 
  items={[
    { name: 'React', icon: '⚛️', pct: 95 },
    { name: 'Vue', icon: '💚', pct: 80 },
  ]} 
  speed={30} 
/>
```

### With Descriptions
```jsx
<SkillsCarousel 
  items={[
    { 
      name: 'Python', 
      icon: '🐍', 
      pct: 90,
      description: 'Expert in data science and web development'
    },
  ]} 
  speed={25} 
/>
```

## Responsive Behavior
The component automatically adjusts for different screen sizes:
- **Desktop**: Full-sized cards with proper spacing
- **Tablet**: Slightly smaller cards, adjusted padding
- **Mobile**: Compact view with optimized sizing

Breakpoints:
- 768px and below: Tablet mode
- 480px and below: Mobile mode

## Troubleshooting

### Component not scrolling?
- Ensure `items` array is populated with data
- Check that each item has required fields (at minimum `name`)
- Verify CSS file is imported correctly

### Scrolling too fast/slow?
- Adjust the `speed` prop (lower values = faster)
- Default speed of 30ms works well for most cases

### Tooltips not showing?
- Ensure items have `name` or other display properties
- Check CSS file is imported properly
- Verify `pct` or `description` properties exist in items

## Files Included
- `SkillsCarousel.jsx` - React component
- `SkillsCarousel.css` - Component styling
- `SkillsCarouselExample.jsx` - Example usage
- This documentation file

## Future Enhancements
Possible improvements:
- Pause scrolling on hover
- Navigation arrows/buttons
- Lazy loading for very large lists
- Custom animation easing
- Vertical carousel mode
- Touch swipe support on mobile
