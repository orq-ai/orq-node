# InvokeDeploymentRequestContentMessages42


## Supported Types

### `components.TextContentPartSchema`

```typescript
const value: components.TextContentPartSchema = {
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

