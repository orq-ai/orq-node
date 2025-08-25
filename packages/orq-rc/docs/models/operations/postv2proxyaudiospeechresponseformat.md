# PostV2ProxyAudioSpeechResponseFormat

The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. If a format is provided but not supported by the provider, the response will be in the default format. When the provided format is not supported by the provider, the response will be in the default format.

## Example Usage

```typescript
import { PostV2ProxyAudioSpeechResponseFormat } from "@orq-ai/node/models/operations";

let value: PostV2ProxyAudioSpeechResponseFormat = "opus";
```

## Values

```typescript
"mp3" | "opus" | "aac" | "flac" | "wav" | "pcm"
```