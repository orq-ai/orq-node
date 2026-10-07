# DatasourcesServiceCreateRequest

## Example Usage

```typescript
import { DatasourcesServiceCreateRequest } from "@orq-ai/node/models/components";

let value: DatasourcesServiceCreateRequest = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `displayName`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The description of the datasource                                                            |
| `fileId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `chunkingOptions`                                                                            | [components.DatasourceChunkingOptions](../../models/components/datasourcechunkingoptions.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optional datasource ID. When omitted, the server generates one.                              |
| `attachment`                                                                                 | [components.DatasourceAttachment](../../models/components/datasourceattachment.md)           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | [components.CountMetadata](../../models/components/countmetadata.md)                         | :heavy_minus_sign:                                                                           | N/A                                                                                          |