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

### `operations.RequestBodyHTTP`

```typescript
const value: operations.RequestBodyHTTP = {
  type: "http_eval",
  url: "https://marvelous-jump.name/",
  method: "POST",
  headers: {},
  payload: {},
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

