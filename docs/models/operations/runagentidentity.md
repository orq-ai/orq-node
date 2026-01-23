# RunAgentIdentity

Information about the identity making the request. If the identity does not exist, it will be created automatically.

## Example Usage

```typescript
import { RunAgentIdentity } from "@orq-ai/node/models/operations";

let value: RunAgentIdentity = {
  id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  displayName: "Jane Doe",
  email: "jane.doe@example.com",
  metadata: [
    {
      "department": "Engineering",
      "role": "Senior Developer",
    },
  ],
  logoUrl: "https://example.com/avatars/jane-doe.jpg",
  tags: [
    "hr",
    "engineering",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for the contact                                     | contact_01ARZ3NDEKTSV4RRFFQ69G5FAV                                    |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Display name of the contact                                           | Jane Doe                                                              |
| `email`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Email address of the contact                                          | jane.doe@example.com                                                  |
| `metadata`                                                            | Record<string, *any*>[]                                               | :heavy_minus_sign:                                                    | A hash of key/value pairs containing any other data about the contact | [<br/>{<br/>"department": "Engineering",<br/>"role": "Senior Developer"<br/>}<br/>] |
| `logoUrl`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | URL to the contact's avatar or logo                                   | https://example.com/avatars/jane-doe.jpg                              |
| `tags`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | A list of tags associated with the contact                            | [<br/>"hr",<br/>"engineering"<br/>]                                   |