# GuardrailConfig


## Supported Types

### `operations.Boolean`

```typescript
const value: operations.Boolean = {
  type: "boolean",
  value: false,
};
```

### `operations.Categorical`

```typescript
const value: operations.Categorical = {
  type: "categorical",
  values: [
    "<value 1>",
  ],
};
```

### `operations.NumberT`

```typescript
const value: operations.NumberT = {
  type: "number",
  value: 3883.98,
  operator: "ne",
};
```

