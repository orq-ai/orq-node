# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice1

Controls which (if any) tool is called by the model. `none` means the model will not call any tool. `auto` means the model can pick between generating a message or calling a tool. `required` means the model must call a tool.

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdToolChoice1 =
  "required";
```

## Values

```typescript
"none" | "auto" | "required"
```