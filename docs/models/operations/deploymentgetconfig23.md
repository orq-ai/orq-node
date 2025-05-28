# DeploymentGetConfig23

## Example Usage

```typescript
import { DeploymentGetConfig23 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig23 = {
  type: "file",
  file: {
    fileData: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.DeploymentGetConfig2DeploymentsResponse200ApplicationJSONType](../../models/operations/deploymentgetconfig2deploymentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                   | The type of the content part. Always `file`.                                                                                                                         |
| `file`                                                                                                                                                               | [operations.DeploymentGetConfig2File](../../models/operations/deploymentgetconfig2file.md)                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |