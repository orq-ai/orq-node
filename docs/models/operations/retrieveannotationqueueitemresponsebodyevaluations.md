# RetrieveAnnotationQueueItemResponseBodyEvaluations


## Supported Types

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues1 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "bert_score",
    status: "completed",
    value: {
      f1: 8105.04,
      precision: 3376.27,
      recall: 4220.68,
    },
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues2 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "bert_score",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues3 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "bert_score",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues4 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "boolean",
    status: "completed",
    value: true,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluations5`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations5 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "boolean",
  status: "pending",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations6`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations6 = {
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
      f1: 3862.12,
      precision: 8173.09,
      recall: 1090.98,
    },
    rouge2: {
      f1: 809.43,
      precision: 9856.63,
      recall: 4941.36,
    },
    rougeL: {
      f1: 9289,
      precision: 6462.03,
      recall: 4219.34,
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

