# UploadPostPolicy

## Example Usage

```typescript
import { UploadPostPolicy } from "@orq-ai/node/models/components";

let value: UploadPostPolicy = {
  postURL: "https://dazzling-daughter.name/",
  formData: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `postURL`             | *string*              | :heavy_check_mark:    | N/A                   |
| `formData`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |