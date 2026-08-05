# RetrieveAnnotationQueueItemResponseBodyTrace

Trace-specific metadata

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyTrace } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyTrace = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `framework`                                                                                                                                | [operations.RetrieveAnnotationQueueItemResponseBodyFramework](../../models/operations/retrieveannotationqueueitemresponsebodyframework.md) | :heavy_minus_sign:                                                                                                                         | Framework or platform that generated the trace                                                                                             |
| `graph`                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyGraph](../../models/operations/retrieveannotationqueueitemresponsebodygraph.md)         | :heavy_minus_sign:                                                                                                                         | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                |