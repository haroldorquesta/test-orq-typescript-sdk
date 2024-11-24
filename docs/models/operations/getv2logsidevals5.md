# GetV2LogsIdEvals5

## Example Usage

```typescript
import { GetV2LogsIdEvals5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 6978.90,
      precision: 9386.48,
      recall: 2441.77,
    },
    rouge2: {
      f1: 4223.19,
      precision: 1395.23,
      recall: 5.77,
    },
    rougeL: {
      f1: 1742.43,
      precision: 5601.88,
      recall: 9312.56,
    },
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-08-05T14:01:22.051Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "34a76cde-cf2f-4eab-a483-bd228ad9c45d",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody25Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody25type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponseValue](../../models/operations/getv2logsidevalsresponsevalue.md)                                                                   | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody25Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody25status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody25RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |