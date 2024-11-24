# PostV2LogsQueryEvalsResponse200ApplicationJson5

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJson5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJson5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 2920.11,
      precision: 11.11,
      recall: 4858.62,
    },
    rouge2: {
      f1: 5948.03,
      precision: 9939.81,
      recall: 1329.15,
    },
    rougeL: {
      f1: 888.20,
      precision: 4263.18,
      recall: 7509.56,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-12-27T22:43:26.713Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "c1702c28-92e0-4e1e-95c6-bd86600b62da",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONType](../../models/operations/postv2logsqueryevalsresponse200applicationjsontype.md)                                       | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `value`                                                                                                                                                                              | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems1Value](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems1value.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `id`                                                                                                                                                                                 | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The id of the resource                                                                                                                                                               |
| `status`                                                                                                                                                                             | [operations.PostV2LogsQueryEvalsResponse200Status](../../models/operations/postv2logsqueryevalsresponse200status.md)                                                                 | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `timestamp`                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                        | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `relatedEntities`                                                                                                                                                                    | *operations.PostV2LogsQueryEvalsResponse200RelatedEntities*[]                                                                                                                        | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |