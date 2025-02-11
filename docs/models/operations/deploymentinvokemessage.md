# DeploymentInvokeMessage


## Supported Types

### `operations.DeploymentInvokeMessage1`

```typescript
const value: operations.DeploymentInvokeMessage1 = {
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

### `operations.DeploymentInvokeMessage2`

```typescript
const value: operations.DeploymentInvokeMessage2 = {
  role: "tool",
  content: "<value>",
};
```

### `operations.Message3`

```typescript
const value: operations.Message3 = {
  role: "expected_output",
  url: "https://exalted-breastplate.com/",
};
```

