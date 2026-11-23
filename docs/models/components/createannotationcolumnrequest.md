# CreateAnnotationColumnRequest

## Example Usage

```typescript
import { CreateAnnotationColumnRequest } from "@orq-ai/node/models/components";

let value: CreateAnnotationColumnRequest = {
  annotationId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `annotationId`                                                                                                                 | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the annotation definition. Each row gets one annotation cell per task<br/> column.                                       |
| `displayName`                                                                                                                  | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Column name. Defaults to `annotation_id`.                                                                                      |
| `annotationType`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Value type the annotation accepts: `range`, `single_select`, `multi_select`, `text` or `correction`. Empty accepts<br/> any value. |
| `position`                                                                                                                     | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | 0-based position among the run's columns. Defaults to the end.                                                                 |