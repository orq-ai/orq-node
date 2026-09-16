# DeploymentGetConfig2Deployments4

## Example Usage

```typescript
import { DeploymentGetConfig2Deployments4 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig2Deployments4 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | *"file"*                                                                                                                         | :heavy_check_mark:                                                                                                               | The type of the content part. Always `file`.                                                                                     |
| `cacheControl`                                                                                                                   | [operations.DeploymentGetConfig2DeploymentsCacheControl](../../models/operations/deploymentgetconfig2deploymentscachecontrol.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `file`                                                                                                                           | [components.FileContentPartSchema](../../models/components/filecontentpartschema.md)                                             | :heavy_check_mark:                                                                                                               | File data for the content part. Must contain either file_data or uri, but not both.                                              |