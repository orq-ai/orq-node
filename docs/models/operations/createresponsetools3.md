# CreateResponseTools3

Configuration for web search tool

## Example Usage

```typescript
import { CreateResponseTools3 } from "@orq-ai/node/models/operations";

let value: CreateResponseTools3 = {
  type: "web_search",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | *"web_search"*                                                                                                                                   | :heavy_check_mark:                                                                                                                               | The type of tool                                                                                                                                 |
| `searchContextSize`                                                                                                                              | [operations.CreateResponseToolsRouterResponsesSearchContextSize](../../models/operations/createresponsetoolsrouterresponsessearchcontextsize.md) | :heavy_minus_sign:                                                                                                                               | Amount of context to retrieve for each search result                                                                                             |
| `userLocation`                                                                                                                                   | [operations.CreateResponseToolsRouterResponsesUserLocation](../../models/operations/createresponsetoolsrouterresponsesuserlocation.md)           | :heavy_minus_sign:                                                                                                                               | User location for search localization                                                                                                            |
| `filters`                                                                                                                                        | [operations.ToolsFilters](../../models/operations/toolsfilters.md)                                                                               | :heavy_minus_sign:                                                                                                                               | Filters for the web search                                                                                                                       |