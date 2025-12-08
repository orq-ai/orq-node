# UpdateAgentToolChoice2

## Example Usage

```typescript
import { UpdateAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: UpdateAgentToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.UpdateAgentToolChoiceType](../../models/operations/updateagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                                   | The type of the tool. Currently, only function is supported.                                         |
| `function`                                                                                           | [operations.UpdateAgentToolChoiceFunction](../../models/operations/updateagenttoolchoicefunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |