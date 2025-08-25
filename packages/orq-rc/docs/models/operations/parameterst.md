# ParametersT

The parameters the functions accepts, described as a JSON Schema object

## Example Usage

```typescript
import { ParametersT } from "@orq-ai/node/models/operations";

let value: ParametersT = {
  type: "object",
  properties: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreateChatCompletionProxyRequestType](../../models/operations/createchatcompletionproxyrequesttype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `properties`                                                                                                       | Record<string, *any*>                                                                                              | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `required`                                                                                                         | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `additionalProperties`                                                                                             | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |