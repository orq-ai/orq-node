# CreateResponse21

Represents a message in the conversation, with a role and content (string or rich content parts).

## Example Usage

```typescript
import { CreateResponse21 } from "@orq-ai/node/models/operations";

let value: CreateResponse21 = {
  role: "system",
  content: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `role`                                                                   | [operations.TwoRole](../../models/operations/tworole.md)                 | :heavy_check_mark:                                                       | The role of the message author                                           |
| `content`                                                                | *operations.TwoContent*                                                  | :heavy_check_mark:                                                       | The content of the message, either a string or an array of content parts |