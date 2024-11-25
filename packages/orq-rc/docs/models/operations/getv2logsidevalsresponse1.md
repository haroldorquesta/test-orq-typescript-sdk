# GetV2LogsIdEvalsResponse1

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-06-29T10:53:55.679Z"),
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
| `type`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody3Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody3type.md)     | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `value`                                                                                                                                                              | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `id`                                                                                                                                                                 | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The id of the resource                                                                                                                                               |
| `status`                                                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody3Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody3status.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `timestamp`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                        | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `relatedEntities`                                                                                                                                                    | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody3RelatedEntities*[]                                                                                | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |