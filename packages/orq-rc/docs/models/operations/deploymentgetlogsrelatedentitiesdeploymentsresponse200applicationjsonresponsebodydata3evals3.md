# DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData3Evals3

Define the relationship between an entity and a human eval, also known as feedback

## Example Usage

```typescript
import {
  DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData3Evals3,
} from "@orq-ai/node/models/operations";

let value:
  DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData3Evals3 =
    {
      type: "human_eval",
      humanEvalId: "<id>",
    };
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                       | [operations.DeploymentGetLogsRelatedEntitiesDeploymentsResponse200ApplicationJSONResponseBodyData3Evals23Type](../../models/operations/deploymentgetlogsrelatedentitiesdeploymentsresponse200applicationjsonresponsebodydata3evals23type.md) | :heavy_check_mark:                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                          |
| `humanEvalId`                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The id of the resource                                                                                                                                                                                                                       |