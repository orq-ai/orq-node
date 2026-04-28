# DataGuardrailConfig


## Supported Types

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyBoolean`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyBoolean =
    {
      enabled: true,
      type: "boolean",
      value: false,
    };
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyCategorical`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyCategorical =
    {
      enabled: true,
      type: "categorical",
      values: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

### `operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyNumber`

```typescript
const value:
  operations.GetEvalsGuardrailConfigEvalsResponse200ApplicationJSONResponseBodyNumber =
    {
      enabled: false,
      type: "number",
      value: 2899.83,
      operator: "ne",
    };
```

