# GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody21

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody21 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody21 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-10-28T12:51:51.953Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2EvalsType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody2evalstype.md)     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `value`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The id of the resource                                                                                                                                                         |
| `status`                                                                                                                                                                       | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2EvalsStatus](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody2evalsstatus.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `timestamp`                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `relatedEntities`                                                                                                                                                              | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody2EvalsRelatedEntities*[]                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |