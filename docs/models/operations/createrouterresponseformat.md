# CreateRouterResponseFormat

The output format: plain text or structured JSON schema.


## Supported Types

### `operations.PlainText`

```typescript
const value: operations.PlainText = {
  type: "text",
};
```

### `operations.FormatJSONSchema`

```typescript
const value: operations.FormatJSONSchema = {
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  type: "json_schema",
};
```

