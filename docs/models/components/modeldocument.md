# ModelDocument

## Example Usage

```typescript
import { ModelDocument } from "@orq-ai/node/models/components";

let value: ModelDocument = {
  configuration: {
    provider: "<value>",
  },
  created: new Date("2025-10-18T03:46:28.516Z"),
  description: "zealous fondly edge unlike advanced waft as",
  displayName: "Bobbie45",
  docsUrl: "https://alive-plumber.biz",
  enabled: true,
  enabledForEndpoints: false,
  enabledForPlayground: true,
  hasCpuPricing: false,
  hasFunctions: true,
  id: "<id>",
  inputCost: 3560.23,
  inputCurrency: "<value>",
  isActive: true,
  metadata: {
    isPrivate: true,
  },
  modelId: "<id>",
  modelType: "<value>",
  outputCost: 2054.57,
  outputCurrency: "<value>",
  owner: "<value>",
  parameters: [],
  pricingUrl: "https://first-muscat.com/",
  provider: "<value>",
  refId: "<id>",
  updated: new Date("2026-05-01T15:28:33.549Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `configuration`                                                                                | [components.ModelConfigurationResponse](../../models/components/modelconfigurationresponse.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `created`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `displayName`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `docsUrl`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `enabled`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `enabledForEndpoints`                                                                          | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `enabledForPlayground`                                                                         | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasCpuPricing`                                                                                | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasFunctions`                                                                                 | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `inputCost`                                                                                    | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `inputCurrency`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `isActive`                                                                                     | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [components.ModelMetadata](../../models/components/modelmetadata.md)                           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelDeveloper`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `modelFamily`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `modelId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelType`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `outputCost`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `outputCurrency`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `owner`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `parameters`                                                                                   | [components.ModelParameterDocument](../../models/components/modelparameterdocument.md)[]       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pricingUrl`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `provider`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `refId`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `sharing`                                                                                      | [components.Config](../../models/components/config.md)                                         | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `updated`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |