# Project

## Example Usage

```typescript
import { Project } from "@orq-ai/node/models/components";

let value: Project = {
  projectId: "<id>",
  name: "<value>",
  key: "<key>",
  isArchived: false,
  isDefault: true,
  teams: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  createdAt: new Date("2025-05-28T09:16:17.673Z"),
  updatedAt: new Date("2025-10-30T11:29:56.091Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique project identifier assigned by ORQ. Use this value in<br/> retrieve, update, and delete requests. |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Human-readable project name.                                                                         |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | Stable project key generated from the name and used by internal<br/> workspace navigation.           |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the project is archived and hidden from normal active<br/> project lists.                    |
| `isDefault`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether this is the workspace default project.                                                       |
| `teams`                                                                                              | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | Team identifiers associated with the project for access and<br/> organization.                       |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time when the project was created.                                                                   |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Time when the project was last updated.                                                              |
| `createdById`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | User ID that created the project.                                                                    |
| `updatedById`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | User ID that last updated the project.                                                               |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optional human-readable description of the project.                                                  |