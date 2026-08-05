# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson27Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson27Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson27Graph =
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

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson27Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson27nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `edges`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson27Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson27edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |