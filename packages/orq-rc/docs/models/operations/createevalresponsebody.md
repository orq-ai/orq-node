# CreateEvalResponseBody

Successfully created an evaluator


## Supported Types

### `operations.ResponseBodyLLM`

```typescript
const value: operations.ResponseBodyLLM = {
  id: "<id>",
  description: "bah mechanically save nice",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Sentra",
};
```

### `operations.ResponseBodyJSON`

```typescript
const value: operations.ResponseBodyJSON = {
  id: "<id>",
  description: "stir-fry vain afford aggravating joshingly which metal",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `operations.ResponseBodyHTTP`

```typescript
const value: operations.ResponseBodyHTTP = {
  id: "<id>",
  description: "openly juicy and",
  type: "http_eval",
  url: "https://incomplete-ceramics.name/",
  method: "GET",
  headers: {
    "key": "<value>",
  },
  payload: {
    "key": "<value>",
  },
  key: "<key>",
};
```

### `operations.ResponseBodyPython`

```typescript
const value: operations.ResponseBodyPython = {
  id: "<id>",
  description: "yesterday meal puppet hm generously blank",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

