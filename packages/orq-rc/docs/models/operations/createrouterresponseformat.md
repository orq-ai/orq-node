# CreateRouterResponseFormat

The output format: plain text or structured JSON schema.


## Supported Types

### `operations.FormatPlainText`

```typescript
const value: operations.FormatPlainText = {
  type: "text",
};
```

### `operations.CreateRouterResponseFormatJSONSchema`

```typescript
const value: operations.CreateRouterResponseFormatJSONSchema = {
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "json_schema",
};
```

