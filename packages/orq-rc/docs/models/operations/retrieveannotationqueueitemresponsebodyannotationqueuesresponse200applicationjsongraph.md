# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONGraph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONGraph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONGraph =
    {
      nodes: [
        {
          id: "<id>",
          type: "<value>",
          spanIds: [
            "<value 1>",
          ],
        },
      ],
      edges: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nodes`                                                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONNodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjsonnodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `edges`                                                                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONEdges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjsonedges.md)[] | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |