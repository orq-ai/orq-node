# DeploymentInvokeDeploymentsMessage


## Supported Types

### `operations.DeploymentInvokeMessageDeployments1`

```typescript
const value: operations.DeploymentInvokeMessageDeployments1 = {
  role: "tool",
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

### `operations.DeploymentInvokeMessageDeployments2`

```typescript
const value: operations.DeploymentInvokeMessageDeployments2 = {
  role: "assistant",
  content: "<value>",
};
```

### `operations.DeploymentInvokeMessage3`

```typescript
const value: operations.DeploymentInvokeMessage3 = {
  role: "system",
  url: "https://windy-version.org",
};
```

