# DeploymentCreateMetric2DeploymentsMetricsInputAudio

## Example Usage

```typescript
import { DeploymentCreateMetric2DeploymentsMetricsInputAudio } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetric2DeploymentsMetricsInputAudio = {
  data: "<value>",
  format: "mp3",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Base64 encoded audio data.                                                                                                               |
| `format`                                                                                                                                 | [operations.DeploymentCreateMetric2DeploymentsMetricsFormat](../../models/operations/deploymentcreatemetric2deploymentsmetricsformat.md) | :heavy_check_mark:                                                                                                                       | The format of the encoded audio data. Currently supports `wav` and `mp3`.                                                                |