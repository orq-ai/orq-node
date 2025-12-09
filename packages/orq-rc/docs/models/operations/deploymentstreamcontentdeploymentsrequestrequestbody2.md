# DeploymentStreamContentDeploymentsRequestRequestBody2


## Supported Types

### `operations.DeploymentStream2Deployments1`

```typescript
const value: operations.DeploymentStream2Deployments1 = {
  type: "text",
  text: "<value>",
};
```

### `components.RefusalPartSchema`

```typescript
const value: components.RefusalPartSchema = {
  type: "refusal",
};
```

### `components.ReasoningPartSchema`

```typescript
const value: components.ReasoningPartSchema = {
  type: "reasoning",
  reasoning: "<value>",
  signature: "<value>",
};
```

### `components.RedactedReasoningPartSchema`

```typescript
const value: components.RedactedReasoningPartSchema = {
  type: "redacted_reasoning",
  data: "<value>",
};
```

