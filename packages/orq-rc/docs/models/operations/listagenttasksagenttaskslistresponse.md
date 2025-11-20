# ListAgentTasksAgentTasksListResponse

Response format for listing all tasks associated with an agent. Includes paginated task array and total count.

## Example Usage

```typescript
import { ListAgentTasksAgentTasksListResponse } from "@orq-ai/node/models/operations";

let value: ListAgentTasksAgentTasksListResponse = {
  tasks: [
    {
      id: "<id>",
      contextId: "<id>",
      kind: "task",
      status: {
        state: "submitted",
      },
      history: [],
    },
  ],
  overallTotal: 923.03,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `tasks`                                                                              | [operations.ExtendedTaskResponse](../../models/operations/extendedtaskresponse.md)[] | :heavy_check_mark:                                                                   | Array of agent tasks with full execution details                                     |
| `overallTotal`                                                                       | *number*                                                                             | :heavy_check_mark:                                                                   | Total count of tasks for this agent (across all pages, unfiltered)                   |