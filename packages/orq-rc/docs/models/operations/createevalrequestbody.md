# CreateEvalRequestBody


## Supported Types

### `operations.Llm`

```typescript
const value: operations.Llm = {
  type: "llm_eval",
  prompt: "<value>",
  path: "Default",
  model: "Accord",
  key: "<key>",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  type: "json_schema",
  schema: "<value>",
  path: "Default",
  key: "<key>",
};
```

### `operations.Http`

```typescript
const value: operations.Http = {
  type: "http_eval",
  url: "https://oddball-ravioli.net/",
  method: "GET",
  headers: {
    "key": "<value>",
  },
  payload: {
    "key": "<value>",
  },
  path: "Default",
  key: "<key>",
};
```

### `operations.Python`

```typescript
const value: operations.Python = {
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

