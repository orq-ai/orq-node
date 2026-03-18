# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputAudio

Parameters for audio output. Required when audio output is requested with modalities: ["audio"]. Learn more.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputAudio } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputAudio = {
  voice: "shimmer",
  format: "wav",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `voice`                                                                                                                                                            | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputVoice](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidinputvoice.md)   | :heavy_check_mark:                                                                                                                                                 | The voice the model uses to respond. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.                                                             |
| `format`                                                                                                                                                           | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdInputFormat](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidinputformat.md) | :heavy_check_mark:                                                                                                                                                 | Specifies the output audio format. Must be one of wav, mp3, flac, opus, or pcm16.                                                                                  |