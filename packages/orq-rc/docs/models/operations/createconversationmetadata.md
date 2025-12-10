# CreateConversationMetadata

## Example Usage

```typescript
import { CreateConversationMetadata } from "@orq-ai/node/models/operations";

let value: CreateConversationMetadata = {
  entityId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `generatingTitle`                                                                       | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `entityId`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | Identifier of the parent entity (agent, deployment, etc.) this conversation belongs to. |