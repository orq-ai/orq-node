# StreamRunAgentToolChoiceAgents2

## Example Usage

```typescript
import { StreamRunAgentToolChoiceAgents2 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentToolChoiceAgents2 = {
  function: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.StreamRunAgentToolChoiceAgentsType](../../models/operations/streamrunagenttoolchoiceagentstype.md)         | :heavy_minus_sign:                                                                                                     | The type of the tool. Currently, only function is supported.                                                           |
| `function`                                                                                                             | [operations.StreamRunAgentToolChoiceAgentsFunction](../../models/operations/streamrunagenttoolchoiceagentsfunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |