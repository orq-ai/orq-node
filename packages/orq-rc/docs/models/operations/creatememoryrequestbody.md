# CreateMemoryRequestBody

## Example Usage

```typescript
import { CreateMemoryRequestBody } from "@orq-ai/node/models/operations";

let value: CreateMemoryRequestBody = {
  entityId: "<id>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Unique identifier for the entity this memory is associated with (e.g., user ID, session ID, conversation ID). |