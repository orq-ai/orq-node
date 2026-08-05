# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseGraph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseGraph } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseGraph = {
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nodes`                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseNodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponsenodes.md)[] | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `edges`                                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseEdges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponseedges.md)[] | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |