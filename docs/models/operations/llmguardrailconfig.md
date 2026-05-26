# LLMGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyBoolean`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyBoolean = {
    enabled: true,
    type: "boolean",
    value: false,
  };
```

### `operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyCategorical`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyCategorical = {
    enabled: true,
    type: "categorical",
    values: [
      "<value 1>",
      "<value 2>",
    ],
  };
```

### `operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsRequestRequestBodyNumber =
  {
    enabled: true,
    type: "number",
    value: 1720.89,
    operator: "gt",
  };
```

