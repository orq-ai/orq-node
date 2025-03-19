# Three

## Example Usage

```typescript
import { Three } from "@orq-ai/node/models/operations";

let value: Three = {
  type: "input_audio",
  inputAudio: {
    data: "<value>",
    format: "mp3",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.DeploymentGetConfig2Type](../../models/operations/deploymentgetconfig2type.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `inputAudio`                                                                               | [operations.InputAudio](../../models/operations/inputaudio.md)                             | :heavy_check_mark:                                                                         | N/A                                                                                        |