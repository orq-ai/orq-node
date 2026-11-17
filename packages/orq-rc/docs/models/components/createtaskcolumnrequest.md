# CreateTaskColumnRequest

## Example Usage

```typescript
import { CreateTaskColumnRequest } from "@orq-ai/node/models/components";

let value: CreateTaskColumnRequest = {
  displayName: "Llewellyn35",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Column name.                                                                           |
| `prompt`                                                                               | [components.PromptTaskConfig](../../models/components/prompttaskconfig.md)             | :heavy_minus_sign:                                                                     | Runs a prompt. Set exactly one of `prompt`, `agent` or `openresponse`.                 |
| `agent`                                                                                | [components.AgentTaskConfig](../../models/components/agenttaskconfig.md)               | :heavy_minus_sign:                                                                     | Runs an agent.                                                                         |
| `openresponse`                                                                         | [components.OpenResponseTaskConfig](../../models/components/openresponsetaskconfig.md) | :heavy_minus_sign:                                                                     | Creates a column whose cells are filled outside orq.ai.                                |
| `position`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | 0-based position among the run's columns. Defaults to the end.                         |