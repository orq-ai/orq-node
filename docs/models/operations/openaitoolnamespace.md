# OpenAIToolNamespace

Group related OpenAI function and custom tools. Set defer_loading on individual functions to use native tool search.

## Example Usage

```typescript
import { OpenAIToolNamespace } from "@orq-ai/node/models/operations";

let value: OpenAIToolNamespace = {
  description: "inasmuch degenerate blah and lazily",
  name: "<value>",
  tools: [
    {
      name: "<value>",
      type: "custom",
    },
  ],
  type: "namespace",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `name`                                                                                                                                                       | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `tools`                                                                                                                                                      | *operations.ToolsTools*[]                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `type`                                                                                                                                                       | [operations.CreateRouterResponseToolsResponsesRequestRequestBody3Type](../../models/operations/createrouterresponsetoolsresponsesrequestrequestbody3type.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |