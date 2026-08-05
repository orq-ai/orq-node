# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Graph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Graph,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Graph =
    {
      nodes: [
        {
          id: "<id>",
          type: "<value>",
          spanIds: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      ],
      edges: [],
    };
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Nodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson17nodes.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |
| `edges`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson17Edges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson17edges.md)[] | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |