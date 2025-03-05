# DeploymentStream23

## Example Usage

```typescript
import { DeploymentStream23 } from "@orq-ai/node/models/operations";

let value: DeploymentStream23 = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "mp3",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.DeploymentStream2DeploymentsRequestType](../../models/operations/deploymentstream2deploymentsrequesttype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `inputAudio`                                                                                                             | [operations.DeploymentStream2InputAudio](../../models/operations/deploymentstream2inputaudio.md)                         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |