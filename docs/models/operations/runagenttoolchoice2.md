# RunAgentToolChoice2

## Example Usage

```typescript
import { RunAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: RunAgentToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [operations.RunAgentToolChoiceType](../../models/operations/runagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                             | The type of the tool. Currently, only function is supported.                                   |
| `function`                                                                                     | [operations.RunAgentToolChoiceFunction](../../models/operations/runagenttoolchoicefunction.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |