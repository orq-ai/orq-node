# DeploymentCreateMetric2DeploymentsMetricsFile

## Example Usage

```typescript
import { DeploymentCreateMetric2DeploymentsMetricsFile } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric2DeploymentsMetricsFile = {
  fileData: "<value>",
  filename: "example.file",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fileData`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The base64 encoded file data, used when passing the file to the model as a string. |
| `filename`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the file, used when passing the file to the model as a string.         |