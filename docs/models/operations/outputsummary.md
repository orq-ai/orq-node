# OutputSummary

A text summary of the reasoning

## Example Usage

```typescript
import { OutputSummary } from "@orq-ai/node/models/operations";

let value: OutputSummary = {
  type: "summary_text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [operations.CreateResponseOutputRouterResponsesResponse200ApplicationJSONResponseBody5Type](../../models/operations/createresponseoutputrouterresponsesresponse200applicationjsonresponsebody5type.md) | :heavy_check_mark:                                                                                                                                                                                     | The type of summary part                                                                                                                                                                               |
| `text`                                                                                                                                                                                                 | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The summary text                                                                                                                                                                                       |