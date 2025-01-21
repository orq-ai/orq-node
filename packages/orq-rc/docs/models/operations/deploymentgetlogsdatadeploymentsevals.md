# DeploymentGetLogsDataDeploymentsEvals


## Supported Types

### `operations.DeploymentGetLogsEvalsDeploymentsResponse1`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse1 = {
  type: "string",
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  evaluatorType: "output_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2 = {
  type: "number",
  value: 6963.68,
  id: "<id>",
  status: "pending",
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

### `operations.DeploymentGetLogsEvalsDeploymentsResponse3`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse3 = {
  type: "boolean",
  value: 6128.36,
  id: "<id>",
  status: "pending",
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

### `operations.DeploymentGetLogsEvalsDeploymentsResponse4`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse5`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 5753.07,
      precision: 1450.15,
      recall: 6973.82,
    },
    rouge2: {
      f1: 8953.49,
      precision: 2501.01,
      recall: 9586.86,
    },
    rougeL: {
      f1: 7713.03,
      precision: 3003.21,
      recall: 6168.21,
    },
  },
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "da926e20-34ca-4009-9a29-3561ff74fdb7",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse6`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse6 = {
  type: "bert_score",
  value: {
    f1: 5196.14,
    precision: 6605.82,
    recall: 5661.93,
  },
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "623380f8-0a41-4d31-90ba-03b2937d4a71",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse7`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2025-12-02T11:00:30.084Z"),
    productType: "workflows",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "string",
        id: "<id>",
        status: "completed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "<id>",
          },
        ],
        evaluatorType: "input_guardrail",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Mustang",
        modelDbId: "c157fe61-68e4-44a8-8327-ccf660dac7e0",
        modelType: "vision",
        modelParameters: {},
        provider: "openai",
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: "<value>",
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
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "<id>",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse8`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse8 = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: 896.63,
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
  evaluatorType: "output_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeployments9`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments9 = {
  type: "http_eval",
  id: "<id>",
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "b6c905cb-aa9a-498c-9576-35056133352b",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

