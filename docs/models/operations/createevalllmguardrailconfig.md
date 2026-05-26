# CreateEvalLLMGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsRequestBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestBoolean = {
  type: "boolean",
  value: false,
};
```

### `operations.CreateEvalGuardrailConfigEvalsRequestCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateEvalGuardrailConfigEvalsRequestNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestNumber = {
  type: "number",
  value: 7107.94,
  operator: "eq",
};
```

