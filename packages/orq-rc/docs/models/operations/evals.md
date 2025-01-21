# Evals


## Supported Types

### `operations.Evals1`

```typescript
const value: operations.Evals1 = {
  type: "string",
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "4bc3406e-6c09-4ff9-b0db-0cb188e7888d",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.Evals2`

```typescript
const value: operations.Evals2 = {
  type: "number",
  value: 1964.51,
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

### `operations.Evals3`

```typescript
const value: operations.Evals3 = {
  type: "boolean",
  value: "<value>",
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.Evals4`

```typescript
const value: operations.Evals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.Evals5`

```typescript
const value: operations.Evals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 571.3,
      precision: 6156.22,
      recall: 3495.7,
    },
    rouge2: {
      f1: 5487.52,
      precision: 1919.47,
      recall: 2312.35,
    },
    rougeL: {
      f1: 8363.86,
      precision: 7975.94,
      recall: 8543.27,
    },
  },
  id: "<id>",
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

### `operations.Evals6`

```typescript
const value: operations.Evals6 = {
  type: "bert_score",
  value: {
    f1: 2491.24,
    precision: 61.97,
    recall: 9198.07,
  },
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

### `operations.Evals7`

```typescript
const value: operations.Evals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2025-08-25T16:04:33.736Z"),
    productType: "deployments",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "string_array",
        values: [
          "<value>",
        ],
        id: "<id>",
        status: "failed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "human_eval",
            humanEvalId: "<id>",
          },
        ],
        evaluatorType: "input_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "CX-9",
        modelDbId: "a1d37ec0-78d9-416a-bf6f-876966f7c83f",
        modelType: "completion",
        modelParameters: {},
        provider: "jina",
        messages: [
          {
            role: "assistant",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://each-divine.net",
                },
              },
            ],
          },
        ],
      },
      variables: [
        {
          key: "<key>",
        },
      ],
      promptSnippets: [
        {
          id: "<id>",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
  },
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

### `operations.Evals8`

```typescript
const value: operations.Evals8 = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: 6546.47,
  },
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "2bbe49e3-7ff8-47f9-9389-862d1220de17",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

### `operations.Nine`

```typescript
const value: operations.Nine = {
  type: "http_eval",
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

