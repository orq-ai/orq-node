# CreateAgentToolChoiceAgentsResponse2

## Example Usage

```typescript
import { CreateAgentToolChoiceAgentsResponse2 } from "@orq-ai/node/models/operations";

let value: CreateAgentToolChoiceAgentsResponse2 = {
  function: {},
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.CreateAgentToolChoiceAgentsResponseType](../../models/operations/createagenttoolchoiceagentsresponsetype.md)         | :heavy_minus_sign:                                                                                                               | The type of the tool. Currently, only function is supported.                                                                     |
| `function`                                                                                                                       | [operations.CreateAgentToolChoiceAgentsResponseFunction](../../models/operations/createagenttoolchoiceagentsresponsefunction.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |