# Model

The primary language model that powers the agent. Can be a simple string (e.g., "anthropic/claude-3-sonnet-20240229") or an object with model ID and parameters.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.Model2`

```typescript
const value: operations.Model2 = {
  id: "<id>",
};
```

