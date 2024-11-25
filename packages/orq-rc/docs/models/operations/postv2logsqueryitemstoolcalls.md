# PostV2LogsQueryItemsToolCalls

## Example Usage

```typescript
import { PostV2LogsQueryItemsToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `index`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `type`                                                                                                                                                                         | [operations.PostV2LogsQueryItemsResponse200Type](../../models/operations/postv2logsqueryitemsresponse200type.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `function`                                                                                                                                                                     | [operations.PostV2LogsQueryItemsResponse200ApplicationJSONResponseBodyFunction](../../models/operations/postv2logsqueryitemsresponse200applicationjsonresponsebodyfunction.md) | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |