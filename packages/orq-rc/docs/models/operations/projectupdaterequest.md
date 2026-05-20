# ProjectUpdateRequest

## Example Usage

```typescript
import { ProjectUpdateRequest } from "@orq-ai/node/models/operations";

let value: ProjectUpdateRequest = {
  projectId: "<id>",
  updateProjectRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Project ID to update.                                                              |
| `updateProjectRequest`                                                             | [components.UpdateProjectRequest](../../models/components/updateprojectrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |