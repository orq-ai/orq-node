# ListProjectsResponse

## Example Usage

```typescript
import { ListProjectsResponse } from "@orq-ai/node/models/components";

let value: ListProjectsResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Object discriminator for list responses; always `list`.                    |
| `data`                                                                     | [components.Project](../../models/components/project.md)[]                 | :heavy_minus_sign:                                                         | Page of projects, ordered newest first.                                    |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether more projects are available in the selected pagination<br/> direction. |