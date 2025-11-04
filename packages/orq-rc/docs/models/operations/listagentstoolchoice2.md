# ListAgentsToolChoice2

## Example Usage

```typescript
import { ListAgentsToolChoice2 } from "@orq-ai/node/models/operations";

let value: ListAgentsToolChoice2 = {
  function: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.ListAgentsToolChoiceType](../../models/operations/listagentstoolchoicetype.md)         | :heavy_minus_sign:                                                                                 | The type of the tool. Currently, only function is supported.                                       |
| `function`                                                                                         | [operations.ListAgentsToolChoiceFunction](../../models/operations/listagentstoolchoicefunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |