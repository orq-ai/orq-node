# GetEvalsDataGuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigBoolean`

```typescript
const value: operations.GetEvalsGuardrailConfigBoolean = {
  type: "boolean",
  value: true,
};
```

### `operations.GetEvalsGuardrailConfigCategorical`

```typescript
const value: operations.GetEvalsGuardrailConfigCategorical = {
  type: "categorical",
  values: [
    "<value 1>",
  ],
};
```

### `operations.GetEvalsGuardrailConfigNumber`

```typescript
const value: operations.GetEvalsGuardrailConfigNumber = {
  type: "number",
  value: 5670.9,
  operator: "gte",
};
```

