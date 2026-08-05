# GetEvalResponseBody

The evaluator. The response shape depends on the evaluator `type`.


## Supported Types

### `operations.ResponseBodyLLM`

```typescript
const value: operations.ResponseBodyLLM = {
  metadata: {},
  id: "<id>",
  displayName: "Matteo11",
  description:
    "fearless mockingly fooey jubilantly tackle nor empty elementary",
  owner: "<value>",
  domainId: "<id>",
  type: "llm_eval",
  prompt: "<value>",
};
```

### `operations.ResponseBodyFunction`

```typescript
const value: operations.ResponseBodyFunction = {
  metadata: {},
  id: "<id>",
  displayName: "Kylie10",
  description: "meh astride what culture miserably who sonata pace watery",
  owner: "<value>",
  domainId: "<id>",
  outputType: "string",
  type: "function_eval",
  functionParams: {
    type: "levenshtein_distance",
  },
};
```

### `operations.Ragas`

```typescript
const value: operations.Ragas = {
  metadata: {},
  id: "<id>",
  displayName: "Alessandro54",
  description: "retrospectivity hm lace",
  owner: "<value>",
  domainId: "<id>",
  type: "ragas",
  model: {
    id: "<id>",
  },
  ragasMetric: "context_precision",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  metadata: {},
  id: "<id>",
  displayName: "Hope_Grady86",
  description:
    "afore better phooey whenever silky save lost porter ick briskly",
  owner: "<value>",
  domainId: "<id>",
  type: "json_schema",
  schema: "<value>",
};
```

### `operations.GetEvalResponseBodyHTTP`

```typescript
const value: operations.GetEvalResponseBodyHTTP = {
  metadata: {},
  id: "<id>",
  displayName: "Kris_Rau89",
  description: "times which whistle part alongside during",
  owner: "<value>",
  domainId: "<id>",
  type: "http_eval",
  url: "https://radiant-coin.com",
  method: "GET",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  payload: {},
};
```

### `operations.ResponseBodyPython`

```typescript
const value: operations.ResponseBodyPython = {
  metadata: {},
  id: "<id>",
  displayName: "Jailyn69",
  description: "whoa scale overfeed ultimately",
  owner: "<value>",
  domainId: "<id>",
  code: "<value>",
  type: "python_eval",
};
```

### `operations.Typescript`

```typescript
const value: operations.Typescript = {
  metadata: {},
  id: "<id>",
  displayName: "Elmira93",
  description: "paltry stir-fry forecast westernize scarification",
  owner: "<value>",
  domainId: "<id>",
  code: "<value>",
  type: "typescript_eval",
};
```

### `operations.BedrockGuardrail`

```typescript
const value: operations.BedrockGuardrail = {
  metadata: {},
  id: "<id>",
  displayName: "Marianne.Homenick69",
  description: "perp jeopardise until woot likewise",
  owner: "<value>",
  domainId: "<id>",
  type: "bedrock_eval",
  guardrailIdentifier: "<value>",
};
```

