# UpdateAgentToolChoiceAgents2

## Example Usage

```typescript
import { UpdateAgentToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: UpdateAgentToolChoiceAgents2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.UpdateAgentToolChoiceAgentsType](../../models/operations/updateagenttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                               | The type of the tool. Currently, only function is supported.                                                     |
| `function`                                                                                                       | [operations.UpdateAgentToolChoiceAgentsFunction](../../models/operations/updateagenttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |