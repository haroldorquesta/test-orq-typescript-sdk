# PostV2LogsQueryEvalsResponse4

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-12-04T02:57:45.647Z"),
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
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems34Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems34type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `values`                                                                                                                                                                                 | *string*[]                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems34Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems34status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems34RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |