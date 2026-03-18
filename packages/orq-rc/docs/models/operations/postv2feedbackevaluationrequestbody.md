# PostV2FeedbackEvaluationRequestBody


## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "string",
  value: "<value>",
  traceId: "<id>",
};
```

### `operations.RequestBody2`

```typescript
const value: operations.RequestBody2 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "number",
  value: 507.72,
  traceId: "<id>",
};
```

### `operations.RequestBody3`

```typescript
const value: operations.RequestBody3 = {
  id: "<id>",
  evaluationType: "human_review",
  humanReviewId: "<id>",
  type: "string_array",
  values: [
    "<value 1>",
    "<value 2>",
  ],
  traceId: "<id>",
};
```

