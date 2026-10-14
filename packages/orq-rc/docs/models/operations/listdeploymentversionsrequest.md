# ListDeploymentVersionsRequest

## Example Usage

```typescript
import { ListDeploymentVersionsRequest } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsRequest = {
  keyOrID: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `keyOrID`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Deployment key or ID.                                                                                    |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | A limit on the number of objects to be returned. Limit can range between 1 and 50, and the default is 10 |
| `startingAfter`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Version _id after which to fetch the next page.                                                          |
| `endingBefore`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Version _id before which to fetch the previous page.                                                     |
| `variantId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Return versions of this variant only.                                                                    |