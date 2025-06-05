# InvokeEvalResponseBody

Returns the result of the evaluator run


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  type: "string",
  value: "<value>",
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  type: "number",
  value: 6694.72,
};
```

### `operations.ResponseBody3`

```typescript
const value: operations.ResponseBody3 = {
  type: "boolean",
  value: "<value>",
};
```

### `operations.ResponseBody4`

```typescript
const value: operations.ResponseBody4 = {
  type: "string_array",
  values: [],
};
```

### `operations.Five`

```typescript
const value: operations.Five = {
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

### `operations.Six`

```typescript
const value: operations.Six = {
  type: "bert_score",
  value: {
    f1: 9978.04,
    precision: 4866.53,
    recall: 8809.51,
  },
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: 1965.49,
  },
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  type: "http_eval",
};
```

