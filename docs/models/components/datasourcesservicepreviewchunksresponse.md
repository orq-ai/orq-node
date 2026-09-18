# DatasourcesServicePreviewChunksResponse

## Example Usage

```typescript
import { DatasourcesServicePreviewChunksResponse } from "@orq-ai/node/models/components";

let value: DatasourcesServicePreviewChunksResponse = {
  chunks: [],
  metadata: {
    wordsCount: 729058,
    sentencesCount: 910520,
    paragraphsCount: 274235,
    tokensCount: 789314,
    charactersCount: 306106,
    chunksCount: 12293,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `chunks`                                                                             | [components.PreviewChunk](../../models/components/previewchunk.md)[]                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [components.PreviewChunksMetadata](../../models/components/previewchunksmetadata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |