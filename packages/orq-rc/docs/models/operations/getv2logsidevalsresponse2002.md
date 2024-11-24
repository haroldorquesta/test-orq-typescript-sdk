# GetV2LogsIdEvalsResponse2002

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2002 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2002 = {
  type: "number",
  value: 7458.11,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-03-15T17:54:36.507Z"),
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
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody42Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody42type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody42Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody42status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody42RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |