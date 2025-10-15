# RequestBody2

## Example Usage

```typescript
import { RequestBody2 } from "@orq-ai/node/models/operations";

let value: RequestBody2 = {
  key: "<key>",
  externalConfig: {
    name: "<value>",
    apiUrl: "https://somber-schnitzel.name/",
    apiKey: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.CreateKnowledgeRequestBodyType](../../models/operations/createknowledgerequestbodytype.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `key`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `externalConfig`                                                                                       | [operations.ExternalConfig](../../models/operations/externalconfig.md)                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |