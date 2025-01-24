# DeploymentInvokeDeploymentsMessage


## Supported Types

### `operations.DeploymentInvokeMessageDeployments1`

```typescript
const value: operations.DeploymentInvokeMessageDeployments1 = {
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

### `operations.DeploymentInvokeMessageDeployments2`

```typescript
const value: operations.DeploymentInvokeMessageDeployments2 = {
  role: "exception",
  content: "<value>",
};
```

### `operations.DeploymentInvokeMessage3`

```typescript
const value: operations.DeploymentInvokeMessage3 = {
  role: "prompt",
  url: "https://focused-glider.biz",
};
```

