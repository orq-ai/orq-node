# DataMessage


## Supported Types

### `operations.DeploymentGetLogsMessage1`

```typescript
const value: operations.DeploymentGetLogsMessage1 = {
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

### `operations.DeploymentGetLogsMessage2`

```typescript
const value: operations.DeploymentGetLogsMessage2 = {
  role: "expected_output",
  content: "<value>",
};
```

### `operations.DeploymentGetLogsMessage3`

```typescript
const value: operations.DeploymentGetLogsMessage3 = {
  role: "system",
  url: "https://impressive-barracks.info",
};
```

