# PostV2ProxyCompletionsSearchOptions

Additional search options

## Example Usage

```typescript
import { PostV2ProxyCompletionsSearchOptions } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsSearchOptions = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `includeVectors`                             | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the vector in the chunk   |
| `includeMetadata`                            | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the metadata in the chunk |
| `includeScores`                              | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the scores in the chunk   |