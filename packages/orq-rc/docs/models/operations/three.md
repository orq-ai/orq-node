# Three

## Example Usage

```typescript
import { Three } from "@orq-ai/node/models/operations";

let value: Three = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [operations.InvokeEval2Type](../../models/operations/invokeeval2type.md) | :heavy_check_mark:                                                       | The type of the content part. Always `file`.                             |
| `file`                                                                   | [operations.FileT](../../models/operations/filet.md)                     | :heavy_check_mark:                                                       | N/A                                                                      |