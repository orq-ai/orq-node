# RetrieveAnnotationQueueItemResponseBodyGraph

Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyGraph } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyGraph = {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `nodes`                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyNodes](../../models/operations/retrieveannotationqueueitemresponsebodynodes.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `edges`                                                                                                                              | [operations.RetrieveAnnotationQueueItemResponseBodyEdges](../../models/operations/retrieveannotationqueueitemresponsebodyedges.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |