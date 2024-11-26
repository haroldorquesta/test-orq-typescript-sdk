# GetAllPromptTemplatesRequestBody

## Example Usage

```typescript
import { GetAllPromptTemplatesRequestBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptTemplatesRequestBody = {
  filters: [
    {
      type: "string_array",
      operator: "in",
      values: [
        "<value>",
      ],
      path: "/boot/defaults",
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `filters`              | *operations.Filters*[] | :heavy_check_mark:     | N/A                    |