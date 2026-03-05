# RetrieveAgentRequestResponseBody

Agent successfully retrieved. Returns the complete agent manifest with all configuration details, including models, tools, knowledge bases, and execution settings.


## Supported Types

### `operations.RetrieveAgentRequestResponseBody1`

```typescript
const value: operations.RetrieveAgentRequestResponseBody1 = {
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
  type: "internal",
  role: "<value>",
  description:
    "shrill geez happily brief inspect whose scornful familiar freight brightly",
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

### `operations.RetrieveAgentRequestResponseBody2`

```typescript
const value: operations.RetrieveAgentRequestResponseBody2 = {
  id: "<id>",
  key: "<key>",
  projectId: "<id>",
  status: "published",
  path: "Default",
  knowledgeBases: [
    {
      knowledgeId: "customer-knowledge-base",
    },
  ],
  type: "a2a",
  role: "<value>",
  description: "yuck unlawful croon",
  instructions: "<value>",
  a2a: {
    agentUrl: "https://downright-cauliflower.name/",
  },
};
```

