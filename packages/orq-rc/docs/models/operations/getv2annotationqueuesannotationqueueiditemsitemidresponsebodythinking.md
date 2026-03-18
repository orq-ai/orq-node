# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyThinking

Configuration for thinking mode. Use `adaptive` for models that support it (e.g. Claude Opus 4.6, Sonnet 4.6), or `enabled` with `budget_tokens` for manual control.


## Supported Types

### `components.ThinkingConfigDisabledSchema`

```typescript
const value: components.ThinkingConfigDisabledSchema = {
  type: "disabled",
};
```

### `components.ThinkingConfigEnabledSchema`

```typescript
const value: components.ThinkingConfigEnabledSchema = {
  type: "enabled",
  budgetTokens: 4958.21,
};
```

### `components.ThinkingConfigAdaptiveSchema`

```typescript
const value: components.ThinkingConfigAdaptiveSchema = {
  type: "adaptive",
};
```

