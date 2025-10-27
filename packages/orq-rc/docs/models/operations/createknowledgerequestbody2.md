# CreateKnowledgeRequestBody2

## Example Usage

```typescript
import { CreateKnowledgeRequestBody2 } from "@orq-ai/node/models/operations";

let value: CreateKnowledgeRequestBody2 = {
  key: "<key>",
  externalConfig: {
    name: "<value>",
    apiUrl: "https://which-igloo.com",
    apiKey: "<value>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.CreateKnowledgeRequestBodyKnowledgeType](../../models/operations/createknowledgerequestbodyknowledgetype.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `externalConfig`                                                                                                         | [operations.ExternalConfig](../../models/operations/externalconfig.md)                                                   | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |