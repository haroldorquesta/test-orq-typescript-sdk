# Evals2

## Example Usage

```typescript
import { Evals2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals2 = {
  type: "number",
  value: 7500.68,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-10-23T10:46:49.886Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "1d4bffb9-c2f3-4b12-8363-b45a0f63c554",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [operations.GetV2LogsIdEvalsType](../../models/operations/getv2logsidevalstype.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The id of the resource                                                                        |
| `status`                                                                                      | [operations.EvalsStatus](../../models/operations/evalsstatus.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.GetV2LogsIdEvalsRelatedEntities*[]                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |