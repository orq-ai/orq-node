# CompactResponseRequestBody

## Example Usage

```typescript
import { CompactResponseRequestBody } from "@orq-ai/node/models/operations";

let value: CompactResponseRequestBody = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `input`                                                                                  | *operations.CompactResponseInput*                                                        | :heavy_minus_sign:                                                                       | Input to compact: a string or an array of input items (messages, files, etc.).           |
| `instructions`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | Custom instructions for the compaction summarization.                                    |
| `model`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | The model to use for compaction in provider/model format (e.g. openai/gpt-4o). Required. |
| `previousResponseId`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of a previous response to continue from.                                          |
| `promptCacheKey`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | Key for prompt caching across requests.                                                  |