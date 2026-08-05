# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson30Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson30Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson30Graph =
    {
      nodes: [
        {
          id: "<id>",
          type: "<value>",
          spanIds: [],
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

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson30Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson30nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `edges`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson30Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson30edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |