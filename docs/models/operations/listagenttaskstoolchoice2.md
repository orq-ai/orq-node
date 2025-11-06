# ListAgentTasksToolChoice2

## Example Usage

```typescript
import { ListAgentTasksToolChoice2 } from "@orq-ai/node/models/operations";

let value: ListAgentTasksToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.ListAgentTasksToolChoiceType](../../models/operations/listagenttaskstoolchoicetype.md)         | :heavy_minus_sign:                                                                                         | The type of the tool. Currently, only function is supported.                                               |
| `function`                                                                                                 | [operations.ListAgentTasksToolChoiceFunction](../../models/operations/listagenttaskstoolchoicefunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |