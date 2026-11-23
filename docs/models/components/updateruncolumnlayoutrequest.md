# UpdateRunColumnLayoutRequest

## Example Usage

```typescript
import { UpdateRunColumnLayoutRequest } from "@orq-ai/node/models/components";

let value: UpdateRunColumnLayoutRequest = {
  columns: [
    {
      columnId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `columns`                                                            | [components.ColumnLayout](../../models/components/columnlayout.md)[] | :heavy_check_mark:                                                   | Layout changes, at least one. Columns not listed keep their layout.  |