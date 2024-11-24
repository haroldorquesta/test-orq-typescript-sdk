# PostV2LogsQueryEvals5

## Example Usage

```typescript
import { PostV2LogsQueryEvals5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 2316.09,
      precision: 9874.56,
      recall: 1236.19,
    },
    rouge2: {
      f1: 2034.92,
      precision: 3774.11,
      recall: 1311.20,
    },
    rougeL: {
      f1: 9353.24,
      precision: 9103.81,
      recall: 4381.93,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-03-10T01:13:51.874Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "c67a7448-f70f-4401-92a5-ec5fa07e4e99",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems25Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems25type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `value`                                                                                                                                                                                  | [operations.PostV2LogsQueryEvalsResponseValue](../../models/operations/postv2logsqueryevalsresponsevalue.md)                                                                             | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems25Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems25status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems25RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |