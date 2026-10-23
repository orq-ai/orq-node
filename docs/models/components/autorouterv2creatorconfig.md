# AutoRouterV2CreatorConfig

## Example Usage

```typescript
import { AutoRouterV2CreatorConfig } from "@orq-ai/node/models/components";

let value: AutoRouterV2CreatorConfig = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | Artificial Analysis identifier of the creator. |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Creator name reported by Artificial Analysis.  |
| `slug`                                         | *string*                                       | :heavy_minus_sign:                             | Artificial Analysis slug of the creator.       |