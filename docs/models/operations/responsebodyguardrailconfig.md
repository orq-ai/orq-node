# ResponseBodyGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsResponseBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponseBoolean = {
  enabled: true,
  type: "boolean",
  value: false,
};
```

### `operations.CreateEvalGuardrailConfigEvalsResponseCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponseCategorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateEvalGuardrailConfigEvalsResponseNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigEvalsResponseNumber = {
  enabled: false,
  type: "number",
  value: 2054.81,
  operator: "ne",
};
```

