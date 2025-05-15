# UpdatePromptRequest

## Example Usage

```typescript
import { UpdatePromptRequest } from "@orq-ai/node/models/operations";

let value: UpdatePromptRequest = {
  id: "<id>",
  requestBody: {
    path: "Default",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier of the prompt                                                          |
| `requestBody`                                                                            | [operations.UpdatePromptRequestBody](../../models/operations/updatepromptrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |