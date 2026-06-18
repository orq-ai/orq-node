# CreateEvalResponseBody

Successfully created an evaluator


## Supported Types

### `operations.ResponseBodyLLM`

```typescript
const value: operations.ResponseBodyLLM = {
  id: "<id>",
  description: "considerate amid crystallize thorny gracious",
  created: "2026-06-18T04:50:37.829Z",
  updated: "2026-06-18T04:50:37.829Z",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "single",
  model: "A4",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  id: "<id>",
  description: "thunderbolt circa except cosset ick delicious",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `operations.CreateEvalResponseBodyHTTP`

```typescript
const value: operations.CreateEvalResponseBodyHTTP = {
  id: "<id>",
  description: "agile discontinue perspire fiercely nervously yahoo regarding",
  type: "http_eval",
  url: "https://far-flung-scholarship.org",
  method: "POST",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
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
  description: "considerate whoa scale overfeed ultimately shakily",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

### `operations.CreateEvalResponseBodyFunction`

```typescript
const value: operations.CreateEvalResponseBodyFunction = {
  id: "<id>",
  description: "worst than stale eek finally",
  type: "function_eval",
  functionParams: {
    type: "grammar_diversity",
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

