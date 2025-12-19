# UpdateMemoryRequestBody

## Example Usage

```typescript
import { UpdateMemoryRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateMemoryRequestBody = {
  entityId: "<id>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `entityId`                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | Unique identifier for the entity this memory is associated with (e.g., user ID, session ID, conversation ID)                                                                                                                                           |
| `metadata`                                                                                                                                                                                                                                             | Record<string, *string*>                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | Flexible key-value pairs for custom filtering and categorization. Clients can add arbitrary string metadata to enable future filtering of memory access based on their specific needs (e.g., user segments, topics, contexts, or any custom taxonomy). |