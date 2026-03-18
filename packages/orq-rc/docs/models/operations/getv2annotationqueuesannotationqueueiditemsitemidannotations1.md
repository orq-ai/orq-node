# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdAnnotations1

A citation to a URL

## Example Usage

```typescript
import { GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdAnnotations1 } from "@orq-ai/node/models/operations";

let value: GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdAnnotations1 = {
  type: "url_citation",
  startIndex: 4716.03,
  endIndex: 9404.09,
  url: "https://knowledgeable-toothpick.com",
  title: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `type`                                      | *"url_citation"*                            | :heavy_check_mark:                          | N/A                                         |
| `startIndex`                                | *number*                                    | :heavy_check_mark:                          | The start index of the citation in the text |
| `endIndex`                                  | *number*                                    | :heavy_check_mark:                          | The end index of the citation in the text   |
| `url`                                       | *string*                                    | :heavy_check_mark:                          | The URL being cited                         |
| `title`                                     | *string*                                    | :heavy_check_mark:                          | The title of the cited resource             |