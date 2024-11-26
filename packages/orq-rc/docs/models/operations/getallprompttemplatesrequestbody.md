# GetAllPromptTemplatesRequestBody

## Example Usage

```typescript
import { GetAllPromptTemplatesRequestBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptTemplatesRequestBody = {
  filters: [
    {
      type: "id",
      id: "<id>",
      path: "/usr/share",
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `filters`              | *operations.Filters*[] | :heavy_check_mark:     | N/A                    |