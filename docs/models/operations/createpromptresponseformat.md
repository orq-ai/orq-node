# CreatePromptResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.CreatePromptResponseFormatText`

```typescript
const value: operations.CreatePromptResponseFormatText = {
  type: "text",
};
```

### `operations.CreatePromptResponseFormatJSONObject`

```typescript
const value: operations.CreatePromptResponseFormatJSONObject = {
  type: "json_object",
};
```

### `operations.CreatePromptResponseFormatJSONSchema`

```typescript
const value: operations.CreatePromptResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

