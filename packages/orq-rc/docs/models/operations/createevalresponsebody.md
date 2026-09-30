# CreateEvalResponseBody

Successfully created an evaluator


## Supported Types

### `components.EvaluatorResponseLlm`

```typescript
const value: components.EvaluatorResponseLlm = {
  id: "<id>",
  description: "wetly whereas failing",
  type: "llm_eval",
  outputType: "string",
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
  outputType: "boolean",
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
  outputType: "string",
  url: "https://oblong-ocelot.name",
  method: "GET",
  headers: {},
  payload: {
    "key": "<value>",
    "key1": "<value>",
  },
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
  outputType: "categorical",
  key: "<key>",
};
```

### `components.EvaluatorResponseFunction`

```typescript
const value: components.EvaluatorResponseFunction = {
  id: "<id>",
  description: "amount faithfully whoa eek cheerful pfft",
  type: "function_eval",
  outputType: "string",
  functionParams: {
    type: "keywords_match",
    keywords: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
  outputType: "string",
  ragasMetric: "noise_sensitivity",
  key: "<key>",
  model: "XC90",
};
```

### `components.EvaluatorResponseTypescript`

```typescript
const value: components.EvaluatorResponseTypescript = {
  id: "<id>",
  description: "since loftily for along past among qua",
  code: "<value>",
  type: "typescript_eval",
  outputType: "boolean",
  key: "<key>",
};
```

