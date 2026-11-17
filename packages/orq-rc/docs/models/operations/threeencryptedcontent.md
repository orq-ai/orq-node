# ThreeEncryptedContent

An encrypted content part of an agent_message item.

## Example Usage

```typescript
import { ThreeEncryptedContent } from "@orq-ai/node/models/operations";

let value: ThreeEncryptedContent = {
  encryptedContent: "<value>",
  type: "encrypted_content",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `encryptedContent`     | *string*               | :heavy_check_mark:     | The encrypted content. |
| `type`                 | *"encrypted_content"*  | :heavy_check_mark:     | N/A                    |