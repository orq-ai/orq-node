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

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody7`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody7 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "http_evaluator",
      status: "completed",
      value: true,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes8`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes8 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "http_evaluator",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes9`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes9 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
      type: "http_evaluator",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody110`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody110 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_guardrail",
      type: "llm_evaluator",
      status: "completed",
      value: 1013.77,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes11`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes11 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_evaluator",
      type: "llm_evaluator",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes12`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes12 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "output_guardrail",
      type: "llm_evaluator",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes13`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes13 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_evaluator",
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

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes14`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes14 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_guardrail",
      type: "rouge_n",
      status: "pending",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes15`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes15 =
    {
      id: "<id>",
      evaluationType: "evaluator",
      evaluatorId: "<id>",
      evaluatorConfigType: "input_guardrail",
      type: "rouge_n",
      status: "failed",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes16`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes16 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "string",
      value: "<value>",
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes17`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes17 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "number",
      value: 5406.72,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes18`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes18 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "boolean",
      value: true,
    };
```

### `operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes19`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemEvaluationsAnnotationQueuesResponse200ApplicationJSONResponseBody1Attributes19 =
    {
      id: "<id>",
      evaluationType: "human_review",
      reviewedById: "<id>",
      type: "string_array",
      values: [],
    };
```

