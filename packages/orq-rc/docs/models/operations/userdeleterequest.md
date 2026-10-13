# UserDeleteRequest

## Example Usage

```typescript
import { UserDeleteRequest } from "@orq-ai/node/models/operations";

let value: UserDeleteRequest = {
  userId: "4494fc75-1e8a-4278-8f32-3aa036559609",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `userId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | Workspace-user UUID returned by List workspace users. This is not the account ID. |