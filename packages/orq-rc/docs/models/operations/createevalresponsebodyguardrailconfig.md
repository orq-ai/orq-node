# CreateEvalResponseBodyGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsResponse200Boolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponse200Boolean = {
  enabled: true,
  type: "boolean",
  value: false,
};
```

### `operations.CreateEvalGuardrailConfigEvalsResponse200Categorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponse200Categorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateEvalGuardrailConfigEvalsResponse200Number`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponse200Number = {
  enabled: false,
  type: "number",
  value: 1990.03,
  operator: "gt",
};
```

