# RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesOpenresponsesStatus

Similar to `FunctionCallStatus`. All three options are allowed here for compatibility, but because in practice these items will be provided by developers, only `completed` should be used.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesOpenresponsesStatus,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody7AttributesOpenresponsesStatus =
    "completed";
```

## Values

```typescript
"in_progress" | "completed" | "incomplete"
```