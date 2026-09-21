# DatasetMetadata

Dataset counters maintained by the API.

## Example Usage

```typescript
import { DatasetMetadata } from "@orq-ai/node/models/components";

let value: DatasetMetadata = {
  totalVersions: 918689,
  datapointsCount: 656309,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `totalVersions`                                | *number*                                       | :heavy_check_mark:                             | Number of dataset versions.                    |
| `datapointsCount`                              | *number*                                       | :heavy_check_mark:                             | Number of datapoints currently in the dataset. |