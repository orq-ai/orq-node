# CreateAgentToolChoice2

## Example Usage

```typescript
import { CreateAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: CreateAgentToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.CreateAgentToolChoiceType](../../models/operations/createagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                                   | The type of the tool. Currently, only function is supported.                                         |
| `function`                                                                                           | [operations.CreateAgentToolChoiceFunction](../../models/operations/createagenttoolchoicefunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |