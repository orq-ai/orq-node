# GetAgentToolChoiceAgents2

## Example Usage

```typescript
import { GetAgentToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: GetAgentToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.GetAgentToolChoiceAgentsType](../../models/operations/getagenttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                         | The type of the tool. Currently, only function is supported.                                               |
| `function`                                                                                                 | [operations.GetAgentToolChoiceAgentsFunction](../../models/operations/getagenttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |