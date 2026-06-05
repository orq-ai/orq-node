# ListProjectsResponse

## Example Usage

```typescript
import { ListProjectsResponse } from "@orq-ai/node/models/components";

let value: ListProjectsResponse = {
  object: "<value>",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | Object discriminator for list responses; always `list`.                    |
| `data`                                                                     | [components.Project](../../models/components/project.md)[]                 | :heavy_check_mark:                                                         | Page of projects, ordered newest first.                                    |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | Whether more projects are available in the selected pagination<br/> direction. |