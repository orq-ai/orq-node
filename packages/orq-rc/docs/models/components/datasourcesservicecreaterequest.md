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
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The description of the knowledge base                                                        |
| `fileId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `chunkingOptions`                                                                            | [components.DatasourceChunkingOptions](../../models/components/datasourcechunkingoptions.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | Compatibility fields used by the former datasource shell/legacy route.                       |
| `attachment`                                                                                 | [components.DatasourceAttachment](../../models/components/datasourceattachment.md)           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `metadata`                                                                                   | [components.CountMetadata](../../models/components/countmetadata.md)                         | :heavy_minus_sign:                                                                           | N/A                                                                                          |