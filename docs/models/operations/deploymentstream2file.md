# DeploymentStream2File

## Example Usage

```typescript
import { DeploymentStream2File } from "@orq-ai/node/models/operations";

let value: DeploymentStream2File = {
  fileData: "<value>",
  filename: "example.file",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileData`                                                                                                                                              | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The file data as a data URI string in the format 'data:<mime-type>;base64,<base64-encoded-data>'. Example: 'data:image/png;base64,iVBORw0KGgoAAAANS...' |
| `filename`                                                                                                                                              | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The name of the file, used when passing the file to the model as a string.                                                                              |