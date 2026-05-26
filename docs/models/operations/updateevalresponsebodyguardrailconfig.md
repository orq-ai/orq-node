# UpdateEvalResponseBodyGuardrailConfig


## Supported Types

### `operations.UpdateEvalGuardrailConfigBoolean`

```typescript
const value: operations.UpdateEvalGuardrailConfigBoolean = {
  enabled: false,
  type: "boolean",
  value: false,
};
```

### `operations.UpdateEvalGuardrailConfigCategorical`

```typescript
const value: operations.UpdateEvalGuardrailConfigCategorical = {
  enabled: false,
  type: "categorical",
  values: [
    "<value 1>",
  ],
};
```

### `operations.UpdateEvalGuardrailConfigNumber`

```typescript
const value: operations.UpdateEvalGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 5351.48,
  operator: "ne",
};
```

