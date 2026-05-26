# GetEvalsDataEvalsResponseGuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigEvalsResponseBoolean`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponseBoolean = {
  enabled: false,
  type: "boolean",
  value: false,
};
```

### `operations.GetEvalsGuardrailConfigEvalsResponseCategorical`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponseCategorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.GetEvalsGuardrailConfigEvalsResponseNumber`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponseNumber = {
  enabled: true,
  type: "number",
  value: 743.75,
  operator: "gt",
};
```

