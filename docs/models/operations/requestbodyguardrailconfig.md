# RequestBodyGuardrailConfig


## Supported Types

### `operations.GuardrailConfigBoolean`

```typescript
const value: operations.GuardrailConfigBoolean = {
  enabled: true,
  type: "boolean",
  value: false,
};
```

### `operations.GuardrailConfigCategorical`

```typescript
const value: operations.GuardrailConfigCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
  ],
};
```

### `operations.GuardrailConfigNumber`

```typescript
const value: operations.GuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 1669.19,
  operator: "lte",
};
```

