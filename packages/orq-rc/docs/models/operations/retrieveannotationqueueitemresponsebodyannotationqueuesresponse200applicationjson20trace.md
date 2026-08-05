# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson20Trace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson20Trace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson20Trace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson20Framework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson20framework.md) | :heavy_minus_sign:                                                                                                                                                                                                                 | Framework or platform that generated the trace                                                                                                                                                                                     |
| `graph`                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson20Graph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson20graph.md)         | :heavy_minus_sign:                                                                                                                                                                                                                 | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                        |