# ResponseBodyTimestampsGranularity

The granularity of the timestamps in the transcription. Word provides word-level timestamps and character provides character-level timestamps per word.

## Example Usage

```typescript
import { ResponseBodyTimestampsGranularity } from "@orq-ai/node/models/operations";

let value: ResponseBodyTimestampsGranularity = "none";
```

## Values

```typescript
"none" | "word" | "character"
```