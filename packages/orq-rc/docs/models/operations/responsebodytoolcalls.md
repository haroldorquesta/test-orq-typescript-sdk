# ResponseBodyToolCalls

## Example Usage

```typescript
import { ResponseBodyToolCalls } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `index`                                                                                                                                              | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetV2LogsIdResponseBodyResponse200ApplicationJSONType](../../models/operations/getv2logsidresponsebodyresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `function`                                                                                                                                           | [operations.GetV2LogsIdResponseBodyResponse200Function](../../models/operations/getv2logsidresponsebodyresponse200function.md)                       | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |