# Annotations1

A citation to a URL

## Example Usage

```typescript
import { Annotations1 } from "@orq-ai/node/models/operations";

let value: Annotations1 = {
  type: "url_citation",
  startIndex: 7140.44,
  endIndex: 3147.7,
  url: "https://clear-cut-sock.net/",
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