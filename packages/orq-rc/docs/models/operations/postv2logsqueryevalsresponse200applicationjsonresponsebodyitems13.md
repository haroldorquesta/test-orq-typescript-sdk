# PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems13

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems13 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems13 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-01-06T02:19:06.964Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "0f8eee62-52d9-43d7-b026-1a390251f3ea",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems1Evals7Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems1evals7type.md)                             | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `value`                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `id`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                         | The id of the resource                                                                                                                                                                                                     |
| `status`                                                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems1Evals7WorkflowRun3Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems1evals7workflowrun3status.md) | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `timestamp`                                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `relatedEntities`                                                                                                                                                                                                          | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems1EvalsRelatedEntities*[]                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |