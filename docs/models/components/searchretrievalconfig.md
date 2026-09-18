# SearchRetrievalConfig

SearchRetrievalConfig mirrors RetrievalConfigInDatabaseSchema. Type remains
 optional because external knowledge bases use the same base configuration
 without a retrieval strategy discriminator.

## Example Usage

```typescript
import { SearchRetrievalConfig } from "@orq-ai/node/models/components";

let value: SearchRetrievalConfig = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                    | [components.SearchType](../../models/components/searchtype.md)                                                            | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `topK`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `threshold`                                                                                                               | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `rerankConfig`                                                                                                            | [components.SearchRetrievalConfigRerankConfig](../../models/components/searchretrievalconfigrerankconfig.md)              | :heavy_minus_sign:                                                                                                        | Override reranking for this retrieval configuration. Omit to inherit stored settings or set to null to disable reranking. |