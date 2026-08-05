# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson23Trace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson23Trace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson23Trace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson23Framework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson23framework.md) | :heavy_minus_sign:                                                                                                                                                                                                                 | Framework or platform that generated the trace                                                                                                                                                                                     |
| `graph`                                                                                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson23Graph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson23graph.md)         | :heavy_minus_sign:                                                                                                                                                                                                                 | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                        |