# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Graph =
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
      edges: [
        {
          source: "<value>",
          target: "<value>",
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson8nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `edges`                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson8edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |