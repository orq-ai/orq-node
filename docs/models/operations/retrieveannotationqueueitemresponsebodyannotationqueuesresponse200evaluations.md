# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200Evaluations


## Supported Types

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson1 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
      type: "bert_score",
      status: "completed",
      value: {
        f1: 5169.31,
        precision: 7005.91,
        recall: 6580.39,
      },
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson2`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson2 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "bert_score",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson3`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson3 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "bert_score",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson4`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJson4 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_guardrail",
      type: "boolean",
      status: "completed",
      value: false,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2005`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2005 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_guardrail",
      type: "boolean",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2006`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse2006 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "boolean",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse7`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse7 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_guardrail",
    type: "http_evaluator",
    status: "completed",
    value: true,
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse8`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse8 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "output_evaluator",
    type: "http_evaluator",
    status: "pending",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse9`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse9 = {
    id: "<id>",
    evaluationType: "evaluator",
    evaluatorId: "<id>",
    evaluatorConfigType: "input_evaluator",
    type: "http_evaluator",
    status: "failed",
  };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse10`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse10 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
      type: "llm_evaluator",
      status: "completed",
      value: true,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse11`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse11 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
      type: "llm_evaluator",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse12`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse12 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "llm_evaluator",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse13`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse13 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "rouge_n",
      status: "completed",
      value: {
        rouge1: {
          f1: 5957.59,
          precision: 1142.34,
          recall: 836.06,
        },
        rouge2: {
          f1: 4769.16,
          precision: 6157.84,
          recall: 5285.41,
        },
        rougeL: {
          f1: 8537.69,
          precision: 923.51,
          recall: 7645.19,
        },
      },
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse14`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse14 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_guardrail",
      type: "rouge_n",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse15`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse15 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_guardrail",
      type: "rouge_n",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse16`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse16 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "string",
      value: "<value>",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse17`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse17 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "number",
      value: 7136.49,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse18`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse18 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "boolean",
      value: true,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse19`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse19 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "string_array",
      values: [],
    };
```

