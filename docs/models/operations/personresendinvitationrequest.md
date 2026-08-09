# PersonResendInvitationRequest

## Example Usage

```typescript
import { PersonResendInvitationRequest } from "@orq-ai/node/models/operations";

let value: PersonResendInvitationRequest = {
  personId: "<id>",
  resendInvitationRequest: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `personId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Person ID of the pending invite to resend.                                               |
| `resendInvitationRequest`                                                                | [components.ResendInvitationRequest](../../models/components/resendinvitationrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |