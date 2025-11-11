# DuplicateAgentToolChoice2

## Example Usage

```typescript
import { DuplicateAgentToolChoice2 } from "@orq-ai/node/models/operations";

let value: DuplicateAgentToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.DuplicateAgentToolChoiceType](../../models/operations/duplicateagenttoolchoicetype.md)         | :heavy_minus_sign:                                                                                         | The type of the tool. Currently, only function is supported.                                               |
| `function`                                                                                                 | [operations.DuplicateAgentToolChoiceFunction](../../models/operations/duplicateagenttoolchoicefunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |