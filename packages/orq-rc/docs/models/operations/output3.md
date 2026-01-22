# Output3

A file search tool call output

## Example Usage

```typescript
import { Output3 } from "@orq-ai/node/models/operations";

let value: Output3 = {
  id: "<id>",
  type: "file_search_call",
  status: "in_progress",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique identifier for this output item                                                                                   |
| `type`                                                                                                                       | *"file_search_call"*                                                                                                         | :heavy_check_mark:                                                                                                           | The type of output item                                                                                                      |
| `status`                                                                                                                     | [operations.CreateResponseOutputRouterResponsesStatus](../../models/operations/createresponseoutputrouterresponsesstatus.md) | :heavy_check_mark:                                                                                                           | The status of the file search                                                                                                |
| `queries`                                                                                                                    | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | The search queries used                                                                                                      |
| `results`                                                                                                                    | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | The file search results                                                                                                      |