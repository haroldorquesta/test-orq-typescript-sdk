# PostV2LogsQueryEvalsResponse200ApplicationJson4

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJson4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJson4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-08-26T11:49:51.321Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "a5706fbd-a9f7-4c31-8257-e9a6a6984119",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.PostV2LogsQueryEvalsResponse200Type](../../models/operations/postv2logsqueryevalsresponse200type.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `values`                                                                                                         | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The id of the resource                                                                                           |
| `status`                                                                                                         | [operations.PostV2LogsQueryEvalsResponseStatus](../../models/operations/postv2logsqueryevalsresponsestatus.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `timestamp`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `relatedEntities`                                                                                                | *operations.PostV2LogsQueryEvalsResponseRelatedEntities*[]                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |