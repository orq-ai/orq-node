# RunAgentModelConfigurationResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.RunAgentResponseFormatText`

```typescript
const value: operations.RunAgentResponseFormatText = {
  type: "text",
};
```

### `operations.RunAgentResponseFormatJSONObject`

```typescript
const value: operations.RunAgentResponseFormatJSONObject = {
  type: "json_object",
};
```

### `operations.RunAgentResponseFormatJSONSchema`

```typescript
const value: operations.RunAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

