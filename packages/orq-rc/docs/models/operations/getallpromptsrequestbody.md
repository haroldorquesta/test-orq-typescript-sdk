# GetAllPromptsRequestBody

## Example Usage

```typescript
import { GetAllPromptsRequestBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsRequestBody = {
  filters: [
    {
      type: "string",
      operator: "equals",
      value: "<value>",
      path: "/private/var",
    },
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `filters`                           | *operations.GetAllPromptsFilters*[] | :heavy_check_mark:                  | N/A                                 |