# GetV2LogsIdEvals1

## Example Usage

```typescript
import { GetV2LogsIdEvals1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvals1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-11-29T23:07:14.128Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "d3168489-6964-4430-93bf-d5eb860cf9a1",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody2type.md)     | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `value`                                                                                                                                                              | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The id of the resource                                                                                                                                               |
| `status`                                                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody2status.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `timestamp`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                        | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `relatedEntities`                                                                                                                                                    | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2RelatedEntities*[]                                                                                | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |