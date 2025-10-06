# ListAgentTasksMemory

Memory configuration for this execution

## Example Usage

```typescript
import { ListAgentTasksMemory } from "@orq-ai/node/models/operations";

let value: ListAgentTasksMemory = {
  entityId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `entityId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | Entity identifier used for memory store isolation (user/session/conversation) |