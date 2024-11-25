# Evals4

## Example Usage

```typescript
import { Evals4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-10-12T20:51:57.296Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.GetV2LogsIdEvalsResponse200Type](../../models/operations/getv2logsidevalsresponse200type.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `values`                                                                                                 | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The id of the resource                                                                                   |
| `status`                                                                                                 | [operations.GetV2LogsIdEvalsResponseStatus](../../models/operations/getv2logsidevalsresponsestatus.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `timestamp`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `relatedEntities`                                                                                        | *operations.GetV2LogsIdEvalsResponse200RelatedEntities*[]                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |