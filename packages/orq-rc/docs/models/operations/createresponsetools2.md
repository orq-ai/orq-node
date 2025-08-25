# CreateResponseTools2

Configuration for web search tool

## Example Usage

```typescript
import { CreateResponseTools2 } from "@orq-ai/node/models/operations";

let value: CreateResponseTools2 = {
  type: "web_search_preview",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.CreateResponseToolsProxyResponse200Type](../../models/operations/createresponsetoolsproxyresponse200type.md) | :heavy_check_mark:                                                                                                       | The type of tool                                                                                                         |
| `domains`                                                                                                                | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | List of domains to restrict search to                                                                                    |
| `searchContextSize`                                                                                                      | [operations.ToolsSearchContextSize](../../models/operations/toolssearchcontextsize.md)                                   | :heavy_minus_sign:                                                                                                       | Amount of context to retrieve for each search result                                                                     |
| `userLocation`                                                                                                           | [operations.ToolsUserLocation](../../models/operations/toolsuserlocation.md)                                             | :heavy_minus_sign:                                                                                                       | User location for search localization                                                                                    |