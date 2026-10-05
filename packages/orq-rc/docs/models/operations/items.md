# Items

## Example Usage

```typescript
import { Items } from "@orq-ai/node/models/operations";

let value: Items = {
  description: "glossy before by although fluctuate but equally pleasant",
  title: "<value>",
  url: "https://jaunty-birdbath.net/",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | Provider-supplied excerpt or description. May be empty.                                  |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | Page title. May be empty if the provider supplies no title.                              |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | Page URL returned by the provider. PII redaction can replace sensitive parts of the URL. |