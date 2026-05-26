# UpdateEvalResponseBodyEvalsResponseGuardrailConfig


## Supported Types

### `operations.UpdateEvalGuardrailConfigEvalsResponseBoolean`

```typescript
const value: operations.UpdateEvalGuardrailConfigEvalsResponseBoolean = {
  enabled: true,
  type: "boolean",
  value: true,
};
```

### `operations.UpdateEvalGuardrailConfigEvalsResponseCategorical`

```typescript
const value: operations.UpdateEvalGuardrailConfigEvalsResponseCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.UpdateEvalGuardrailConfigEvalsResponseNumber`

```typescript
const value: operations.UpdateEvalGuardrailConfigEvalsResponseNumber = {
  enabled: false,
  type: "number",
  value: 8573.31,
  operator: "lt",
};
```

