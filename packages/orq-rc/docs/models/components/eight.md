# Eight

Embeds the document before splitting it recursively, so each chunk is embedded with the surrounding document in context. Makes paid embedding calls.

## Example Usage

```typescript
import { Eight } from "@orq-ai/node/models/components";

let value: Eight = {
  type: "late",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"late"*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `chunkSize`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of tokens per chunk.                                                                  |
| `separators`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Separator hierarchy to split on, tried in order. Defaults to paragraph, line, space, then character. |
| `minCharactersPerChunk`                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Minimum number of characters each chunk must contain.                                                |
| `embeddingModel`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Embedding model used to embed the document before it is split.                                       |
| `dimensions`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Number of dimensions for the embedding output, when the model supports it.                           |