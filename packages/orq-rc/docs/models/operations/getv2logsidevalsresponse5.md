# GetV2LogsIdEvalsResponse5

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 7375.10,
      precision: 7566.36,
      recall: 4865.75,
    },
    rouge2: {
      f1: 8056.23,
      precision: 2961.86,
      recall: 5547.95,
    },
    rougeL: {
      f1: 6366.88,
      precision: 134.82,
      recall: 1792.27,
    },
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-01-31T14:23:38.837Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "5d38bfef-e960-4546-85f1-b67175d125a7",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody35Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody35type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONValue](../../models/operations/getv2logsidevalsresponse200applicationjsonvalue.md)                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody35Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody35status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody35RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |