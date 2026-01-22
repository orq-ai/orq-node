# Output2

A web search tool call output

## Example Usage

```typescript
import { Output2 } from "@orq-ai/node/models/operations";

let value: Output2 = {
  id: "<id>",
  type: "web_search_call",
  status: "incomplete",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The unique identifier for this output item                                                     |
| `type`                                                                                         | *"web_search_call"*                                                                            | :heavy_check_mark:                                                                             | The type of output item                                                                        |
| `status`                                                                                       | [operations.CreateResponseOutputStatus](../../models/operations/createresponseoutputstatus.md) | :heavy_check_mark:                                                                             | The status of the web search                                                                   |