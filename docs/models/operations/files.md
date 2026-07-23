# Files

## Example Usage

```typescript
import { Files } from "@orq-ai/node/models/operations";

let value: Files = {
  fileId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `fileId`                                | *string*                                | :heavy_check_mark:                      | The workspace file ID.                  |
| `name`                                  | *string*                                | :heavy_check_mark:                      | The file name exposed under /workspace. |