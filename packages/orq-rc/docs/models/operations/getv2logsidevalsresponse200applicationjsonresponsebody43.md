# GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-01-06T23:31:21.587Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "b4973b0a-b14e-479c-bd18-3bf0aa6a6f7d",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Evals7WorkflowRunType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody4evals7workflowruntype.md)     | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `value`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `id`                                                                                                                                                                                                   | *string*                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                     | The id of the resource                                                                                                                                                                                 |
| `status`                                                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Evals7WorkflowRunStatus](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody4evals7workflowrunstatus.md) | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `timestamp`                                                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                          | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Evals7WorkflowRunRelatedEntities*[]                                                                                                 | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |