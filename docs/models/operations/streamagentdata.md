# StreamAgentData


## Supported Types

### `operations.StreamAgentData1`

```typescript
const value: operations.StreamAgentData1 = {
  type: "agents.execution_started",
  timestamp: "<value>",
  data: {
    agentTaskId: "<id>",
    workspaceId: "<id>",
    traceId: "<id>",
  },
};
```

### `operations.StreamAgentData2`

```typescript
const value: operations.StreamAgentData2 = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
    inputMessage: {
      role: "system",
      parts: [],
    },
    modelId: "<id>",
    instructions: "<value>",
    systemPrompt: "<value>",
    agentManifestId: "<id>",
    agentKey: "<value>",
  },
};
```

### `operations.StreamAgentData3`

```typescript
const value: operations.StreamAgentData3 = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 4512.51,
    accumulatedExecutionTime: 7936.34,
  },
};
```

### `operations.StreamAgentData4`

```typescript
const value: operations.StreamAgentData4 = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "content_filter",
  },
};
```

### `operations.Data5`

```typescript
const value: operations.Data5 = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 4606.68,
  },
};
```

### `operations.Data6`

```typescript
const value: operations.Data6 = {
  type: "event.agents.action_review_requested",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    requiresApproval: false,
    tool: {
      id: "<id>",
      actionType: "<value>",
    },
    input: {
      "key": "<value>",
    },
    agentToolCallId: "<id>",
  },
};
```

### `operations.Data7`

```typescript
const value: operations.Data7 = {
  type: "event.agents.action_reviewed",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "approved",
  },
};
```

### `operations.Data8`

```typescript
const value: operations.Data8 = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

### `operations.Data9`

```typescript
const value: operations.Data9 = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

### `operations.Data10`

```typescript
const value: operations.Data10 = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

### `operations.Data11`

```typescript
const value: operations.Data11 = {
  type: "event.agents.handed_off",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    input: "<value>",
  },
};
```

### `operations.Data12`

```typescript
const value: operations.Data12 = {
  type: "event.agents.message-created",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    spanId: "<id>",
    parentId: "<id>",
    message: [
      {
        role: "tool",
        parts: [
          {
            kind: "data",
            data: {
              "key": "<value>",
            },
          },
        ],
      },
    ],
  },
};
```

### `operations.Data13`

```typescript
const value: operations.Data13 = {
  type: "event.workflow_events.tool_execution_started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    actionType: "<value>",
    toolArguments: {
      "key": "<value>",
      "key1": "<value>",
    },
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "external_events",
    },
  },
};
```

### `operations.Data14`

```typescript
const value: operations.Data14 = {
  type: "event.workflow_events.tool_execution_finished",
  timestamp: "<value>",
  data: {
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "otel",
    },
  },
};
```

### `operations.Data15`

```typescript
const value: operations.Data15 = {
  type: "event.workflow_events.tool_execution_failed",
  timestamp: "<value>",
  data: {
    error: {
      message: "<value>",
    },
    actionType: "<value>",
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "generic",
    },
  },
};
```

### `operations.Data16`

```typescript
const value: operations.Data16 = {
  type: "agents.timeout",
  timestamp: "<value>",
  data: {
    message: "<value>",
  },
};
```

### `operations.Data17`

```typescript
const value: operations.Data17 = {
  type: "agents.error",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: "<value>",
  },
};
```

