# GetEvalsDataGuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigBoolean`

```typescript
const value: operations.GetEvalsGuardrailConfigBoolean = {
  enabled: true,
  type: "boolean",
  value: true,
};
```

### `operations.GetEvalsGuardrailConfigCategorical`

```typescript
const value: operations.GetEvalsGuardrailConfigCategorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.GetEvalsGuardrailConfigNumber`

```typescript
const value: operations.GetEvalsGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 5875.17,
  operator: "lt",
};
```

