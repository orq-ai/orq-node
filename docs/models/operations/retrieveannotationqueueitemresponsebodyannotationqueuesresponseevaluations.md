# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseEvaluations


## Supported Types

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2001`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2001 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_guardrail",
      type: "bert_score",
      status: "completed",
      value: {
        f1: 8441.69,
        precision: 2011.35,
        recall: 2322.39,
      },
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2002`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2002 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
      type: "bert_score",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2003`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2003 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_guardrail",
      type: "bert_score",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2004`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2004 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "boolean",
      status: "completed",
      value: false,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse5`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse5 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_guardrail",
    type: "boolean",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse6`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse6 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "boolean",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues7`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues7 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "http_evaluator",
    status: "completed",
    value: true,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues8`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues8 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "http_evaluator",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues9`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues9 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "http_evaluator",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues10`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues10 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "llm_evaluator",
    status: "completed",
    value: true,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues11`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues11 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "llm_evaluator",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues12`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues12 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "llm_evaluator",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues13`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues13 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "rouge_n",
    status: "completed",
    value: {
      rouge1: {
        f1: 8834.75,
        precision: 1679.53,
        recall: 9760.15,
      },
      rouge2: {
        f1: 7079.34,
        precision: 2981.55,
        recall: 2966.56,
      },
      rougeL: {
        f1: 102.98,
        precision: 7657.13,
        recall: 71.66,
      },
    },
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues14`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues14 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "rouge_n",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues15`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues15 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "rouge_n",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues16`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues16 = {
    id: "<id>",
    evaluationType: "human_review",
    reviewedById: "<id>",
    type: "string",
    value: "<value>",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues17`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues17 = {
    id: "<id>",
    evaluationType: "human_review",
    reviewedById: "<id>",
    type: "number",
    value: 3684.26,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues18`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues18 = {
    id: "<id>",
    evaluationType: "human_review",
    reviewedById: "<id>",
    type: "boolean",
    value: true,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues19`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueues19 = {
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

