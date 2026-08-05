# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTrace

Trace-specific metadata

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTrace } from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseTrace = {};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `framework`                                                                                                                                                                                | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseFramework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponseframework.md) | :heavy_minus_sign:                                                                                                                                                                         | Framework or platform that generated the trace                                                                                                                                             |
| `graph`                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponseGraph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponsegraph.md)         | :heavy_minus_sign:                                                                                                                                                                         | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                |