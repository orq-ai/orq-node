# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesGraph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesGraph } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesGraph = {
  nodes: [],
  edges: [
    {
      source: "<value>",
      target: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodes`                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesNodes](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesnodes.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `edges`                                                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesEdges](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesedges.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |