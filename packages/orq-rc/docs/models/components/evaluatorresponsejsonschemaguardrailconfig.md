# EvaluatorResponseJsonSchemaGuardrailConfig


## Supported Types

### `components.GuardrailConfigBoolean`

```typescript
const value: components.GuardrailConfigBoolean = {
  type: "boolean",
  value: true,
};
```

### `components.GuardrailConfigCategorical`

```typescript
const value: components.GuardrailConfigCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `components.GuardrailConfigNumber`

```typescript
const value: components.GuardrailConfigNumber = {
  type: "number",
  value: 8372.37,
  operator: "ne",
};
```

