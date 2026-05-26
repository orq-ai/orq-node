# UpdateEvalLLMGuardrailConfig


## Supported Types

### `operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Boolean`

```typescript
const value:
  operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Boolean =
    {
      enabled: false,
      type: "boolean",
      value: false,
    };
```

### `operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Categorical`

```typescript
const value:
  operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Categorical =
    {
      enabled: true,
      type: "categorical",
      values: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    };
```

### `operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Number`

```typescript
const value:
  operations.UpdateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1Number =
    {
      enabled: false,
      type: "number",
      value: 2064.58,
      operator: "eq",
    };
```

