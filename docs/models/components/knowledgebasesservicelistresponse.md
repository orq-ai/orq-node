# KnowledgeBasesServiceListResponse

## Example Usage

```typescript
import { KnowledgeBasesServiceListResponse } from "@orq-ai/node/models/components";

let value: KnowledgeBasesServiceListResponse = {
  object: "list",
  data: [
    {
      id: "<id>",
      created: "<value>",
      key: "<key>",
      domainId: "<id>",
      path: "Default",
      updated: "<value>",
      type: "external",
      externalConfig: {
        name: "<value>",
        apiUrl: "https://shy-tuxedo.biz",
      },
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                 | [components.KnowledgeBasesServiceListResponseObject](../../models/components/knowledgebasesservicelistresponseobject.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `data`                                                                                                                   | *components.Knowledge*[]                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `hasMore`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |