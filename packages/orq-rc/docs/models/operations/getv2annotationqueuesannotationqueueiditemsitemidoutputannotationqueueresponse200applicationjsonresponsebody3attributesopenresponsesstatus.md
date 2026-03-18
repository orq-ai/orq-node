# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody3AttributesOpenresponsesStatus

Similar to `FunctionCallStatus`. All three options are allowed here for compatibility, but because in practice these items will be provided by developers, only `completed` should be used.

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody3AttributesOpenresponsesStatus,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdOutputAnnotationQueueResponse200ApplicationJSONResponseBody3AttributesOpenresponsesStatus =
    "completed";
```

## Values

```typescript
"in_progress" | "completed" | "incomplete"
```