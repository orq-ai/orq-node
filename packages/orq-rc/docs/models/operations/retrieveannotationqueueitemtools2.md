# RetrieveAnnotationQueueItemTools2

Configuration for web search preview tool

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemTools2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemTools2 = {
  type: "web_search_preview",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | *"web_search_preview"*                                                                                                                       | :heavy_check_mark:                                                                                                                           | The type of tool                                                                                                                             |
| `domains`                                                                                                                                    | *string*[]                                                                                                                                   | :heavy_minus_sign:                                                                                                                           | List of domains to restrict search to                                                                                                        |
| `searchContextSize`                                                                                                                          | [operations.RetrieveAnnotationQueueItemToolsSearchContextSize](../../models/operations/retrieveannotationqueueitemtoolssearchcontextsize.md) | :heavy_minus_sign:                                                                                                                           | Amount of context to retrieve for each search result                                                                                         |
| `userLocation`                                                                                                                               | [operations.RetrieveAnnotationQueueItemToolsUserLocation](../../models/operations/retrieveannotationqueueitemtoolsuserlocation.md)           | :heavy_minus_sign:                                                                                                                           | User location for search localization                                                                                                        |