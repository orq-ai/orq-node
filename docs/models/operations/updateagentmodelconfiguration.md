# UpdateAgentModelConfiguration

Model configuration for agent execution. Can be a simple model ID string or a configuration object with optional behavior parameters and retry settings.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.UpdateAgentModelConfiguration2`

```typescript
const value: operations.UpdateAgentModelConfiguration2 = {
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

