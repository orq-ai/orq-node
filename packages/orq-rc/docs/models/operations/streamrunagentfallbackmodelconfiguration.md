# StreamRunAgentFallbackModelConfiguration

Fallback model for automatic failover when primary model request fails. Supports optional parameter overrides. Can be a simple model ID string or a configuration object with model-specific parameters. Fallbacks are tried in order.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.StreamRunAgentFallbackModelConfiguration2`

```typescript
const value: operations.StreamRunAgentFallbackModelConfiguration2 = {
  id: "<id>",
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

