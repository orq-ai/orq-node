# LLMGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsBoolean = {
  enabled: true,
  type: "boolean",
  value: false,
};
```

### `operations.CreateEvalGuardrailConfigEvalsCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateEvalGuardrailConfigEvalsNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsNumber = {
  enabled: true,
  type: "number",
  value: 5525.08,
  operator: "lte",
};
```

