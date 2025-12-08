# ResponseFormat

An object specifying the format that the model must output


## Supported Types

### `operations.Text`

```typescript
const value: operations.Text = {
  type: "text",
};
```

### `operations.JSONObject`

```typescript
const value: operations.JSONObject = {
  type: "json_object",
};
```

### `operations.JSONSchema`

```typescript
const value: operations.JSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

