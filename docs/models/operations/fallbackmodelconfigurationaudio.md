# FallbackModelConfigurationAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { FallbackModelConfigurationAudio } from "@orq-ai/node/models/operations";

let value: FallbackModelConfigurationAudio = {
  voice: "shimmer",
  format: "mp3",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `voice`                                                                                                    | [operations.FallbackModelConfigurationVoice](../../models/operations/fallbackmodelconfigurationvoice.md)   | :heavy_check_mark:                                                                                         | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.     |
| `format`                                                                                                   | [operations.FallbackModelConfigurationFormat](../../models/operations/fallbackmodelconfigurationformat.md) | :heavy_check_mark:                                                                                         | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                          |