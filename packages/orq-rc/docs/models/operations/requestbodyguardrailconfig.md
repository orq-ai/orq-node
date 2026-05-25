# RequestBodyGuardrailConfig


## Supported Types

### `operations.GuardrailConfigBoolean`

```typescript
const value: operations.GuardrailConfigBoolean = {
  type: "boolean",
  value: true,
};
```

### `operations.GuardrailConfigCategorical`

```typescript
const value: operations.GuardrailConfigCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.GuardrailConfigNumber`

```typescript
const value: operations.GuardrailConfigNumber = {
  type: "number",
  value: 8372.37,
  operator: "ne",
};
```

