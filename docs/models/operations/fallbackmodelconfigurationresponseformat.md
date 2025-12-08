# FallbackModelConfigurationResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.ResponseFormatText`

```typescript
const value: operations.ResponseFormatText = {
  type: "text",
};
```

### `operations.ResponseFormatJSONObject`

```typescript
const value: operations.ResponseFormatJSONObject = {
  type: "json_object",
};
```

### `operations.CreateAgentRequestResponseFormatJSONSchema`

```typescript
const value: operations.CreateAgentRequestResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

