# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Trace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Trace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Trace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Framework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson34framework.md) | :heavy_minus_sign:                                                                                                                                                                                                                 | Framework or platform that generated the trace                                                                                                                                                                                     |
| `graph`                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson34Graph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson34graph.md)         | :heavy_minus_sign:                                                                                                                                                                                                                 | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                        |