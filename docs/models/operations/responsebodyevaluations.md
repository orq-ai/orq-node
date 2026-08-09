# ResponseBodyEvaluations


## Supported Types

### `operations.RetrieveAnnotationQueueItemEvaluations1`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations1 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "bert_score",
  status: "completed",
  value: {
    f1: 3478.06,
    precision: 7626.27,
    recall: 559.19,
  },
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations2`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations2 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "bert_score",
  status: "pending",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations3`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations3 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "bert_score",
  status: "failed",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations4`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations4 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "boolean",
  status: "completed",
  value: true,
};
```

### `operations.Evaluations5`

```typescript
const value: operations.Evaluations5 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "boolean",
  status: "pending",
};
```

### `operations.Evaluations6`

```typescript
const value: operations.Evaluations6 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "boolean",
  status: "failed",
};
```

### `operations.Evaluations7`

```typescript
const value: operations.Evaluations7 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "http_evaluator",
  status: "completed",
  value: 2522.05,
};
```

### `operations.Evaluations8`

```typescript
const value: operations.Evaluations8 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "http_evaluator",
  status: "pending",
};
```

### `operations.Evaluations9`

```typescript
const value: operations.Evaluations9 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "http_evaluator",
  status: "failed",
};
```

### `operations.Evaluations10`

```typescript
const value: operations.Evaluations10 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "llm_evaluator",
  status: "completed",
  value: "<value>",
};
```

### `operations.Evaluations11`

```typescript
const value: operations.Evaluations11 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "llm_evaluator",
  status: "pending",
};
```

### `operations.Evaluations12`

```typescript
const value: operations.Evaluations12 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "llm_evaluator",
  status: "failed",
};
```

### `operations.Evaluations13`

```typescript
const value: operations.Evaluations13 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "rouge_n",
  status: "completed",
  value: {
    rouge1: {
      f1: 2570.25,
      precision: 7777.26,
      recall: 4465.36,
    },
    rouge2: {
      f1: 4436.73,
      precision: 7513.2,
      recall: 2466.04,
    },
    rougeL: {
      f1: 58.92,
      precision: 2196.23,
      recall: 7451.01,
    },
  },
};
```

### `operations.Evaluations14`

```typescript
const value: operations.Evaluations14 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "rouge_n",
  status: "pending",
};
```

### `operations.Evaluations15`

```typescript
const value: operations.Evaluations15 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "rouge_n",
  status: "failed",
};
```

### `operations.Evaluations16`

```typescript
const value: operations.Evaluations16 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "string",
  value: "<value>",
};
```

### `operations.Evaluations17`

```typescript
const value: operations.Evaluations17 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "number",
  value: 6008.58,
};
```

### `operations.Evaluations18`

```typescript
const value: operations.Evaluations18 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "boolean",
  value: true,
};
```

### `operations.Evaluations19`

```typescript
const value: operations.Evaluations19 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "string_array",
  values: [],
};
```

