# UpdateEvalResponseBodyGuardrailConfig


## Supported Types

### `operations.UpdateEvalGuardrailConfigBoolean`

```typescript
const value: operations.UpdateEvalGuardrailConfigBoolean = {
  type: "boolean",
  value: false,
};
```

### `operations.UpdateEvalGuardrailConfigCategorical`

```typescript
const value: operations.UpdateEvalGuardrailConfigCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.UpdateEvalGuardrailConfigNumber`

```typescript
const value: operations.UpdateEvalGuardrailConfigNumber = {
  type: "number",
  value: 8160.55,
  operator: "gte",
};
```

