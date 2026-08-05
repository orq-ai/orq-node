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

