# UserUpdateRequest

## Example Usage

```typescript
import { UserUpdateRequest } from "@orq-ai/node/models/operations";

let value: UserUpdateRequest = {
  userId: "c1b1178c-3da1-45d5-8c9d-ac750f03068a",
  updateUserRequest: {},
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `userId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | Workspace-user UUID returned by List workspace users. This is not the account ID. |
| `updateUserRequest`                                                               | [components.UpdateUserRequest](../../models/components/updateuserrequest.md)      | :heavy_check_mark:                                                                | N/A                                                                               |