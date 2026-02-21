# UpdateEvalResponseBody

Successfully updated an eval


## Supported Types

### `operations.UpdateEvalResponseBodyLLM`

```typescript
const value: operations.UpdateEvalResponseBodyLLM = {
  id: "<id>",
  description: "once supposing abnegate extremely deploy cosset ravel",
  created: "2026-02-21T14:44:00.468Z",
  updated: "2026-02-21T14:44:00.468Z",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "single",
  model: "Silverado",
};
```

### `operations.UpdateEvalResponseBodyJSON`

```typescript
const value: operations.UpdateEvalResponseBodyJSON = {
  id: "<id>",
  description: "option fail yahoo circa",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `operations.UpdateEvalResponseBodyHTTP`

```typescript
const value: operations.UpdateEvalResponseBodyHTTP = {
  id: "<id>",
  description: "carefully beyond ack excluding clearly",
  type: "http_eval",
  url: "https://deserted-horst.name",
  method: "GET",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  payload: {},
  key: "<key>",
};
```

### `operations.UpdateEvalResponseBodyPython`

```typescript
const value: operations.UpdateEvalResponseBodyPython = {
  id: "<id>",
  description: "meh legitimize till haze or wherever buttery quirkily",
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
    type: "rouge_n",
  },
  key: "<key>",
};
```

### `operations.ResponseBodyRagas`

```typescript
const value: operations.ResponseBodyRagas = {
  id: "<id>",
  description: "now pliers abandoned um",
  type: "ragas",
  ragasMetric: "context_precision",
  key: "<key>",
  model: "A8",
};
```

### `operations.ResponseBodyTypescript`

```typescript
const value: operations.ResponseBodyTypescript = {
  id: "<id>",
  description: "of ick inasmuch whoa what meh funny failing",
  code: "<value>",
  type: "typescript_eval",
  key: "<key>",
};
```

