# ModelCreateAutorouterResponseBody

Autorouter model created successfully

## Example Usage

```typescript
import { ModelCreateAutorouterResponseBody } from "@orq-ai/node/models/operations";

let value: ModelCreateAutorouterResponseBody = {
  configuration: {
    provider: "<value>",
  },
  created: new Date("2026-05-03T17:26:23.471Z"),
  description:
    "mozzarella disconnection adumbrate chubby drat through uh-huh bakeware",
  displayName: "Haskell.Doyle30",
  docsUrl: "https://tricky-pigpen.net",
  enabled: false,
  enabledForEndpoints: false,
  enabledForPlayground: false,
  hasCpuPricing: false,
  hasFunctions: false,
  id: "<id>",
  inputCost: 4167.26,
  inputCurrency: "<value>",
  isActive: true,
  metadata: {
    isPrivate: true,
  },
  modelId: "<id>",
  modelType: "<value>",
  outputCost: 9707.12,
  outputCurrency: "<value>",
  owner: "<value>",
  parameters: [
    {
      config: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      description: "anenst honestly pink even",
      id: "<id>",
      isActive: false,
      name: "<value>",
      parameter: "<value>",
      parameterType: "<value>",
    },
  ],
  pricingUrl: "https://scientific-swim.info/",
  provider: "<value>",
  refId: "<id>",
  updated: new Date("2025-04-09T07:06:27.164Z"),
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