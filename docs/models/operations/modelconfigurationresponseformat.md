# ModelConfigurationResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.UpdateAgentResponseFormatText`

```typescript
const value: operations.UpdateAgentResponseFormatText = {
  type: "text",
};
```

### `operations.UpdateAgentResponseFormatJSONObject`

```typescript
const value: operations.UpdateAgentResponseFormatJSONObject = {
  type: "json_object",
};
```

### `operations.UpdateAgentResponseFormatJSONSchema`

```typescript
const value: operations.UpdateAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

