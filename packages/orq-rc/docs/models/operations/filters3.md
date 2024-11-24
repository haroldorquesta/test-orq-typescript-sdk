# Filters3

## Example Usage

```typescript
import { Filters3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Filters3 = {
  operator: "is_between",
  value: {
    criteria: {},
    mode: "datetime",
  },
  type: "date",
  name: "<value>",
  path: "/media",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                           | [operations.PostV2LogsQueryFiltersRequestOperator](../../models/operations/postv2logsqueryfiltersrequestoperator.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `value`                                                                                                              | [operations.FiltersValue](../../models/operations/filtersvalue.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.PostV2LogsQueryFiltersRequestType](../../models/operations/postv2logsqueryfiltersrequesttype.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `path`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `hideOperators`                                                                                                      | *operations.PostV2LogsQueryFiltersHideOperators*[]                                                                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |