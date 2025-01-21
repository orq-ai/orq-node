# DeploymentGetLogs22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentGetLogs22 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogs22 = {
  type: "image_url",
  imageUrl: {
    url: "https://aching-alb.name",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.DeploymentGetLogs2DeploymentsType](../../models/operations/deploymentgetlogs2deploymentstype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `imageUrl`                                                                                                   | [operations.DeploymentGetLogs2ImageUrl](../../models/operations/deploymentgetlogs2imageurl.md)               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |