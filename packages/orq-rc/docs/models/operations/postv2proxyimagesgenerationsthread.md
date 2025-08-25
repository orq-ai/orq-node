# PostV2ProxyImagesGenerationsThread

Thread information to group related requests

## Example Usage

```typescript
import { PostV2ProxyImagesGenerationsThread } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesGenerationsThread = {
  id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  tags: [
    "customer-support",
    "priority-high",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Unique thread identifier to group related invocations. | thread_01ARZ3NDEKTSV4RRFFQ69G5FAV                      |
| `tags`                                                 | *string*[]                                             | :heavy_minus_sign:                                     | Optional tags to differentiate or categorize threads   | [<br/>"customer-support",<br/>"priority-high"<br/>]    |