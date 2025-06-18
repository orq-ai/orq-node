# UpdateEvalResponseBody

Successfully updated an eval


## Supported Types

### `operations.UpdateEvalResponseBodyLLM`

```typescript
const value: operations.UpdateEvalResponseBodyLLM = {
  id: "<id>",
  description:
    "boohoo mundane phew friendly chainstay writhing stunt confiscate legend that",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Explorer",
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

