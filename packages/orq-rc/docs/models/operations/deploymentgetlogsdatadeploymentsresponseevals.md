# DeploymentGetLogsDataDeploymentsResponseEvals


## Supported Types

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2001`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2001 = {
  type: "string",
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "93d511e1-2d4a-4d9f-bb18-bc0bdb878be9",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2002`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2002 = {
  type: "number",
  value: 683.36,
  id: "<id>",
  status: "completed",
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

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2003`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2003 = {
  type: "boolean",
  value: "<value>",
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

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2004`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2004 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "0920e81d-f701-46e2-ad07-a09f2b92008f",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2005`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2005 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 4938.65,
      precision: 5818.89,
      recall: 1263.67,
    },
    rouge2: {
      f1: 8768.21,
      precision: 7607.93,
      recall: 9981.99,
    },
    rougeL: {
      f1: 2977.23,
      precision: 2270.17,
      recall: 1251.61,
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
  evaluatorType: "input_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2006`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2006 = {
  type: "bert_score",
  value: {
    f1: 5526.87,
    precision: 4137.68,
    recall: 1514.86,
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

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2007`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2025-10-28T19:37:08.863Z"),
    productType: "remoteconfigs",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "<id>",
      },
    ],
    evals: [
      {
        type: "number",
        value: 1296.19,
        id: "<id>",
        status: "pending",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "human_eval",
            humanEvalId: "<id>",
          },
        ],
        evaluatorType: "input_evaluator",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Model T",
        modelDbId: "b2fb4bb5-659e-42e0-8a6c-b7a8c7849492",
        modelType: "vision",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "user",
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
  status: "pending",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "47b7e025-9d54-40d6-b9f0-2ccc8f6916b3",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse2008`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse2008 = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: 7689.99,
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
  evaluatorType: "input_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeploymentsResponse9`

```typescript
const value: operations.DeploymentGetLogsEvalsDeploymentsResponse9 = {
  type: "http_eval",
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

