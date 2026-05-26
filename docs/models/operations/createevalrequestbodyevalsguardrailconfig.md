# CreateEvalRequestBodyEvalsGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsBoolean = {
  type: "boolean",
  value: true,
};
```

### `operations.CreateEvalGuardrailConfigEvalsCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsCategorical = {
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
  type: "number",
  value: 2626.43,
  operator: "gte",
};
```

