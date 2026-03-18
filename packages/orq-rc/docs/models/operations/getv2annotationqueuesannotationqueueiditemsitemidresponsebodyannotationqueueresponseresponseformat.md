# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseResponseFormat

The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. If a format is provided but not supported by the provider, the response will be in the default format. When the provided format is not supported by the provider, the response will be in the default format.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseResponseFormat,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponseResponseFormat =
    "flac";
```

## Values

```typescript
"mp3" | "opus" | "aac" | "flac" | "wav" | "pcm"
```