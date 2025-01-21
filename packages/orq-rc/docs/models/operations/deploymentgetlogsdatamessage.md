# DeploymentGetLogsDataMessage


## Supported Types

### `operations.DeploymentGetLogsMessageDeployments1`

```typescript
const value: operations.DeploymentGetLogsMessageDeployments1 = {
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

### `operations.DeploymentGetLogsMessageDeployments2`

```typescript
const value: operations.DeploymentGetLogsMessageDeployments2 = {
  role: "exception",
  content: "<value>",
};
```

### `operations.DeploymentGetLogsMessageDeployments3`

```typescript
const value: operations.DeploymentGetLogsMessageDeployments3 = {
  role: "expected_output",
  url: "https://decisive-integer.name/",
};
```

