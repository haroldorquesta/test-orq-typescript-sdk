# GetV2LogsIdEvals6

## Example Usage

```typescript
import { GetV2LogsIdEvals6 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvals6 = {
  type: "bert_score",
  value: {
    f1: 1288.10,
    precision: 9512.04,
    recall: 8919.13,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-01-22T07:50:31.869Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "57e6c081-e938-4a46-91c9-feba7372dcb9",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody26Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody26type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponse200Value](../../models/operations/getv2logsidevalsresponse200value.md)                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody26Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody26status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody26RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |