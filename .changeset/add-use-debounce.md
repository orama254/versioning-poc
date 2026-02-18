---
"versioning-poc": minor
---

Add `useDebounce` hook for performance optimization

A new reusable hook for debouncing values with configurable delay. Perfect for:
- Debouncing search inputs to reduce API calls
- Optimizing resize/scroll event handlers
- Auto-save functionality with delayed persistence
- Filtering with delayed updates

Usage: `const debouncedValue = useDebounce(value, delayMs)`

Features:
- Type-safe with generic support for any value type
- Default 500ms delay, customizable per use case
- Automatic cleanup of timeouts on unmount or value change
- Zero external dependencies
