# RunAgentModelConfiguration

Model configuration for this execution. Can override the agent manifest defaults if the agent already exists.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.RunAgentModelConfiguration2`

```typescript
const value: operations.RunAgentModelConfiguration2 = {
  id: "<id>",
  parameters: {
    fallbacks: [
      {
        model: "openai/gpt-4o-mini",
      },
    ],
    retry: {
      onCodes: [
        429,
        500,
        502,
        503,
        504,
      ],
    },
    cache: {
      ttl: 3600,
      type: "exact_match",
    },
    loadBalancer: [
      {
        type: "weight_based",
        model: "openai/gpt-4o",
        weight: 0.7,
      },
      {
        type: "weight_based",
        model: "openai/gpt-4o",
        weight: 0.7,
      },
    ],
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
};
```

