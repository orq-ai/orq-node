# ListPeopleResponse

## Example Usage

```typescript
import { ListPeopleResponse } from "@orq-ai/node/models/components";

let value: ListPeopleResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      accountId: "<id>",
      email: "Ray.Harvey55@hotmail.com",
      displayName: "August54",
      roles: [],
      groups: [],
      status: "PERSON_STATUS_PENDING",
      createdAt: new Date("2024-01-10T13:51:11.113Z"),
      updatedAt: new Date("2025-05-24T09:50:16.989Z"),
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Object discriminator for list responses; always `list`.                  |
| `data`                                                                   | [components.Person](../../models/components/person.md)[]                 | :heavy_check_mark:                                                       | Page of people, ordered newest first.                                    |
| `hasMore`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether more people are available in the selected pagination<br/> direction. |