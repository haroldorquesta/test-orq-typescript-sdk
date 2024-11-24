# PostV2LogsQueryEvalsResponse5

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 5026.75,
      precision: 434.45,
      recall: 4280.28,
    },
    rouge2: {
      f1: 4991.82,
      precision: 4478.48,
      recall: 44.75,
    },
    rougeL: {
      f1: 6524.29,
      precision: 2573.93,
      recall: 446.59,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-10-05T22:04:42.073Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "09801d71-2950-4a01-a22c-1272b7e0d2e5",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems35Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems35type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `value`                                                                                                                                                                                  | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONValue](../../models/operations/postv2logsqueryevalsresponse200applicationjsonvalue.md)                                         | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems35Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems35status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems35RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |