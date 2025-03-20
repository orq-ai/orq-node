# DeploymentStreamMessage


## Supported Types

### `operations.DeploymentStreamMessage1`

```typescript
const value: operations.DeploymentStreamMessage1 = {
  role: "user",
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
  role: "correction",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessage3`

```typescript
const value: operations.DeploymentStreamMessage3 = {
  role: "system",
  url: "https://happy-go-lucky-formamide.com",
};
```

