# DeploymentGetLogsData

The schema for a workflow run


## Supported Types

### `operations.Data1`

```typescript
const value: operations.Data1 = {
  id: "<id>",
  workspaceId: "248fc2cb-e6db-446d-9c3d-fe68dbb49043",
  startedAt: new Date("2025-03-20T02:23:27.732Z"),
  evals: [
    {
      type: "boolean",
      value: false,
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
    },
  ],
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "remoteconfig",
      remoteConfigId: "<id>",
    },
  ],
  data: {
    remoteConfigId: "46c89f17-7822-4694-b7f0-77b4c61a0b09",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 6984.09,
    remoteConfigVariantId: "9655682e-a5fd-4955-9153-9b48cab3a434",
    remoteConfigVariantPosition: 4709.4,
    isDefaultMatched: false,
    action: "get_config",
  },
};
```

### `operations.Data2`

```typescript
const value: operations.Data2 = {
  id: "<id>",
  workspaceId: "5e230b87-0fdd-4ec2-bfeb-4079f216c5ae",
  startedAt: new Date("2023-04-22T08:22:38.865Z"),
  evals: [
    {
      type: "rouge_n",
      value: {
        rouge1: {
          f1: 379.92,
          precision: 1686.38,
          recall: 7707.11,
        },
        rouge2: {
          f1: 1740.93,
          precision: 5588.14,
          recall: 6149.79,
        },
        rougeL: {
          f1: 1566.36,
          precision: 9148.23,
          recall: 585.01,
        },
      },
      id: "<id>",
      status: "failed",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "e5c6bd86-600b-462d-8a75-55e60252df57",
        },
      ],
      evaluatorType: "input_evaluator",
    },
  ],
  productType: "deployments",
  relatedEntities: [
    {
      type: "deployment",
      deploymentId: "6d6b8a30-31b9-4c64-bd97-e56429eaadb6",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 1239.97,
    deploymentVariantId: "d88ea14b-144b-4056-8178-fde42a39317a",
    isDefaultMatched: false,
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Expedition",
      modelDbId: "423e028a-634a-4bfb-9638-b1036a084567",
      modelType: "chat",
      modelParameters: {},
      provider: "anthropic",
      messages: [
        {
          role: "exception",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    retries: [
      {
        retryAttempt: 9967.02,
        status: 7696.2,
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
};
```

### `operations.Data3`

```typescript
const value: operations.Data3 = {
  id: "<id>",
  workspaceId: "980a98cc-32a5-4706-afbd-a9f7c31257e9",
  startedAt: new Date("2024-02-26T21:41:59.017Z"),
  evals: [
    {
      type: "llm_eval",
      workflowRun: {
        id: "<id>",
        startedAt: new Date("2024-03-18T21:51:57.015Z"),
        productType: "knowledge",
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "<id>",
          },
        ],
        evals: [
          {
            type: "boolean",
            value: false,
            id: "<id>",
            status: "pending",
            startedAt: "<value>",
            relatedEntities: [
              {
                type: "account",
                accountId: "917e9f4a-e58d-450f-b61b-521bf6ca6060",
              },
            ],
            evaluatorType: "output_evaluator",
          },
        ],
        data: {
          action: "invoke",
          promptConfig: {
            stream: false,
            model: "Grand Cherokee",
            modelDbId: "f92f3256-f8cc-4611-8fd5-deee2c0c9b89",
            modelType: "chat",
            modelParameters: {},
            provider: "nvidia",
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://caring-basket.info",
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
          type: "account",
          accountId: "6a70be99-dd26-4dbd-927b-b1ba540646b2",
        },
      ],
      evaluatorType: "output_guardrail",
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "playground",
      playgroundId: "de11a8ec-8117-44fa-b451-35a2a1ea92b3",
    },
  ],
  data: {
    choices: [
      {
        index: 7789.55,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Volt",
      modelDbId: "c58a4c52-0a4d-4c18-9fdd-4b5d1aa4ae92",
      modelType: "vision",
      modelParameters: {},
      provider: "google",
      messages: [
        {
          role: "prompt",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://wealthy-gerbil.com",
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
    billing: {
      billable: false,
    },
    promptSnippets: [
      {
        id: "<id>",
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

### `operations.Data4`

```typescript
const value: operations.Data4 = {
  id: "<id>",
  workspaceId: "cb44b2dd-93f3-4478-870d-0ede520b2234",
  startedAt: new Date("2024-10-27T17:30:10.640Z"),
  evals: [
    {
      type: "rouge_n",
      value: {
        rouge1: {
          f1: 6506.87,
          precision: 6420.48,
          recall: 8551.56,
        },
        rouge2: {
          f1: 367.26,
          precision: 5577.12,
          recall: 3859.41,
        },
        rougeL: {
          f1: 7892.65,
          precision: 2285.54,
          recall: 6089.52,
        },
      },
      id: "<id>",
      status: "pending",
      startedAt: "<value>",
      relatedEntities: [
        {
          type: "account",
          accountId: "51be0a9e-a692-4237-b418-b1b0bf714282",
        },
      ],
      evaluatorType: "output_evaluator",
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "experiment_run",
      experimentRunId: "191441d1-7433-4ac6-b5b4-d407474ff9e5",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Model Y",
      modelDbId: "5b133a34-4ffd-4775-9724-2eb2650b7527",
      modelType: "image",
      modelParameters: {},
      provider: "replicate",
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
};
```

### `operations.Data5`

```typescript
const value: operations.Data5 = {
  id: "<id>",
  workspaceId: "9d45af33-dc50-468c-8aac-c71d90c658ae",
  startedAt: new Date("2023-11-30T22:04:47.090Z"),
  evals: [
    {
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
      evaluatorType: "output_evaluator",
    },
  ],
  productType: "router",
  relatedEntities: [
    "<value>",
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Mustang",
      modelDbId: "aac2985b-673b-4078-8425-1b90fcfafc4c",
      modelType: "image",
      modelParameters: {},
      provider: "togetherai",
      messages: [
        {
          role: "tool",
          content: [
            {
              type: "text",
              text: "<value>",
            },
          ],
        },
      ],
    },
    action: "invoke",
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
};
```

