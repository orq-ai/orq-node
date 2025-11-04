# CreateAgentToolChoiceAgents2

## Example Usage

```typescript
import { CreateAgentToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: CreateAgentToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.CreateAgentToolChoiceAgentsType](../../models/operations/createagenttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                               | The type of the tool. Currently, only function is supported.                                                     |
| `function`                                                                                                       | [operations.CreateAgentToolChoiceAgentsFunction](../../models/operations/createagenttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |