# ItemsToolCalls

## Example Usage

```typescript
import { ItemsToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `index`                                                                                                                                        | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | [operations.PostV2LogsQueryItemsResponse200ApplicationJSONType](../../models/operations/postv2logsqueryitemsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `function`                                                                                                                                     | [operations.PostV2LogsQueryItemsResponse200Function](../../models/operations/postv2logsqueryitemsresponse200function.md)                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |