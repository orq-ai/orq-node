# PublicBatchError

## Example Usage

```typescript
import { PublicBatchError } from "@orq-ai/node/models/components";

let value: PublicBatchError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `code`                                                         | *string*                                                       | :heavy_check_mark:                                             | Machine-readable error code.                                   |
| `line`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Input file line the error refers to, when it is line-specific. |
| `message`                                                      | *string*                                                       | :heavy_check_mark:                                             | Human-readable error message.                                  |
| `param`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Request field the error refers to, when it is field-specific.  |