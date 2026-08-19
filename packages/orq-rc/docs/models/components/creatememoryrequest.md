# CreateMemoryRequest

## Example Usage

```typescript
import { CreateMemoryRequest } from "@orq-ai/node/models/components";

let value: CreateMemoryRequest = {
  entityId: "<id>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `entityId`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Unique identifier for the entity this memory is associated with (e.g., user ID, session ID, conversation ID). |