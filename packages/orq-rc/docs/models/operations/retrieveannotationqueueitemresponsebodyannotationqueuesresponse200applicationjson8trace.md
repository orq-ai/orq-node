# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Trace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Trace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Trace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Framework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson8framework.md) | :heavy_minus_sign:                                                                                                                                                                                                               | Framework or platform that generated the trace                                                                                                                                                                                   |
| `graph`                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson8Graph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson8graph.md)         | :heavy_minus_sign:                                                                                                                                                                                                               | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                      |