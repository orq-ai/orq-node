# AnnotationColumnConfig

Configuration of an annotation column.

## Example Usage

```typescript
import { AnnotationColumnConfig } from "@orq-ai/node/models/components";

let value: AnnotationColumnConfig = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `annotationId`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | ID of the annotation definition.                                                                                               |
| `annotationName`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Annotation name; the same as the column's display name.                                                                        |
| `annotationType`                                                                                                               | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Value type the annotation accepts: `range`, `single_select`, `multi_select`, `text` or `correction`. Empty accepts<br/> any value. |