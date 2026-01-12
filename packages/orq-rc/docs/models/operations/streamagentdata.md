# StreamAgentData


## Supported Types

### `components.AgentExecutionStartedStreamingEvent`

```typescript
const value: components.AgentExecutionStartedStreamingEvent = {
  type: "agents.execution_started",
  timestamp: "<value>",
  data: {
    agentTaskId: "<id>",
    workspaceId: "<id>",
    traceId: "<id>",
  },
};
```

### `components.AgentStartedStreamingEvent`

```typescript
const value: components.AgentStartedStreamingEvent = {
  type: "event.agents.started",
  timestamp: "<value>",
  data: {
    workflowRunId: "<id>",
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

### `components.AgentThoughtStreamingEvent`

```typescript
const value: components.AgentThoughtStreamingEvent = {
  type: "event.agents.thought",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    messageDifference: {},
    iteration: 8683.49,
    accumulatedExecutionTime: 1876.58,
  },
};
```

### `components.AgentInactiveStreamingEvent`

```typescript
const value: components.AgentInactiveStreamingEvent = {
  type: "event.agents.inactive",
  timestamp: "<value>",
  data: {
    lastMessage: "<value>",
    finishReason: "stop",
    workflowRunId: "<id>",
  },
};
```

### `components.AgentErroredStreamingEvent`

```typescript
const value: components.AgentErroredStreamingEvent = {
  type: "event.agents.errored",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: 8483.2,
    workflowRunId: "<id>",
  },
};
```

### `components.ActionReviewRequestedStreamingEvent`

```typescript
const value: components.ActionReviewRequestedStreamingEvent = {
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

### `components.ActionReviewedStreamingEvent`

```typescript
const value: components.ActionReviewedStreamingEvent = {
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

### `components.ExecutionReviewRequiredStreamingEvent`

```typescript
const value: components.ExecutionReviewRequiredStreamingEvent = {
  type: "event.agents.execution_review_required",
  timestamp: "<value>",
  data: {},
};
```

### `components.ExecutionReviewedStreamingEvent`

```typescript
const value: components.ExecutionReviewedStreamingEvent = {
  type: "event.agents.execution_reviewed",
  timestamp: "<value>",
  data: {},
};
```

### `components.ExecutionNamedStreamingEvent`

```typescript
const value: components.ExecutionNamedStreamingEvent = {
  type: "event.agents.execution_named",
  timestamp: "<value>",
  data: {
    name: "<value>",
    agentManifestId: "<id>",
  },
};
```

### `components.AgentHandedOffStreamingEvent`

```typescript
const value: components.AgentHandedOffStreamingEvent = {
  type: "event.agents.handed_off",
  timestamp: "<value>",
  data: {
    agentId: "<id>",
    input: "<value>",
  },
};
```

### `components.AgentMessageCreatedStreamingEvent`

```typescript
const value: components.AgentMessageCreatedStreamingEvent = {
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

### `components.ToolExecutionStartedStreamingEvent`

```typescript
const value: components.ToolExecutionStartedStreamingEvent = {
  type: "event.workflow_events.tool_execution_started",
  timestamp: "<value>",
  data: {
    toolId: "<id>",
    actionType: "<value>",
    toolArguments: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    toolExecutionContext: {
      actionId: "<id>",
      agentToolCallId: "<id>",
      workspaceId: "<id>",
      agentManifestId: "<id>",
      agentExecutionId: "<id>",
      product: "evaluators",
    },
    workflowRunId: "<id>",
  },
};
```

### `components.ToolExecutionFinishedStreamingEvent`

```typescript
const value: components.ToolExecutionFinishedStreamingEvent = {
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
      product: "experiments",
    },
    workflowRunId: "<id>",
  },
};
```

### `components.ToolExecutionFailedStreamingEvent`

```typescript
const value: components.ToolExecutionFailedStreamingEvent = {
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
      product: "agents",
    },
    workflowRunId: "<id>",
  },
};
```

### `components.TimeoutStreamingEvent`

```typescript
const value: components.TimeoutStreamingEvent = {
  type: "agents.timeout",
  timestamp: "<value>",
  data: {
    message: "<value>",
  },
};
```

### `components.ErrorStreamingEvent`

```typescript
const value: components.ErrorStreamingEvent = {
  type: "agents.error",
  timestamp: "<value>",
  data: {
    error: "<value>",
    code: "<value>",
  },
};
```

