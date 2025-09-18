# CreateEvalRequestBody


## Supported Types

### `operations.Llm`

```typescript
const value: operations.Llm = {
  outputType: "string",
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  model: "Model S",
  key: "<key>",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  outputType: "boolean",
  type: "json_schema",
  schema: "<value>",
  path: "Default",
  key: "<key>",
};
```

### `operations.Http`

```typescript
const value: operations.Http = {
  outputType: "string",
  type: "http_eval",
  url: "https://tempting-quinoa.info",
  method: "POST",
  headers: {},
  payload: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  path: "Default",
  key: "<key>",
};
```

### `operations.Python`

```typescript
const value: operations.Python = {
  outputType: "string",
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

