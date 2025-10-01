# CreateEvalResponseBody

Successfully created an evaluator


## Supported Types

### `operations.ResponseBodyLLM`

```typescript
const value: operations.ResponseBodyLLM = {
  id: "<id>",
  description: "duh unexpectedly famously handful helplessly around yum qua",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Model Y",
};
```

### `operations.ResponseBodyJSON`

```typescript
const value: operations.ResponseBodyJSON = {
  id: "<id>",
  description: "qua but till diagram",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `operations.ResponseBodyHTTP`

```typescript
const value: operations.ResponseBodyHTTP = {
  id: "<id>",
  description: "how which eek overload respectful clear",
  type: "http_eval",
  url: "https://terrible-backbone.info",
  method: "POST",
  headers: {},
  payload: {
    "key": "<value>",
    "key1": "<value>",
  },
  key: "<key>",
};
```

### `operations.ResponseBodyPython`

```typescript
const value: operations.ResponseBodyPython = {
  id: "<id>",
  description: "considerate whoa scale overfeed ultimately shakily",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

### `operations.ResponseBodyFunction`

```typescript
const value: operations.ResponseBodyFunction = {
  id: "<id>",
  description: "pish mortally likely legitimize awareness easily zowie",
  type: "function_eval",
  functionParams: {
    type: "cosine_similarity",
  },
  key: "<key>",
};
```

### `operations.Ragas`

```typescript
const value: operations.Ragas = {
  id: "<id>",
  description: "truthfully deselect until",
  type: "ragas",
  ragasMetric: "context_entities_recall",
  key: "<key>",
  model: "Model S",
};
```

### `operations.Typescript`

```typescript
const value: operations.Typescript = {
  id: "<id>",
  description: "recklessly bare behind ultimately athletic",
  code: "<value>",
  type: "typescript_eval",
  key: "<key>",
};
```

