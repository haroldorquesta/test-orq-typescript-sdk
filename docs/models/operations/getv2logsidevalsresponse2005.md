# GetV2LogsIdEvalsResponse2005

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2005 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2005 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 2508.18,
      precision: 7145.07,
      recall: 6076.56,
    },
    rouge2: {
      f1: 2543.91,
      precision: 8437.14,
      recall: 565.51,
    },
    rougeL: {
      f1: 2077.24,
      precision: 1791.21,
      recall: 434.47,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-12-06T07:41:37.087Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "a3ceacca-78ef-4d58-813d-099029808043",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody45Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody45type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Value](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody4value.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody45Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody45status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody45RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |