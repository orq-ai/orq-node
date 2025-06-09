# PostV2ModelsLitellmImportMetadata

## Example Usage

```typescript
import { PostV2ModelsLitellmImportMetadata } from "@orq-ai/node/models/operations";

let value: PostV2ModelsLitellmImportMetadata = {
  isPrivate: true,
  region: "us",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contextWindow`                                                                 | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `isPrivate`                                                                     | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             |
| `region`                                                                        | [operations.Region](../../models/operations/region.md)                          | :heavy_check_mark:                                                              | N/A                                                                             |
| `hasFunctions`                                                                  | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `strictToolSupported`                                                           | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `jsonModeResponseFormatSupported`                                               | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `jsonSchemaResponseFormatSupported`                                             | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `supportSystemMessage`                                                          | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `streamingNotSupported`                                                         | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `dbMatch`                                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | Indicates if the model was in our database during creation of the private model |
| `imageTokenCost`                                                                | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |