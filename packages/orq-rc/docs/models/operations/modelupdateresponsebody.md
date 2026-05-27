# ModelUpdateResponseBody

Model updated successfully

## Example Usage

```typescript
import { ModelUpdateResponseBody } from "@orq-ai/node/models/operations";

let value: ModelUpdateResponseBody = {
  configuration: {
    provider: "<value>",
  },
  created: new Date("2026-04-11T11:39:42.249Z"),
  description: "vaguely emboss furthermore woot fooey ew misreport",
  displayName: "Kiarra.Pacocha",
  docsUrl: "https://dependent-council.org/",
  enabled: true,
  enabledForEndpoints: true,
  enabledForPlayground: true,
  hasCpuPricing: false,
  hasFunctions: false,
  id: "<id>",
  inputCost: 4426.38,
  inputCurrency: "<value>",
  isActive: true,
  metadata: {
    isPrivate: true,
  },
  modelId: "<id>",
  modelType: "<value>",
  outputCost: 9847.25,
  outputCurrency: "<value>",
  owner: "<value>",
  parameters: [],
  pricingUrl: "https://grumpy-popularity.info",
  provider: "<value>",
  refId: "<id>",
  updated: new Date("2026-02-12T18:53:00.136Z"),
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
| `updated`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |