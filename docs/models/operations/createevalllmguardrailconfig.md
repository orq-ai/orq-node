# CreateEvalLLMGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigBoolean = {
  type: "boolean",
  value: true,
};
```

### `operations.CreateEvalGuardrailConfigCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateEvalGuardrailConfigNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigNumber = {
  type: "number",
  value: 6592.55,
  operator: "gte",
};
```

