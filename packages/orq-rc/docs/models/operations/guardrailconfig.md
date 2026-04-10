# GuardrailConfig


## Supported Types

### `operations.Boolean`

```typescript
const value: operations.Boolean = {
  enabled: false,
  type: "boolean",
  value: false,
};
```

### `operations.Categorical`

```typescript
const value: operations.Categorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
  ],
};
```

### `operations.NumberT`

```typescript
const value: operations.NumberT = {
  enabled: true,
  type: "number",
  value: 3019.07,
  operator: "gte",
};
```

