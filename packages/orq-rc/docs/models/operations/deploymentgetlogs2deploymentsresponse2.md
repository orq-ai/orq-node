# DeploymentGetLogs2DeploymentsResponse2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentGetLogs2DeploymentsResponse2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogs2DeploymentsResponse2 = {
  type: "image_url",
  imageUrl: {
    url: "https://vivid-spear.com",
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.DeploymentGetLogs2DeploymentsResponse200ApplicationJSONResponseBodyType](../../models/operations/deploymentgetlogs2deploymentsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `imageUrl`                                                                                                                                                                               | [operations.DeploymentGetLogs2DeploymentsResponseImageUrl](../../models/operations/deploymentgetlogs2deploymentsresponseimageurl.md)                                                     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |