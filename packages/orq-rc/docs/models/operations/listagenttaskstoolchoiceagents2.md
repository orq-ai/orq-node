# ListAgentTasksToolChoiceAgents2

## Example Usage

```typescript
import { ListAgentTasksToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: ListAgentTasksToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.ListAgentTasksToolChoiceAgentsType](../../models/operations/listagenttaskstoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                                     | The type of the tool. Currently, only function is supported.                                                           |
| `function`                                                                                                             | [operations.ListAgentTasksToolChoiceAgentsFunction](../../models/operations/listagenttaskstoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |