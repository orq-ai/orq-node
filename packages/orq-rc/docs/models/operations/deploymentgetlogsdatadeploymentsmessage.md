# DeploymentGetLogsDataDeploymentsMessage


## Supported Types

### `operations.DeploymentGetLogsMessageDeploymentsResponse1`

```typescript
const value: operations.DeploymentGetLogsMessageDeploymentsResponse1 = {
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

### `operations.DeploymentGetLogsMessageDeploymentsResponse2`

```typescript
const value: operations.DeploymentGetLogsMessageDeploymentsResponse2 = {
  role: "correction",
  content: "<value>",
};
```

### `operations.DeploymentGetLogsMessageDeploymentsResponse3`

```typescript
const value: operations.DeploymentGetLogsMessageDeploymentsResponse3 = {
  role: "exception",
  url: "https://rough-atrium.org/",
};
```

