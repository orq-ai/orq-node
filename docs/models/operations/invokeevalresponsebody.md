# InvokeEvalResponseBody

Returns the result of the evaluator run


## Supported Types

### `operations.String`

```typescript
const value: operations.String = {
  type: "string",
};
```

### `operations.NumberT`

```typescript
const value: operations.NumberT = {
  type: "number",
  value: 3019.07,
};
```

### `operations.Boolean`

```typescript
const value: operations.Boolean = {
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
      f1: 6828.21,
      precision: 5672.64,
      recall: 4400.24,
    },
    rouge2: {
      f1: 1693.15,
      precision: 8335.13,
      recall: 6138.59,
    },
    rougeL: {
      f1: 263.41,
      precision: 2844.53,
      recall: 3104.52,
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

### `operations.ResponseBodyLLM`

```typescript
const value: operations.ResponseBodyLLM = {
  type: "llm_evaluator",
  value: {
    value: 3319.26,
  },
};
```

### `operations.ResponseBodyHTTP`

```typescript
const value: operations.ResponseBodyHTTP = {
  type: "http_eval",
};
```

### `operations.Structured`

```typescript
const value: operations.Structured = {
  type: "structured",
  value: {
    "key": "<value>",
  },
};
```

