# RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody12AttributesOpenresponsesStatus

Similar to `FunctionCallStatus`. All three options are allowed here for compatibility, but because in practice these items will be provided by developers, only `completed` should be used.

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody12AttributesOpenresponsesStatus,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemOutputAnnotationQueuesResponse200ApplicationJSONResponseBody12AttributesOpenresponsesStatus =
    "incomplete";
```

## Values

```typescript
"in_progress" | "completed" | "incomplete"
```