# GetV2LogsIdEvalsResponse2003

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse2003 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse2003 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2024-06-23T15:03:40.986Z"),
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
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody43type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | *boolean*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody43status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody43RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |