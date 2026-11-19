# ModelAzureFoundryDeploymentsRequestBody

## Example Usage

```typescript
import { ModelAzureFoundryDeploymentsRequestBody } from "@orq-ai/node/models/operations";

let value: ModelAzureFoundryDeploymentsRequestBody = {
  baseUrl: "https://first-bench.org/",
  provider: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Required unless integration_id is set.                                                                                       |
| `apiVersion`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `baseUrl`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `integrationId`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Azure workload identity federation integration that authenticates the listing with an Entra access token instead of api_key. |
| `provider`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |