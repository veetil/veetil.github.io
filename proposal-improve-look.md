# Proposal: Improve Projects Page Layout

## Current Issues Identified

1. **Excessive margins**: Too much left and right margin wasting valuable screen space
2. **Title wrapping**: Project titles breaking across multiple lines (11 lines in extreme cases)
3. **Poor text readability**: Descriptions getting squeezed into narrow columns
4. **Inefficient space usage**: Large gaps between project cards
5. **Inconsistent card heights**: Creating visual misalignment

## Proposed Solutions

### 1. Responsive Grid Layout Improvements

#### Current State:
- 3-column grid that's too narrow
- Fixed card width causing excessive line breaks
- Large container margins

#### Proposed Changes: 1-Column vs 2-Column Analysis

## 🏆 RECOMMENDATION: 2-Column Layout

After analyzing both options, **2-column layout is recommended** for the following reasons:

### Option A: 1-Column Layout

**Pros:**
- Maximum space for titles and descriptions
- No title wrapping issues at all
- Easiest to read and scan
- Works perfectly on all screen sizes
- Great for detailed project descriptions

**Cons:**
- Requires more scrolling to see all projects
- May feel too sparse on large screens
- Less visual variety
- Underutilizes wide screens

### Option B: 2-Column Layout (RECOMMENDED) ✓

**Pros:**
- **Perfect balance** between content visibility and scrolling
- **Titles can comfortably fit** without extreme wrapping
- **Better use of screen space** on desktop/laptop
- **More projects visible** above the fold
- **Maintains visual interest** with good spacing
- **Natural reading pattern** (left-to-right, top-to-bottom)

**Cons:**
- Some longer titles may still wrap (but only 2-3 lines max)
- Slightly more complex responsive behavior

#### Responsive Breakpoints for 2-Column:
```
Desktop (1024px+): 
- 2-column grid with comfortable spacing
- Container max-width: 1200-1400px
- Card width: ~550-650px each
- Gap: 3-4rem between columns

Tablet (768px-1023px):
- Single column layout (same as mobile)
- Better readability on tablets

Mobile (< 768px):
- Single column layout
- Full-width cards with padding
```

### Visual Comparison for Desktop Only:

#### 1-Column Desktop Layout:
```
|------------------Card 1------------------|
|   Title (full width, no wrapping)        |
|   Description with plenty of space...     |
|------------------------------------------|

|------------------Card 2------------------|
|   Title (full width, no wrapping)        |
|   Description with plenty of space...     |
|------------------------------------------|
```

#### 2-Column Desktop Layout (RECOMMENDED):
```
|-------Card 1-------|  |-------Card 2-------|
| Title (may wrap    |  | Title (may wrap    |
| 2-3 lines)         |  | 2-3 lines)         |
| Description...     |  | Description...     |
|--------------------|  |--------------------|

|-------Card 3-------|  |-------Card 4-------|
| Title (may wrap    |  | Title (may wrap    |
| 2-3 lines)         |  | 2-3 lines)         |
| Description...     |  | Description...     |
|--------------------|  |--------------------|
```

### Why 2-Column Wins for Desktop:

1. **Screen Efficiency**: With 10 projects, 1-column requires scrolling through 10 full-width cards. 2-column shows 4-6 projects in initial viewport.

2. **Professional Appearance**: 2-column creates a gallery-like presentation that's standard for portfolio sites.

3. **Title Length**: Your longest title "Developing and PreTraining Large Language Models From Scratch: Scaling, Optimization, and Performance Analysis" would wrap to 2-3 lines in 2-column (acceptable) vs being a single long line in 1-column (wastes vertical space).

4. **Future Scalability**: As you add more projects, 2-column prevents endless scrolling.

5. **Visual Hierarchy**: 2-column allows eyes to scan and compare projects more easily.

### 2. Card Design Optimization

#### A. Title Treatment
- **Increase title font size** slightly (current appears too small)
- **Limit title to 3-4 lines max** with proper line-height
- **Add ellipsis** for extremely long titles with full title on hover
- **Better hyphenation** rules to avoid awkward breaks

#### B. Card Dimensions
- **Set min-height** for cards to ensure alignment
- **Increase card width** by ~20-30% on desktop
- **Optimize aspect ratio** for better visual balance

#### C. Typography Improvements
- **Increase line-height** for better readability (1.6 for descriptions)
- **Slightly larger description font** (from ~14px to 15-16px)
- **Better text color contrast** for descriptions

### 3. Specific CSS Recommendations for 2-Column Layout

```scss
// Container adjustments
.container {
  max-width: 1400px; // Up from ~1100px
  padding: 0 3rem;   // Good padding for 2-column
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}

// Grid improvements for 2-column
.projects .grid {
  display: grid;
  gap: 3rem 4rem;    // Vertical and horizontal gap
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);  // 2 columns on desktop
  }
  
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;  // Single column on tablet/mobile
    gap: 2rem;
  }
}

// Card styling
.card {
  min-height: 420px;  // Ensure consistent height
  
  .card-title {
    font-size: 1.25rem; // Slightly larger
    line-height: 1.4;
    max-height: 4.2em;  // ~3 lines
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  
  .card-text {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;        // Better contrast
  }
}
```

### 4. Layout Comparison

#### Before (3-column):
- Container: ~1100px with 15% margins
- Cards: ~280px wide
- Title space: Unlimited (causing 11-line titles)
- Grid gap: Inconsistent
- Projects visible: 3 per row

#### After (2-column):
- Container: 1400px with ~200px total margins
- Cards: ~600px wide (114% increase!)
- Title space: Max 2-3 lines (much better)
- Grid gap: Consistent 3rem/4rem
- Projects visible: 2 per row (but much more readable)

### 5. Additional Enhancements

1. **Image optimization**:
   - Ensure all project images have consistent aspect ratios
   - Add subtle hover effects for better interactivity

2. **Card hover state**:
   - Slight shadow elevation on hover
   - Smooth transitions for professional feel

3. **Category section**:
   - Better visual separation between "work" and other categories
   - Sticky category headers on scroll

### 6. Mobile-First Considerations

- Ensure touch targets are adequate (min 44px)
- Optimize font sizes for mobile readability
- Consider lazy loading for images
- Test on various viewport sizes

### 7. Performance Impact

- Minimal - mostly CSS changes
- No JavaScript modifications needed
- Maintains current Jekyll structure
- Compatible with existing al-folio theme

## Implementation Priority

1. **High Priority**: Container width and margins
2. **High Priority**: Title truncation and typography
3. **Medium Priority**: Card dimensions and spacing
4. **Low Priority**: Hover effects and animations

## Expected Outcomes with 2-Column Layout

- **114% wider cards** (from ~280px to ~600px)
- **Titles reduced from 11 lines to 2-3 lines maximum**
- **Better readability** with optimized typography and spacing
- **Professional portfolio appearance** with consistent card heights
- **Improved mobile experience** with single column on all devices <1024px
- **Reduced cognitive load** with scannable 2-column grid
- **4-6 projects visible** on initial desktop viewport (vs current 3)
- **Future-proof** as you add more projects

## Testing Recommendations

1. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
2. Verify responsive breakpoints on actual devices
3. Check accessibility (color contrast, keyboard navigation)
4. Validate with long and short content variations
5. Ensure compatibility with dark mode if enabled

---

This proposal maintains the elegant al-folio aesthetic while significantly improving usability and content presentation. The changes are incremental and reversible, allowing for A/B testing if desired.