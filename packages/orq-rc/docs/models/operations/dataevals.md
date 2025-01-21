# DataEvals


## Supported Types

### `operations.DeploymentGetLogsEvals1`

```typescript
const value: operations.DeploymentGetLogsEvals1 = {
  type: "string",
  id: "<id>",
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvals2`

```typescript
const value: operations.DeploymentGetLogsEvals2 = {
  type: "number",
  value: 9360.71,
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

### `operations.DeploymentGetLogsEvals3`

```typescript
const value: operations.DeploymentGetLogsEvals3 = {
  type: "boolean",
  value: "<value>",
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

### `operations.DeploymentGetLogsEvals4`

```typescript
const value: operations.DeploymentGetLogsEvals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
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

### `operations.DeploymentGetLogsEvals5`

```typescript
const value: operations.DeploymentGetLogsEvals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 4097.14,
      precision: 1229.19,
      recall: 7471.87,
    },
    rouge2: {
      f1: 7774.14,
      precision: 8809.42,
      recall: 4414.52,
    },
    rougeL: {
      f1: 6300.62,
      precision: 8436.48,
      recall: 933.78,
    },
  },
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

### `operations.DeploymentGetLogsEvals6`

```typescript
const value: operations.DeploymentGetLogsEvals6 = {
  type: "bert_score",
  value: {
    f1: 8028.7,
    precision: 1.5,
    recall: 1150.28,
  },
  id: "<id>",
  status: "completed",
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

### `operations.DeploymentGetLogsEvals7`

```typescript
const value: operations.DeploymentGetLogsEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-07-12T17:19:07.810Z"),
    productType: "external_events",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "number",
        value: 669.63,
        id: "<id>",
        status: "completed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "contact",
            contactId: "<id>",
          },
        ],
        evaluatorType: "input_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "LeBaron",
        modelDbId: "0926e236-0417-49be-87a0-7d9617e186c2",
        modelType: "stt",
        modelParameters: {},
        provider: "fal",
        messages: [
          {
            role: "tool",
            content: "<value>",
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
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvals8`

```typescript
const value: operations.DeploymentGetLogsEvals8 = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: "<value>",
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

### `operations.Evals9`

```typescript
const value: operations.Evals9 = {
  type: "http_eval",
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "77603209-121c-4e19-8949-61faf2c6ea20",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

