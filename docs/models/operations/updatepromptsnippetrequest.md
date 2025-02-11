# UpdatePromptSnippetRequest

## Example Usage

```typescript
import { UpdatePromptSnippetRequest } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetRequest = {
  id: "<id>",
  requestBody: {
    path: "Customer Service/Billing/Refund",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier of the prompt                                                                        |
| `requestBody`                                                                                          | [operations.UpdatePromptSnippetRequestBody](../../models/operations/updatepromptsnippetrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |