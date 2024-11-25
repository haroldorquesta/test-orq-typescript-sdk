# PostV2LogsQueryEvalsResponse2005

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse2005 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse2005 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 196.92,
      precision: 408.75,
      recall: 2578.22,
    },
    rouge2: {
      f1: 7402.45,
      precision: 6283.14,
      recall: 7697.89,
    },
    rougeL: {
      f1: 7689.19,
      precision: 8565.67,
      recall: 7203.19,
    },
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-09-12T02:41:54.847Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems45Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems45type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `value`                                                                                                                                                                                  | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItemsValue](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitemsvalue.md)       | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems45Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems45status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems45RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |