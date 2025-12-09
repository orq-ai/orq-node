# ResponseStreamingEvent

Union of all possible streaming events. Each event has a type field for discrimination.


## Supported Types

### `components.ResponseStartedEvent`

```typescript
const value: components.ResponseStartedEvent = {
  type: "response.started",
  timestamp: "<value>",
  data: {
    responseId: "<id>",
    taskId: "<id>",
    model: "Silverado",
    workflowRunId: "<id>",
  },
};
```

### `components.ResponseDoneEvent`

```typescript
const value: components.ResponseDoneEvent = {
  type: "response.done",
  timestamp: "<value>",
  data: {
    finishReason: "length",
  },
};
```

### `components.ResponseFailedEvent`

```typescript
const value: components.ResponseFailedEvent = {
  type: "response.failed",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 8657.41,
  },
};
```

### `components.ToolStartedEvent`

```typescript
const value: components.ToolStartedEvent = {
  type: "tool.started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    arguments: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

### `components.ToolDoneEvent`

```typescript
const value: components.ToolDoneEvent = {
  type: "tool.done",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
  },
};
```

### `components.ToolFailedEvent`

```typescript
const value: components.ToolFailedEvent = {
  type: "tool.failed",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    error: "<value>",
  },
};
```

### `components.ToolReviewRequestedEvent`

```typescript
const value: components.ToolReviewRequestedEvent = {
  type: "tool.review.requested",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    arguments: {},
    requiresApproval: false,
  },
};
```

### `components.ToolReviewDoneEvent`

```typescript
const value: components.ToolReviewDoneEvent = {
  type: "tool.review.done",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    toolCallId: "<id>",
    review: "approved",
  },
};
```

### `components.PartDeltaEvent`

```typescript
const value: components.PartDeltaEvent = {
  type: "part.delta",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    delta: {
      kind: "data",
      data: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  },
};
```

### `components.PartDoneEvent`

```typescript
const value: components.PartDoneEvent = {
  type: "part.done",
  timestamp: "<value>",
  data: {
    partId: "text_01hxyz123abc",
    part: {
      kind: "data",
      data: {
        "key": "<value>",
      },
    },
  },
};
```

