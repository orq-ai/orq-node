# CreateResponseTools1

A function tool definition

## Example Usage

```typescript
import { CreateResponseTools1 } from "@orq-ai/node/models/operations";

let value: CreateResponseTools1 = {
  type: "function",
  name: "<value>",
  parameters: {
    type: "object",
    properties: {},
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreateResponseToolsProxyResponseType](../../models/operations/createresponsetoolsproxyresponsetype.md) | :heavy_check_mark:                                                                                                 | The type of tool                                                                                                   |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The name of the function to be called                                                                              |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A description of what the function does                                                                            |
| `parameters`                                                                                                       | [operations.CreateResponseToolsParameters](../../models/operations/createresponsetoolsparameters.md)               | :heavy_check_mark:                                                                                                 | The parameters the function accepts                                                                                |
| `strict`                                                                                                           | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether to enable strict schema adherence when generating function calls                                           |