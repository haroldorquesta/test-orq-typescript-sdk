# GetV2LogsIdEvalsResponse6

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse6 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse6 = {
  type: "bert_score",
  value: {
    f1: 4589.52,
    precision: 3140.01,
    recall: 5636.47,
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2024-08-05T08:33:47.514Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "098fd8e0-8602-4080-a7af-07df11ff3137",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody36Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody36type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBodyValue](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebodyvalue.md)       | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody36Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody36status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody36RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |