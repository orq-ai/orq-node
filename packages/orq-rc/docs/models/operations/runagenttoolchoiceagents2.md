# RunAgentToolChoiceAgents2

## Example Usage

```typescript
import { RunAgentToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: RunAgentToolChoiceAgents2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.RunAgentToolChoiceAgentsType](../../models/operations/runagenttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                         | The type of the tool. Currently, only function is supported.                                               |
| `function`                                                                                                 | [operations.RunAgentToolChoiceAgentsFunction](../../models/operations/runagenttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |