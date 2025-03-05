# DeploymentStreamMessage


## Supported Types

### `operations.DeploymentStreamMessage1`

```typescript
const value: operations.DeploymentStreamMessage1 = {
  role: "expected_output",
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
  role: "exception",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessage3`

```typescript
const value: operations.DeploymentStreamMessage3 = {
  role: "prompt",
  url: "https://unsung-pomelo.net/",
};
```

