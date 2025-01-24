# DeploymentGetLogsDataEvals


## Supported Types

### `operations.DeploymentGetLogsEvalsDeployments1`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments1 = {
  type: "string",
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeployments2`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments2 = {
  type: "number",
  value: 2319.82,
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

### `operations.DeploymentGetLogsEvalsDeployments3`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments3 = {
  type: "boolean",
  value: 696.5,
  id: "<id>",
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "2d01e4ca-1c3b-468f-b444-59ce0a99cfb2",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeployments4`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments4 = {
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
      accountId: "cf2a00cd-57cd-44c3-b7ba-8a04313de877",
    },
  ],
  evaluatorType: "output_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeployments5`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 2164.88,
      precision: 949.91,
      recall: 543.83,
    },
    rouge2: {
      f1: 3576.63,
      precision: 4175.43,
      recall: 2476.75,
    },
    rougeL: {
      f1: 9202.25,
      precision: 8371.54,
      recall: 7444.63,
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

### `operations.DeploymentGetLogsEvalsDeployments6`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments6 = {
  type: "bert_score",
  value: {
    f1: 8876.72,
    precision: 2613.61,
    recall: 8642.28,
  },
  id: "<id>",
  status: "completed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "bcf74169-725e-4787-b603-7975cbf0b04e",
    },
  ],
  evaluatorType: "input_guardrail",
};
```

### `operations.DeploymentGetLogsEvalsDeployments7`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-03-14T01:36:57.560Z"),
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
        value: 4808.69,
        id: "<id>",
        status: "completed",
        startedAt: "<value>",
        relatedEntities: [
          {
            type: "contact",
            contactId: "<id>",
          },
        ],
        evaluatorType: "input_evaluator",
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Land Cruiser",
        modelDbId: "70f32c59-0603-43f4-ad6d-a01013cb36d1",
        modelType: "completion",
        modelParameters: {},
        provider: "elevenlabs",
        messages: [
          {
            role: "exception",
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
  status: "failed",
  startedAt: "<value>",
  relatedEntities: [
    {
      type: "account",
      accountId: "0dc337fa-dd29-4f17-acf1-6c9e189dd790",
    },
  ],
  evaluatorType: "input_evaluator",
};
```

### `operations.DeploymentGetLogsEvalsDeployments8`

```typescript
const value: operations.DeploymentGetLogsEvalsDeployments8 = {
  type: "llm_evaluator",
  value: {
    workflowRunId: "<id>",
    value: false,
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
  evaluatorType: "input_evaluator",
};
```

### `operations.DeploymentGetLogsEvals9`

```typescript
const value: operations.DeploymentGetLogsEvals9 = {
  type: "http_eval",
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
};
```

