# GetV2LogsIdEvalsResponse2001

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2001 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2001 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-04-23T07:00:19.315Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody4type.md)     | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `value`                                                                                                                                                              | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The id of the resource                                                                                                                                               |
| `status`                                                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody4status.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `timestamp`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                        | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `relatedEntities`                                                                                                                                                    | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody4RelatedEntities*[]                                                                                | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |