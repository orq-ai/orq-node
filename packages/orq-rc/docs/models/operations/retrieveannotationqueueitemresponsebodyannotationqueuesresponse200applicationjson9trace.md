# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Trace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Trace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Trace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `framework`                                                                                                                                                                                                                      | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Framework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson9framework.md) | :heavy_minus_sign:                                                                                                                                                                                                               | Framework or platform that generated the trace                                                                                                                                                                                   |
| `graph`                                                                                                                                                                                                                          | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson9Graph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjson9graph.md)         | :heavy_minus_sign:                                                                                                                                                                                                               | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                      |