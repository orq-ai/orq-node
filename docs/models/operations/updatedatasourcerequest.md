# UpdateDatasourceRequest

## Example Usage

```typescript
import { UpdateDatasourceRequest } from "@orq-ai/node/models/operations";

let value: UpdateDatasourceRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  datasourcesServiceUpdateRequest: {
    displayName: "Caleigh_Graham-Breitenberg84",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `datasourceId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `datasourcesServiceUpdateRequest`                                                                        | [components.DatasourcesServiceUpdateRequest](../../models/components/datasourcesserviceupdaterequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |