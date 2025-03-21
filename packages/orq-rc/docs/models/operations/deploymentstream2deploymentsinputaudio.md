# DeploymentStream2DeploymentsInputAudio

## Example Usage

```typescript
import { DeploymentStream2DeploymentsInputAudio } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsInputAudio = {
  data: "<value>",
  format: "wav",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Base64 encoded audio data.                                                                                     |
| `format`                                                                                                       | [operations.DeploymentStream2DeploymentsFormat](../../models/operations/deploymentstream2deploymentsformat.md) | :heavy_check_mark:                                                                                             | The format of the encoded audio data. Currently supports `wav` and `mp3`.                                      |