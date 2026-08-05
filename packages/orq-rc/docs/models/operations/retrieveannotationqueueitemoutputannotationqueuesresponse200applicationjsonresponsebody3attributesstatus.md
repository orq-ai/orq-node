# RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesStatus

Similar to `FunctionCallStatus`. All three options are allowed here for compatibility, but because in practice these items will be provided by developers, only `completed` should be used.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesStatus,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody3AttributesStatus =
    "in_progress";
```

## Values

```typescript
"in_progress" | "completed" | "incomplete"
```