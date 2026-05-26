# CreateEvalResponseBodyEvalsResponseGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyBoolean`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyBoolean =
    {
      enabled: false,
      type: "boolean",
      value: true,
    };
```

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyCategorical`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyCategorical =
    {
      enabled: false,
      type: "categorical",
      values: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyNumber`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyNumber =
    {
      enabled: true,
      type: "number",
      value: 5119.87,
      operator: "ne",
    };
```

