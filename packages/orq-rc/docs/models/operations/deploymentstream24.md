# DeploymentStream24

## Example Usage

```typescript
import { DeploymentStream24 } from "@orq-ai/node/models/operations";

let value: DeploymentStream24 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestRequestBodyType](../../models/operations/deploymentstream2deploymentsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                             | The type of the content part. Always `file`.                                                                                                   |
| `file`                                                                                                                                         | [operations.DeploymentStream2File](../../models/operations/deploymentstream2file.md)                                                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |