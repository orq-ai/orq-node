# StreamRunAgentModelConfiguration

Model configuration for this execution. Can override the agent manifest defaults if the agent already exists.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.StreamRunAgentModelConfiguration2`

```typescript
const value: operations.StreamRunAgentModelConfiguration2 = {
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

