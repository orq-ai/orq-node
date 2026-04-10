# CreateEvalLLMGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsRequestBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestBoolean = {
  enabled: false,
  type: "boolean",
  value: false,
};
```

### `operations.CreateEvalGuardrailConfigEvalsRequestCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestCategorical = {
  enabled: false,
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
  enabled: false,
  type: "number",
  value: 1153.09,
  operator: "ne",
};
```

