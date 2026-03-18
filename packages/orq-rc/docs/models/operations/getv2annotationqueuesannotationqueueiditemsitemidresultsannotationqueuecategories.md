# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategories

A list of the categories, and whether they are flagged or not

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategories,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResultsAnnotationQueueCategories =
    {
      sexual: true,
      hateAndDiscrimination: false,
      violenceAndThreats: false,
      dangerousAndCriminalContent: true,
      selfharm: false,
      health: false,
      financial: false,
      law: false,
      pii: true,
    };
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `sexual`                                     | *boolean*                                    | :heavy_check_mark:                           | Sexual content detected                      |
| `hateAndDiscrimination`                      | *boolean*                                    | :heavy_check_mark:                           | Hate and discrimination content detected     |
| `violenceAndThreats`                         | *boolean*                                    | :heavy_check_mark:                           | Violence and threats content detected        |
| `dangerousAndCriminalContent`                | *boolean*                                    | :heavy_check_mark:                           | Dangerous and criminal content detected      |
| `selfharm`                                   | *boolean*                                    | :heavy_check_mark:                           | Self-harm content detected                   |
| `health`                                     | *boolean*                                    | :heavy_check_mark:                           | Unqualified health advice detected           |
| `financial`                                  | *boolean*                                    | :heavy_check_mark:                           | Unqualified financial advice detected        |
| `law`                                        | *boolean*                                    | :heavy_check_mark:                           | Unqualified legal advice detected            |
| `pii`                                        | *boolean*                                    | :heavy_check_mark:                           | Personally identifiable information detected |