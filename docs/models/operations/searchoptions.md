# SearchOptions

Additional search options

## Example Usage

```typescript
import { SearchOptions } from "@orq-ai/node/models/operations";

let value: SearchOptions = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `includeVectors`                             | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the vector in the chunk   |
| `includeMetadata`                            | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the metadata in the chunk |
| `includeScores`                              | *boolean*                                    | :heavy_minus_sign:                           | Whether to include the scores in the chunk   |