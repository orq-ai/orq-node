# CreateEvalResponseBody

Successfully created an evaluator


## Supported Types

### `components.EvaluatorResponseLlm`

```typescript
const value: components.EvaluatorResponseLlm = {
  id: "<id>",
  description: "wetly whereas failing",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  mode: "jury",
};
```

### `components.EvaluatorResponseJsonSchema`

```typescript
const value: components.EvaluatorResponseJsonSchema = {
  id: "<id>",
  description: "partially muted and per yahoo until upliftingly like",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

### `components.EvaluatorResponseHttp`

```typescript
const value: components.EvaluatorResponseHttp = {
  id: "<id>",
  description:
    "and slime corporation um because resort ligate good-natured lonely violin",
  type: "http_eval",
  url: "https://pertinent-membership.name",
  method: "POST",
  headers: {},
  payload: {},
  key: "<key>",
};
```

### `components.EvaluatorResponsePython`

```typescript
const value: components.EvaluatorResponsePython = {
  id: "<id>",
  description: "glaring which athwart deficient woot alongside",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

### `components.EvaluatorResponseFunction`

```typescript
const value: components.EvaluatorResponseFunction = {
  id: "<id>",
  description: "amount faithfully whoa eek cheerful pfft",
  type: "function_eval",
  functionParams: {
    type: "sentences_count",
  },
  key: "<key>",
};
```

### `components.EvaluatorResponseRagas`

```typescript
const value: components.EvaluatorResponseRagas = {
  id: "<id>",
  description: "rewarding ack as geez rot outrun an hmph",
  type: "ragas",
  ragasMetric: "faithfulness",
  key: "<key>",
  model: "XTS",
};
```

### `components.EvaluatorResponseTypescript`

```typescript
const value: components.EvaluatorResponseTypescript = {
  id: "<id>",
  description: "since loftily for along past among qua",
  code: "<value>",
  type: "typescript_eval",
  key: "<key>",
};
```

