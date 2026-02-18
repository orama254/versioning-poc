---
"versioning-poc": minor
---

Add `useLocalStorage` hook for generic localStorage persistence

This new hook provides a reusable way to persist and sync state with browser localStorage. It includes:
- Type-safe state management with generics
- Automatic serialization/deserialization of values
- Error handling for localStorage unavailability
- Callback to remove values from storage
- Consistent API with existing `useTheme` hook

Usage: `const [value, setValue, removeValue] = useLocalStorage('key', initialValue)`
