# RetrieveAnnotationQueueItemAnnotations1

A citation to a URL

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemAnnotations1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemAnnotations1 = {
  type: "url_citation",
  startIndex: 2713.88,
  endIndex: 6803.02,
  url: "https://pushy-utilization.name/",
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
| `text`                                      | *string*                                    | :heavy_minus_sign:                          | The text of the citation                    |