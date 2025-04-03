# CreateChunkMetadata

Metadata of the chunk

## Example Usage

```typescript
import { CreateChunkMetadata } from "@orq-ai/node/models/operations";

let value: CreateChunkMetadata = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `pageNumber`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | In case you are using PDFs, Word, PowerPoint, etc. this is the page number of the chunk. |