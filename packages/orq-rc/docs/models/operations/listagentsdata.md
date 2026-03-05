# ListAgentsData


## Supported Types

### `operations.Data1`

```typescript
const value: operations.Data1 = {
  id: "<id>",
  key: "<key>",
  status: "published",
  path: "Default",
  knowledgeBases: [
    {
      knowledgeId: "customer-knowledge-base",
    },
  ],
  type: "internal",
  role: "<value>",
  description: "uh-huh zowie plain knowingly",
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
      {
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
          count: 3,
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
      },
    ],
  },
};
```

### `operations.Data2`

```typescript
const value: operations.Data2 = {
  id: "<id>",
  key: "<key>",
  status: "live",
  path: "Default",
  knowledgeBases: [
    {
      knowledgeId: "customer-knowledge-base",
    },
  ],
  type: "a2a",
  role: "<value>",
  description: "inside from warmly duh angrily than rim flat until",
  instructions: "<value>",
  a2a: {
    agentUrl: "https://little-arcade.com",
  },
};
```

