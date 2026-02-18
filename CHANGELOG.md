# versioning-poc

## 2.5.0

### Minor Changes

- [`e086849`](https://github.com/orama254/versioning-poc/commit/e0868491876505b09d455505298b2c8e28f9ac89) Thanks [@orama254](https://github.com/orama254)! - Add `useDebounce` hook for performance optimization

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

## 2.4.0

### Minor Changes

- [`b1308fa`](https://github.com/orama254/versioning-poc/commit/b1308fa16db98c03d76091468a8523fbc1d7ecac) Thanks [@orama254](https://github.com/orama254)! - Add step options to allow custom counter steps

## 2.3.1

### Patch Changes

- [`8a7763a`](https://github.com/orama254/versioning-poc/commit/8a7763afe186fb03b70ec613ba8d6ab62c16f9ce) Thanks [@orama254](https://github.com/orama254)! - remove unused imports which fail during CI-CD

## 2.3.0

### Minor Changes

- [`a1edacd`](https://github.com/orama254/versioning-poc/commit/a1edacd1564453ef3d0a3439f6158da34a5e30e7) Thanks [@orama254](https://github.com/orama254)! - Add `useLocalStorage` hook for generic localStorage persistence

  This new hook provides a reusable way to persist and sync state with browser localStorage. It includes:

  - Type-safe state management with generics
  - Automatic serialization/deserialization of values
  - Error handling for localStorage unavailability
  - Callback to remove values from storage
  - Consistent API with existing `useTheme` hook

  Usage: `const [value, setValue, removeValue] = useLocalStorage('key', initialValue)`

- [`b16ea12`](https://github.com/orama254/versioning-poc/commit/b16ea1218a28068c925d7d85312056e9c3c1172f) Thanks [@orama254](https://github.com/orama254)! - minor change to the codebase to simulate the minor verisoning on ci-cd

## 2.2.2

### Patch Changes

- [`6e3891e`](https://github.com/orama254/versioning-poc/commit/6e3891e80be37e751399639f6831cbc978fc8645) Thanks [@orama254](https://github.com/orama254)! - small cosmetic patch on the ci-cd workflow

## 2.2.1

### Patch Changes

- [`63bf4d5`](https://github.com/orama254/versioning-poc/commit/63bf4d5b1b1941d763f02c29b929551197d0c5c2) Thanks [@orama254](https://github.com/orama254)! - patch bump

## 2.2.0

### Minor Changes

- Refactor the app version format on the main page

## 2.1.1

### Patch Changes

- [`af2bc1d`](https://github.com/orama254/versioning-poc/commit/af2bc1d579ef37f42dcbd470e925977b4a8d9c3b) Thanks [@orama254](https://github.com/orama254)! - small patch update for the codebase

## 2.1.0

### Minor Changes

- Add application versioning to display at on the application

## 2.0.0

### Major Changes

- [`8f1f64a`](https://github.com/orama254/versioning-poc/commit/8f1f64a457e665191cca95129928720ce4d321c3) Thanks [@orama254](https://github.com/orama254)! - Add artifact deployment workflow

## 1.0.1

### Patch Changes

- Add edits to the main page on the tabs. Remove icons from the tabs

## 1.0.0

### Major Changes

- BREAKING: Restructure app to use tab-based navigation layout. The inline counter has been replaced with a new Counter component that accepts props (initialValue, step, label, onCountChange). The flat page layout has been replaced with a Tabs component. Consumers relying on the previous layout structure will need to update.

## 0.2.0

### Minor Changes

- Add time-of-day greeting banner that displays a contextual welcome message

## 0.1.0

### Minor Changes

- f6db6c8: Added a theme toggle switch to the project for dark and light themes

### Patch Changes

- 779eb97: A stylistic patch to the project to evaluate changeset version bumps
- 8236f76: make dummy patch change to project
