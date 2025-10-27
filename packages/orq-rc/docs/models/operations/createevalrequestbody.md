# CreateEvalRequestBody


## Supported Types

### `operations.Llm`

```typescript
const value: operations.Llm = {
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
  type: "json_schema",
  schema: "<value>",
  path: "Default",
  key: "<key>",
};
```

### `operations.CreateEvalRequestBodyHTTP`

```typescript
const value: operations.CreateEvalRequestBodyHTTP = {
  type: "http_eval",
  url: "https://tasty-cassava.com",
  method: "POST",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
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
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

