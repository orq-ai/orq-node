# FallbackModelConfiguration

Fallback model for automatic failover when primary model request fails. Supports optional parameter overrides. Can be a simple model ID string or a configuration object with model-specific parameters. Fallbacks are tried in order.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.FallbackModelConfiguration2`

```typescript
const value: operations.FallbackModelConfiguration2 = {
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
};
```

