# DeploymentStreamMessage


## Supported Types

### `operations.DeploymentStreamMessage1`

```typescript
const value: operations.DeploymentStreamMessage1 = {
  role: "correction",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

### `operations.DeploymentStreamMessage2`

```typescript
const value: operations.DeploymentStreamMessage2 = {
  role: "prompt",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessage3`

```typescript
const value: operations.DeploymentStreamMessage3 = {
  role: "assistant",
  url: "https://standard-venom.info/",
};
```

