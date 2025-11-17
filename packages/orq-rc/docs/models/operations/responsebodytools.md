# ResponseBodyTools

## Example Usage

```typescript
import { ResponseBodyTools } from "@orq-ai/node/models/operations";

let value: ResponseBodyTools = {
  name: "<value>",
  schema: {
    type: "object",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `schema`                                                                                           | [operations.CreateToolResponseBodySchema](../../models/operations/createtoolresponsebodyschema.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |