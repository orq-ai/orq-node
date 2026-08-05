# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson31Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson31Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson31Graph =
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
| `nodes`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson31Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson31nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `edges`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson31Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson31edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |