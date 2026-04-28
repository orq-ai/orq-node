# CreateEvalLLMEvalsResponseGuardrailConfig


## Supported Types

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMBoolean`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMBoolean =
    {
      enabled: false,
      type: "boolean",
      value: false,
    };
```

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMCategorical`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMCategorical =
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

### `operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMNumber`

```typescript
const value:
  operations.CreateEvalGuardrailConfigEvalsResponse200ApplicationJSONResponseBody1LLMNumber =
    {
      enabled: true,
      type: "number",
      value: 7065,
      operator: "lt",
    };
```

