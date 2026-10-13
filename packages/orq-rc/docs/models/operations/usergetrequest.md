# UserGetRequest

## Example Usage

```typescript
import { UserGetRequest } from "@orq-ai/node/models/operations";

let value: UserGetRequest = {
  userId: "e34db8f7-02b5-4155-a18f-97ddf7cddcda",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `userId`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | Workspace-user UUID returned by List workspace users. This is not the account ID. |