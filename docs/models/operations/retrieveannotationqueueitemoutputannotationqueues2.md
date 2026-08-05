# RetrieveAnnotationQueueItemOutputAnnotationQueues2

A web search tool call output

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemOutputAnnotationQueues2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemOutputAnnotationQueues2 = {
  id: "<id>",
  type: "web_search_call",
  status: "incomplete",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier for this output item                                                                               |
| `type`                                                                                                                   | *"web_search_call"*                                                                                                      | :heavy_check_mark:                                                                                                       | The type of output item                                                                                                  |
| `status`                                                                                                                 | [operations.RetrieveAnnotationQueueItemOutputStatus](../../models/operations/retrieveannotationqueueitemoutputstatus.md) | :heavy_check_mark:                                                                                                       | The status of the web search                                                                                             |
| `action`                                                                                                                 | [operations.Action](../../models/operations/action.md)                                                                   | :heavy_minus_sign:                                                                                                       | The action performed by the web search                                                                                   |