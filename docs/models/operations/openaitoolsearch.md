# OpenAIToolSearch

Load deferred tools on demand through the native OpenAI Responses API.

## Example Usage

```typescript
import { OpenAIToolSearch } from "@orq-ai/node/models/operations";

let value: OpenAIToolSearch = {
  type: "tool_search",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Describe the search performed by a client-executed tool.                                                               |
| `execution`                                                                                                            | [operations.ToolsExecution](../../models/operations/toolsexecution.md)                                                 | :heavy_minus_sign:                                                                                                     | Defaults to server. In client mode, return the matching tools in a tool_search_output item.                            |
| `parameters`                                                                                                           | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | JSON Schema for the client-executed search arguments.                                                                  |
| `type`                                                                                                                 | [operations.CreateRouterResponseToolsResponsesType](../../models/operations/createrouterresponsetoolsresponsestype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |