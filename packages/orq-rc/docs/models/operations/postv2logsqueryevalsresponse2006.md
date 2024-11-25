# PostV2LogsQueryEvalsResponse2006

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse2006 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse2006 = {
  type: "bert_score",
  value: {
    f1: 2550.64,
    precision: 7505.37,
    recall: 9980.23,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-10-31T20:18:29.852Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems46Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems46type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `value`                                                                                                                                                                                  | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems4Value](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems4value.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems46Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems46status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems46RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |