# CreateAgentRequestToolChoice2

## Example Usage

```typescript
import { CreateAgentRequestToolChoice2 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestToolChoice2 = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreateAgentRequestToolChoiceType](../../models/operations/createagentrequesttoolchoicetype.md)         | :heavy_minus_sign:                                                                                                 | The type of the tool. Currently, only function is supported.                                                       |
| `function`                                                                                                         | [operations.CreateAgentRequestToolChoiceFunction](../../models/operations/createagentrequesttoolchoicefunction.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |