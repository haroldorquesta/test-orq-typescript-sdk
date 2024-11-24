# PostV2LogsQueryRequestBody

## Example Usage

```typescript
import { PostV2LogsQueryRequestBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryRequestBody = {
  filters: [
    {
      type: "search",
      value: "<value>",
      searchPaths: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `pagination`                                                         | [operations.Pagination](../../models/operations/pagination.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `sortingProps`                                                       | [operations.SortingProps](../../models/operations/sortingprops.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `query`                                                              | [operations.Query](../../models/operations/query.md)                 | :heavy_minus_sign:                                                   | N/A                                                                  |
| `filters`                                                            | *operations.PostV2LogsQueryFilters*[]                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `includedFields`                                                     | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | N/A                                                                  |