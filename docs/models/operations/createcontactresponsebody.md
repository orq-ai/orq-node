# CreateContactResponseBody

Successful operation

## Example Usage

```typescript
import { CreateContactResponseBody } from "@orq-ai/node/models/operations";

let value: CreateContactResponseBody = {
  id: "<id>",
  externalId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique ULID (Universally Unique Lexicographically Sortable Identifier) for the user           |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique string value to identify the contact user in the customer's system                     |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name or nickname of the user                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Email address of the user                                                                     |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL linking to the user's avatar image                                                        |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Array of UUIDs representing tags associated with the user                                     |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Additional custom metadata associated with the user as key-value pairs                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was created                                                    |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the resource was last updated                                               |