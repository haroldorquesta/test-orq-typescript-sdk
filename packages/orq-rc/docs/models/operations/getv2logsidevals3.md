# GetV2LogsIdEvals3

## Example Usage

```typescript
import { GetV2LogsIdEvals3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvals3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-10-26T07:24:53.004Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "87a5c0ee-673b-4d3f-804a-f5ede3c1691f",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody23Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody23type.md)     | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `value`                                                                                                                                                                | *boolean*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The id of the resource                                                                                                                                                 |
| `status`                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody23Status](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody23status.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `timestamp`                                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                          | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `relatedEntities`                                                                                                                                                      | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody23RelatedEntities*[]                                                                                 | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |