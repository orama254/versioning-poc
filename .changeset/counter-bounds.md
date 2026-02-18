---
"versioning-poc": patch
---

Add min/max constraint support to Counter component

Enhanced the Counter component with optional min/max bounds:
- New optional `min` and `max` props to set counter limits
- Buttons automatically disable when bounds are reached
- Improved accessibility with context-aware aria-labels
- Visual feedback via disabled button styling (reduced opacity, no hover effects)
- Prevents counter from going out of bounds while maintaining backward compatibility

When min/max are not specified, the counter behaves exactly as before (unbounded).
