# Framer Motion Migration

## Overview
This document outlines the migration from CSS-based fade-up animations with IntersectionObserver to **Framer Motion**, a declarative animation library with better React integration and performance.

## Why Framer Motion?
- **Declarative API**: Animations are defined as component properties, not CSS classes
- **Better React Integration**: Native support for React lifecycle and hooks
- **Performance**: Uses GPU-accelerated transforms and optimized re-renders
- **Cleaner Code**: Reduces complexity of managing DOM state with IntersectionObserver
- **Selective Imports**: Only imports what's needed, keeping bundle size minimal

## Bundle Size Impact
- **Framer Motion v11**: ~40KB (gzipped ~13KB)
- **Previous CSS + IntersectionObserver approach**: ~5KB
- **Net Increase**: ~8-10KB (well under 50KB threshold)

## Components Updated

### 1. **Hero.jsx**
- Replaced `fade-up` classes with `motion.div` components
- Implemented staggered animation using `variants` and `staggerChildren`
- Uses `animate="visible"` for immediate visibility on initial load

### 2. **Expertise.jsx**
- Grid cards now animate with stagger effect
- Uses `whileInView` to trigger animations when scrolling into view
- Each expertise card has a 0.08s stagger delay

### 3. **Skills.jsx**
- Section labels and carousel animate on scroll
- Maintains smooth performance for carousel component

### 4. **Experience.jsx**
- Timeline items animate sequentially as user scrolls
- 0.12s stagger between timeline items
- Headers animate separately with custom delays

### 5. **Contact.jsx**
- Contact box animates on scroll
- Contact links animate with stagger
- Smooth reveal of all elements

### 6. **App.jsx**
- Expertise section headers animated with Framer Motion
- Removed `useFadeUp()` hook call
- Now using motion components for all section animations

## Key Implementation Details

### Animation Variants
All animations use consistent patterns:
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};
```

### Container Patterns
Staggered animations for multiple children:
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};
```

### Viewport Triggers
Using `whileInView` with `viewport` prop for scroll-triggered animations:
```jsx
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.12 }}
```

## Migration Checklist
- [x] Install Framer Motion dependency
- [x] Update Hero component
- [x] Update Expertise component
- [x] Update Skills component
- [x] Update Experience component
- [x] Update Contact component
- [x] Update App component
- [x] Remove useFadeUp hook from hooks.js
- [x] Remove CSS fade-up styles from index.css
- [x] Create reusable motion components (MotionDiv, MotionContainer)

## Reusable Motion Components

### MotionDiv
A simple motion wrapper for single elements with fade-up animation:
```jsx
import MotionDiv from './components/MotionDiv.jsx';

<MotionDiv delay={0.2}>
  Content here
</MotionDiv>
```

### MotionContainer
A container for staggered animations of children:
```jsx
import MotionContainer from './components/MotionContainer.jsx';

<MotionContainer staggerDelay={0.1}>
  {items.map(item => <MotionDiv key={item.id}>{item.name}</MotionDiv>)}
</MotionContainer>
```

## Performance Notes
- All animations use GPU-accelerated transforms (opacity and transform)
- Animations respect `prefers-reduced-motion` by default
- Only animates when viewport is visible (`viewport={{ once: true }}`)
- No layout shifts during animations

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard CSS transforms and transitions under the hood
- No IE11 support (matches Vite + React 18 target)

## Future Improvements
- Consider `AnimatePresence` for exit animations when components unmount
- Add page transition animations
- Implement gesture-based animations for interactive elements
- Add scroll-linked animations for hero section

## Rollback Plan
If needed to revert:
1. Restore CSS fade-up styles from index.css
2. Restore useFadeUp hook in hooks.js
3. Remove Framer Motion imports from all components
4. Change all `motion.div` back to regular `div`
5. Add `fade-up` className back to elements
