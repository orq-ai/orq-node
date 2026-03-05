# CreateAgentRequestResponseBody

Agent successfully created and ready for use. Returns the complete agent manifest including the generated ID, configuration, and all settings.


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  key: "<key>",
  projectId: "<id>",
  status: "live",
  path: "Default",
  knowledgeBases: [
    {
      knowledgeId: "customer-knowledge-base",
    },
  ],
  type: "internal",
  role: "<value>",
  description: "academics yum trained redress gee gosh repossess towards",
  instructions: "<value>",
  model: {
    id: "<id>",
    parameters: {
      fallbacks: [
        {
          model: "openai/gpt-4o-mini",
        },
      ],
      cache: {
        ttl: 3600,
        type: "exact_match",
      },
      loadBalancer: {
        type: "weight_based",
        models: [
          {
            model: "openai/gpt-4o",
            weight: 0.7,
          },
        ],
      },
      timeout: {
        callTimeout: 30000,
      },
    },
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    fallbackModels: [
      "<value>",
    ],
  },
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  id: "<id>",
  key: "<key>",
  projectId: "<id>",
  status: "draft",
  path: "Default",
  knowledgeBases: [
    {
      knowledgeId: "customer-knowledge-base",
    },
  ],
  type: "a2a",
  role: "<value>",
  description:
    "dearest obnoxiously cork knit categorise failing elegantly like",
  instructions: "<value>",
  a2a: {
    agentUrl: "https://unwilling-approach.name",
  },
};
```

