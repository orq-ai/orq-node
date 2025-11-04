# StreamRunAgentModel

The language model that powers the agent. Can be a simple string (e.g., "openai/gpt-4o") or an object with model ID and parameters. The model must support tool calling capabilities.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.StreamRunAgentModel2`

```typescript
const value: operations.StreamRunAgentModel2 = {
  id: "<id>",
};
```

