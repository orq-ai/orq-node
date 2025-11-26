# InvokeEvalResponseBody

Returns the result of the evaluator run


## Supported Types

### `operations.String`

```typescript
const value: operations.String = {
  type: "string",
};
```

### `operations.ResponseBodyNumber`

```typescript
const value: operations.ResponseBodyNumber = {
  type: "number",
  value: null,
};
```

### `operations.ResponseBodyBoolean`

```typescript
const value: operations.ResponseBodyBoolean = {
  type: "boolean",
  value: "<value>",
};
```

### `operations.StringArray`

```typescript
const value: operations.StringArray = {
  type: "string_array",
  values: [],
};
```

### `operations.RougeN`

```typescript
const value: operations.RougeN = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 6800.91,
      precision: 4801.64,
      recall: 5836.36,
    },
    rouge2: {
      f1: 3668.69,
      precision: 5867.98,
      recall: 8581.43,
    },
    rougeL: {
      f1: 7091.77,
      precision: 9654.48,
      recall: 7015.78,
    },
  },
};
```

### `operations.BERTScore`

```typescript
const value: operations.BERTScore = {
  type: "bert_score",
  value: {
    f1: 6062.58,
    precision: 420.31,
    recall: 8918.05,
  },
};
```

### `operations.InvokeEvalResponseBodyLLM`

```typescript
const value: operations.InvokeEvalResponseBodyLLM = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: "<value>",
  },
};
```

### `operations.InvokeEvalResponseBodyHTTP`

```typescript
const value: operations.InvokeEvalResponseBodyHTTP = {
  type: "http_eval",
};
```

