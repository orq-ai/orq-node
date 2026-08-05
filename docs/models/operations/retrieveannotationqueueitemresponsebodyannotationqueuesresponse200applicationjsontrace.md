# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONTrace

Trace-specific metadata

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONTrace,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONTrace =
    {};
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `framework`                                                                                                                                                                                                                    | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONFramework](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjsonframework.md) | :heavy_minus_sign:                                                                                                                                                                                                             | Framework or platform that generated the trace                                                                                                                                                                                 |
| `graph`                                                                                                                                                                                                                        | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJSONGraph](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesresponse200applicationjsongraph.md)         | :heavy_minus_sign:                                                                                                                                                                                                             | Agent state-machine graph ({ nodes, edges }) attached to the root trace span. Present for LangGraph traces.                                                                                                                    |