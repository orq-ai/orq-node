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

### `operations.RequestBodyHTTP`

```typescript
const value: operations.RequestBodyHTTP = {
  outputType: "boolean",
  type: "http_eval",
  url: "https://lumpy-petal.name/",
  method: "GET",
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
  outputType: "number",
  code: "<value>",
  type: "python_eval",
  path: "Default",
  key: "<key>",
};
```

