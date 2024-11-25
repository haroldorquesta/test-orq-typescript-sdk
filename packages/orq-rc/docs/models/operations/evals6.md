# Evals6

## Example Usage

```typescript
import { Evals6 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals6 = {
  type: "bert_score",
  value: {
    f1: 933.42,
    precision: 3071.96,
    recall: 7541.71,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-07-01T00:12:33.022Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBodyType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `value`                                                                                                                                                        | [operations.GetV2LogsIdEvalsValue](../../models/operations/getv2logsidevalsvalue.md)                                                                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `id`                                                                                                                                                           | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The id of the resource                                                                                                                                         |
| `status`                                                                                                                                                       | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONStatus](../../models/operations/getv2logsidevalsresponse200applicationjsonstatus.md)                     | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `timestamp`                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                  | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `relatedEntities`                                                                                                                                              | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBodyRelatedEntities*[]                                                                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |