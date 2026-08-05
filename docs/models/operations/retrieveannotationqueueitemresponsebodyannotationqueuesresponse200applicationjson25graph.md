# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson25Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson25Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson25Graph =
    {
      nodes: [
        {
          id: "<id>",
          type: "<value>",
          spanIds: [
            "<value 1>",
            "<value 2>",
          ],
        },
      ],
      edges: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson25Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson25nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `edges`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson25Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson25edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |