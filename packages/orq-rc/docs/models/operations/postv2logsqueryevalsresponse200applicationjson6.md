# PostV2LogsQueryEvalsResponse200ApplicationJson6

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJson6 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJson6 = {
  type: "bert_score",
  value: {
    f1: 8169.07,
    precision: 2227.17,
    recall: 4772.80,
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-07-20T20:31:05.179Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.PostV2LogsQueryEvalsValue](../../models/operations/postv2logsqueryevalsvalue.md)                                                                           | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONStatus](../../models/operations/postv2logsqueryevalsresponse200applicationjsonstatus.md)                     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONRelatedEntities*[]                                                                                           | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |