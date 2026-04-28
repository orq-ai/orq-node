# GetEvalsLLMGuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataBoolean`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataBoolean =
    {
      enabled: false,
      type: "boolean",
      value: true,
    };
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataCategorical`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataCategorical =
    {
      enabled: true,
      type: "categorical",
      values: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataNumber`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyDataNumber =
    {
      enabled: true,
      type: "number",
      value: 9989.86,
      operator: "eq",
    };
```

