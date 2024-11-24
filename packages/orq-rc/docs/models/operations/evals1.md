# Evals1

## Example Usage

```typescript
import { Evals1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-12-24T21:32:04.301Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [operations.EvalsType](../../models/operations/evalstype.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `status`                                                                                      | [operations.Status](../../models/operations/status.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.EvalsRelatedEntities*[]                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |