# PersonUpdateRequest

## Example Usage

```typescript
import { PersonUpdateRequest } from "@orq-ai/node/models/operations";

let value: PersonUpdateRequest = {
  personId: "<id>",
  updatePersonRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `personId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Person ID to update.                                                             |
| `updatePersonRequest`                                                            | [components.UpdatePersonRequest](../../models/components/updatepersonrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |