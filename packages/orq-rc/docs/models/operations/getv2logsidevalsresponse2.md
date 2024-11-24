# GetV2LogsIdEvalsResponse2

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2 = {
  type: "number",
  value: 6543.31,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-12-17T09:36:36.965Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody32Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody32type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody32Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody32status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody32RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |