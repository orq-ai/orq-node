# ModelSharingConfig

## Example Usage

```typescript
import { ModelSharingConfig } from "@orq-ai/node/models/components";

let value: ModelSharingConfig = {
  allowFork: true,
  allowVersionPin: false,
  autoGrantNewProjects: false,
  mode: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `allowFork`            | *boolean*              | :heavy_check_mark:     | N/A                    |
| `allowVersionPin`      | *boolean*              | :heavy_check_mark:     | N/A                    |
| `autoGrantNewProjects` | *boolean*              | :heavy_check_mark:     | N/A                    |
| `mode`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `projectIds`           | *string*[]             | :heavy_minus_sign:     | N/A                    |