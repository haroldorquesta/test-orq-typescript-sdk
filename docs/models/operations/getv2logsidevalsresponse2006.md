# GetV2LogsIdEvalsResponse2006

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2006 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2006 = {
  type: "bert_score",
  value: {
    f1: 4125.38,
    precision: 378.36,
    recall: 1749.14,
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-07-01T09:44:00.124Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "e27df2b1-9c59-4545-8a9e-d998a6f02229",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody46Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody46type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody46Value](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody46value.md)   | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody46Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody46status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody46RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |