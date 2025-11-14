# Three

## Example Usage

```typescript
import { Three } from "@orq-ai/node/models/components";

let value: Three = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "wav",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.InvokeDeploymentRequest2Type](../../models/components/invokedeploymentrequest2type.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `inputAudio`                                                                                       | [components.InputAudio](../../models/components/inputaudio.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |