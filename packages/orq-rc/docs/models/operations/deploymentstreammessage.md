# DeploymentStreamMessage


## Supported Types

### `operations.DeploymentStreamMessage1`

```typescript
const value: operations.DeploymentStreamMessage1 = {
  type: "tool_calls",
  role: "system",
  toolCalls: [],
};
```

### `operations.DeploymentStreamMessage2`

```typescript
const value: operations.DeploymentStreamMessage2 = {
  type: "content",
  role: "expected_output",
  content: "<value>",
};
```

### `operations.DeploymentStreamMessage3`

```typescript
const value: operations.DeploymentStreamMessage3 = {
  type: "image",
  role: "exception",
  url: "https://unhappy-restaurant.info/",
};
```

