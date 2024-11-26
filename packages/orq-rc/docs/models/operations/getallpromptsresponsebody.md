# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsResponseBody = {
  count: 5412.45,
  page: 8963.05,
  limit: 5923.78,
  totalPages: 2566.31,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "7eb8b76a-bedf-41f3-b1aa-fc699c96a351",
      createdById: "14e83fe1-3a38-42a8-af28-493e76ce7c24",
      displayName: "Tiffany_Collier9",
      updatedById: "83495f3d-e7f4-4190-a7d6-34ea2798c049",
      promptConfig: {
        messages: [
          {
            role: "system",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "c8ad9582-4a00-4efe-93c7-1ccbff2cabfd",
          displayName: "Tressie46",
          updatedById: "09b6d748-eaf7-4aa3-8b19-23f68a7b0a5e",
          promptConfig: {
            messages: [
              {
                role: "system",
                content: "<value>",
              },
            ],
          },
          metadata: {},
          commit: "<value>",
          timestamp: "<value>",
        },
      ],
      type: "template",
    },
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `count`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `page`                            | *number*                          | :heavy_check_mark:                | N/A                               |
| `limit`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `totalPages`                      | *number*                          | :heavy_check_mark:                | N/A                               |
| `items`                           | *operations.GetAllPromptsItems*[] | :heavy_check_mark:                | N/A                               |