# UpdateContactRequest

## Example Usage

```typescript
import { UpdateContactRequest } from "@orq-ai/node/models/operations";

let value: UpdateContactRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique contact id or external id                                                           |
| `requestBody`                                                                              | [operations.UpdateContactRequestBody](../../models/operations/updatecontactrequestbody.md) | :heavy_minus_sign:                                                                         | Contact fields to update                                                                   |