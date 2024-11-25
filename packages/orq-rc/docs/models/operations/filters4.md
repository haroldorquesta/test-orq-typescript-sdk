# Filters4

## Example Usage

```typescript
import { Filters4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Filters4 = {
  operator: "is_greater_than",
  value: [
    939.41,
  ],
  type: "date",
  name: "<value>",
  path: "/var/log",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                                 | [operations.PostV2LogsQueryFiltersRequestRequestBodyOperator](../../models/operations/postv2logsqueryfiltersrequestrequestbodyoperator.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `value`                                                                                                                                    | *operations.PostV2LogsQueryFiltersValue*                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `type`                                                                                                                                     | [operations.PostV2LogsQueryFiltersRequestRequestBodyType](../../models/operations/postv2logsqueryfiltersrequestrequestbodytype.md)         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `path`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `hideOperators`                                                                                                                            | *operations.PostV2LogsQueryFiltersRequestHideOperators*[]                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |