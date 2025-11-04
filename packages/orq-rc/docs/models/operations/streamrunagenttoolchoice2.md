# StreamRunAgentToolChoice2

## Example Usage

```typescript
import { StreamRunAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.StreamRunAgentToolChoiceType](../../models/operations/streamrunagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                                         | The type of the tool. Currently, only function is supported.                                               |
| `function`                                                                                                 | [operations.StreamRunAgentToolChoiceFunction](../../models/operations/streamrunagenttoolchoicefunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |