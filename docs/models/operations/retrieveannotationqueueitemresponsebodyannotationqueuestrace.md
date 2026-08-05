# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTrace

Trace-specific metadata

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTrace } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesTrace = {};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesFramework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesframework.md) | :heavy_minus_sign:                                                                                                                                                         | Framework or platform that generated the trace                                                                                                                             |
| `graph`                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesGraph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesgraph.md)         | :heavy_minus_sign:                                                                                                                                                         | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                |