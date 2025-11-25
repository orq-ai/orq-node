# StreamRunAgentData


## Supported Types

### `operations.Data1`

```typescript
const value: operations.Data1 = {
  type: "agents.execution_started",
  timestamp: "<value>",
  data: {
    agentTaskId: "<id>",
    workspaceId: "<id>",
    traceId: "<id>",
  },
};
```

### `operations.Data2`

```typescript
const value: operations.Data2 = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    inputMessage: {
      role: "agent",
      parts: [
        {
          kind: "tool_result",
          toolCallId: "<id>",
        },
      ],
    },
    modelId: "<id>",
    instructions: "<value>",
    systemPrompt: "<value>",
    agentManifestId: "<id>",
    agentKey: "<value>",
  },
};
```

### `operations.Data3`

```typescript
const value: operations.Data3 = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 7554.34,
    accumulatedExecutionTime: 6180.18,
  },
};
```

### `operations.Data4`

```typescript
const value: operations.Data4 = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "tool_calls",
    workflowRunId: "<id>",
  },
};
```

### `operations.StreamRunAgentData5`

```typescript
const value: operations.StreamRunAgentData5 = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 1241.14,
    workflowRunId: "<id>",
  },
};
```

### `operations.StreamRunAgentData6`

```typescript
const value: operations.StreamRunAgentData6 = {
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
    input: {},
    agentToolCallId: "<id>",
  },
};
```

### `operations.Seven`

```typescript
const value: operations.Seven = {
  type: "event.agents.action_reviewed",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    actionId: "<id>",
    agentToolCallId: "<id>",
    review: "rejected",
    workflowRunId: "<id>",
  },
};
```

### `operations.Eight`

```typescript
const value: operations.Eight = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

### `operations.Nine`

```typescript
const value: operations.Nine = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

### `operations.Ten`

```typescript
const value: operations.Ten = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

### `operations.Eleven`

```typescript
const value: operations.Eleven = {
  type: "event.agents.handed_off",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    input: "<value>",
  },
};
```

### `operations.Twelve`

```typescript
const value: operations.Twelve = {
  type: "event.agents.message-created",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
    spanId: "<id>",
    parentId: "<id>",
    message: [],
  },
};
```

### `operations.Thirteen`

```typescript
const value: operations.Thirteen = {
  type: "event.workflow_events.tool_execution_started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    actionType: "<value>",
    toolArguments: {},
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "deployments",
    },
    workflowRunId: "<id>",
  },
};
```

### `operations.Fourteen`

```typescript
const value: operations.Fourteen = {
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
      product: "spreadsheet_run",
    },
    workflowRunId: "<id>",
  },
};
```

### `operations.Fifteen`

```typescript
const value: operations.Fifteen = {
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
      product: "remoteconfigs",
    },
    workflowRunId: "<id>",
  },
};
```

### `operations.Sixteen`

```typescript
const value: operations.Sixteen = {
  type: "agents.timeout",
  timestamp: "<value>",
  data: {
    message: "<value>",
  },
};
```

### `operations.Seventeen`

```typescript
const value: operations.Seventeen = {
  type: "agents.error",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: "<value>",
  },
};
```

