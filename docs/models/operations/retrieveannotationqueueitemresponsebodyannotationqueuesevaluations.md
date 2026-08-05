# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesEvaluations


## Supported Types

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse1 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_guardrail",
    type: "bert_score",
    status: "completed",
    value: {
      f1: 8363.89,
      precision: 2355.14,
      recall: 4059.99,
    },
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "bert_score",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse3 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "bert_score",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse4 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "boolean",
    status: "completed",
    value: false,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues5`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues5 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "boolean",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues6`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues6 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "boolean",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluations7`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations7 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_guardrail",
  type: "http_evaluator",
  status: "completed",
  value: false,
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations8`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations8 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "http_evaluator",
  status: "pending",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations9`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations9 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "http_evaluator",
  status: "failed",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations10`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations10 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "llm_evaluator",
  status: "completed",
  value: 420.56,
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations11`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations11 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_guardrail",
  type: "llm_evaluator",
  status: "pending",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations12`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations12 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "llm_evaluator",
  status: "failed",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations13`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations13 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "rouge_n",
  status: "completed",
  value: {
    rouge1: {
      f1: 7079.04,
      precision: 7931.56,
      recall: 1319.42,
    },
    rouge2: {
      f1: 7664.59,
      precision: 3219.78,
      recall: 2067.77,
    },
    rougeL: {
      f1: 589.51,
      precision: 8126.34,
      recall: 3274.58,
    },
  },
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations14`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations14 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "output_evaluator",
  type: "rouge_n",
  status: "pending",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations15`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations15 = {
  id: "<id>",
  evaluationType: "evaluator",
  evaluatorId: "<id>",
  evaluatorConfigType: "input_evaluator",
  type: "rouge_n",
  status: "failed",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations16`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations16 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "string",
  value: "<value>",
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations17`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations17 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "number",
  value: 6411.72,
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations18`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations18 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "boolean",
  value: false,
};
```

### `operations.RetrieveAnnotationQueueItemEvaluations19`

```typescript
const value: operations.RetrieveAnnotationQueueItemEvaluations19 = {
  id: "<id>",
  evaluationType: "human_review",
  reviewedById: "<id>",
  type: "string_array",
  values: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

