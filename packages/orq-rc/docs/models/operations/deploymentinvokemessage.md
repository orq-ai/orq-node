# DeploymentInvokeMessage


## Supported Types

### `operations.DeploymentInvokeMessage1`

```typescript
const value: operations.DeploymentInvokeMessage1 = {
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

### `operations.DeploymentInvokeMessage2`

```typescript
const value: operations.DeploymentInvokeMessage2 = {
  role: "user",
  content: "<value>",
};
```

### `operations.DeploymentInvokeMessage3`

```typescript
const value: operations.DeploymentInvokeMessage3 = {
  role: "correction",
  url: "https://afraid-folklore.com",
};
```

