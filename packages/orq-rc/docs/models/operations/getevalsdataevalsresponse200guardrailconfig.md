# GetEvalsDataEvalsResponse200GuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigEvalsResponse200Boolean`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponse200Boolean = {
  enabled: false,
  type: "boolean",
  value: true,
};
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200Categorical`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponse200Categorical = {
  enabled: true,
  type: "categorical",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200Number`

```typescript
const value: operations.GetEvalsGuardrailConfigEvalsResponse200Number = {
  enabled: true,
  type: "number",
  value: 4713.21,
  operator: "lt",
};
```

