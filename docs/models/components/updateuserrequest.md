# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "@orq-ai/node/models/components";

let value: UpdateUserRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `lastActivity`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | One effective workspace role. Omit to preserve the existing role.                             |