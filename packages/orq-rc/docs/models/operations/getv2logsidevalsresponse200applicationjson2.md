# GetV2LogsIdEvalsResponse200ApplicationJson2

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200ApplicationJson2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200ApplicationJson2 = {
  type: "number",
  value: 1829.00,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-10-31T23:05:18.997Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "963eac0f-0eb3-4836-93fd-24ccab6cf94b",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody1Evals7Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody1evals7type.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `value`                                                                                                                                                                      | *number*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `id`                                                                                                                                                                         | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | The id of the resource                                                                                                                                                       |
| `status`                                                                                                                                                                     | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody1Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody1status.md)         | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `timestamp`                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `relatedEntities`                                                                                                                                                            | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody1Evals7RelatedEntities*[]                                                                                  | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |