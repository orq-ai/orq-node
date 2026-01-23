# UpdateIdentityRequest

## Example Usage

```typescript
import { UpdateIdentityRequest } from "@orq-ai/node/models/operations";

let value: UpdateIdentityRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identity id or external id                                                            |
| `requestBody`                                                                                | [operations.UpdateIdentityRequestBody](../../models/operations/updateidentityrequestbody.md) | :heavy_minus_sign:                                                                           | Identity fields to update                                                                    |