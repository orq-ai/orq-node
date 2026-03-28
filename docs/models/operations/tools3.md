# Tools3

Configuration for web search tool

## Example Usage

```typescript
import { Tools3 } from "@orq-ai/node/models/operations";

let value: Tools3 = {
  type: "web_search",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"web_search"*                                                                         | :heavy_check_mark:                                                                     | The type of tool                                                                       |
| `searchContextSize`                                                                    | [operations.ToolsSearchContextSize](../../models/operations/toolssearchcontextsize.md) | :heavy_minus_sign:                                                                     | Amount of context to retrieve for each search result                                   |
| `userLocation`                                                                         | [operations.ToolsUserLocation](../../models/operations/toolsuserlocation.md)           | :heavy_minus_sign:                                                                     | User location for search localization                                                  |
| `filters`                                                                              | [operations.Filters](../../models/operations/filters.md)                               | :heavy_minus_sign:                                                                     | Filters for the web search                                                             |