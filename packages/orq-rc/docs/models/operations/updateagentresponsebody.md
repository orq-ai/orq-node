# UpdateAgentResponseBody

Agent configuration successfully updated. Returns the complete updated agent manifest reflecting all changes made.


## Supported Types

### `operations.UpdateAgentResponseBody1`

```typescript
const value: operations.UpdateAgentResponseBody1 = {
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
  description: "comb angrily lest maul fiddle where",
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

### `operations.UpdateAgentResponseBody2`

```typescript
const value: operations.UpdateAgentResponseBody2 = {
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
  description: "depend maroon innovate hold next yesterday within ouch",
  instructions: "<value>",
  a2a: {
    agentUrl: "https://lumbering-tinderbox.net",
  },
};
```

