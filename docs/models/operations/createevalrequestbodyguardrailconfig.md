# CreateEvalRequestBodyGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigBoolean`

```typescript
const value: operations.CreateEvalGuardrailConfigBoolean = {
  enabled: true,
  type: "boolean",
  value: true,
};
```

### `operations.CreateEvalGuardrailConfigCategorical`

```typescript
const value: operations.CreateEvalGuardrailConfigCategorical = {
  enabled: false,
  type: "categorical",
  values: [],
};
```

### `operations.CreateEvalGuardrailConfigNumber`

```typescript
const value: operations.CreateEvalGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 6015.03,
  operator: "lt",
};
```

