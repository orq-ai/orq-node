# CreateDatasourceMetadata

## Example Usage

```typescript
import { CreateDatasourceMetadata } from "@orq-ai/node/models/operations";

let value: CreateDatasourceMetadata = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `wordsCount`                     | *number*                         | :heavy_minus_sign:               | Number of words in the text      |
| `sentencesCount`                 | *number*                         | :heavy_minus_sign:               | Number of sentences in the text  |
| `paragraphsCount`                | *number*                         | :heavy_minus_sign:               | Number of paragraphs in the text |
| `tokensCount`                    | *number*                         | :heavy_minus_sign:               | Number of tokens in the text     |
| `charactersCount`                | *number*                         | :heavy_minus_sign:               | Number of characters in the text |
| `chunksCount`                    | *number*                         | :heavy_minus_sign:               | Number of total chunks           |
| `additionalProperties`           | Record<string, *any*>            | :heavy_minus_sign:               | N/A                              |