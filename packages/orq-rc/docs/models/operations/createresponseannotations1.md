# CreateResponseAnnotations1

A citation to a URL

## Example Usage

```typescript
import { CreateResponseAnnotations1 } from "@orq-ai/node/models/operations";

let value: CreateResponseAnnotations1 = {
  type: "url_citation",
  startIndex: 1481.69,
  endIndex: 3375.45,
  url: "https://secret-dish.net",
  title: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.CreateResponseAnnotationsType](../../models/operations/createresponseannotationstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startIndex`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | The start index of the citation in the text                                                          |
| `endIndex`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | The end index of the citation in the text                                                            |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | The URL being cited                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | The title of the cited resource                                                                      |