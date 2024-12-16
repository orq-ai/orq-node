# DeploymentsResponseFormat1

## Example Usage

```typescript
import { DeploymentsResponseFormat1 } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: false,
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.DeploymentsResponseFormatDeploymentsType](../../models/operations/deploymentsresponseformatdeploymentstype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `jsonSchema`                                                                                                               | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |