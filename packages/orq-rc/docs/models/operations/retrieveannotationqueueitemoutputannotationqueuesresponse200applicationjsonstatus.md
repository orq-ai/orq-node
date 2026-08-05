# RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONStatus

Similar to `FunctionCallStatus`. All three options are allowed here for compatibility, but because in practice these items will be provided by developers, only `completed` should be used.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONStatus,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONStatus =
    "incomplete";
```

## Values

```typescript
"in_progress" | "completed" | "incomplete"
```