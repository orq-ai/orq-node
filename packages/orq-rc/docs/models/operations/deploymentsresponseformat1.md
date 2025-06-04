# DeploymentsResponseFormat1

## Example Usage

```typescript
import { DeploymentsResponseFormat1 } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: true,
    schema: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.DeploymentsResponseFormatDeploymentsType](../../models/operations/deploymentsresponseformatdeploymentstype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `jsonSchema`                                                                                                               | [operations.DeploymentsResponseFormatJsonSchema](../../models/operations/deploymentsresponseformatjsonschema.md)           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |