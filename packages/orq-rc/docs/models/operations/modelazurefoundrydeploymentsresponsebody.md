# ModelAzureFoundryDeploymentsResponseBody

Azure Foundry deployments listed

## Example Usage

```typescript
import { ModelAzureFoundryDeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: ModelAzureFoundryDeploymentsResponseBody = {
  deployments: [],
  region: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `deployments`                                                                            | [components.AzureFoundryDeployment](../../models/components/azurefoundrydeployment.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `region`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |