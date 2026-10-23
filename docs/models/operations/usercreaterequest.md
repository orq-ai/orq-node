# UserCreateRequest

## Example Usage

```typescript
import { UserCreateRequest } from "@orq-ai/node/models/operations";

let value: UserCreateRequest = {
  teamId: "b3f33842-2ac1-4cf9-9939-686fb51ee87f",
  createUsersRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Destination team UUID for every created or added workspace user.               |
| `createUsersRequest`                                                           | [components.CreateUsersRequest](../../models/components/createusersrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |