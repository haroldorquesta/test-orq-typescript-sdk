# Evals5

## Example Usage

```typescript
import { Evals5 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 653.43,
      precision: 2075.39,
      recall: 7601.88,
    },
    rouge2: {
      f1: 2404.67,
      precision: 1000.67,
      recall: 3390.70,
    },
    rougeL: {
      f1: 5733.73,
      precision: 2551.54,
      recall: 7712.42,
    },
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-12-12T19:37:47.585Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONType](../../models/operations/getv2logsidevalsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | [operations.EvalsValue](../../models/operations/evalsvalue.md)                                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The id of the resource                                                                                                                 |
| `status`                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200Status](../../models/operations/getv2logsidevalsresponse200status.md)                           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `timestamp`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `relatedEntities`                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONRelatedEntities*[]                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |