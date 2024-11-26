# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsResponseBody = {
  count: 3495.51,
  page: 716.31,
  limit: 8162.30,
  totalPages: 709.99,
  items: [
    {
      id: "<id>",
      owner: "vendor",
      domainId: "83fe13a3-82a8-4f28-8493-e76ce7c24be1",
      createdById: "f1083495-f3de-47f4-8190-7d634ea2798c",
      displayName: "Earl17",
      updatedById: "8ad95824-a00e-4fe3-bc71-ccbff2cabfd6",
      promptConfig: {
        messages: [
          {
            role: "expected_output",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://scornful-accelerator.name/",
                },
              },
            ],
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "b6d748ea-f7aa-43b1-8923-f68a7b0a5e20",
          displayName: "Joyce23",
          updatedById: "0c1dc367-633b-4241-930b-667459379248",
          promptConfig: {
            messages: [
              {
                role: "prompt",
                content: "<value>",
              },
            ],
          },
          metadata: {},
          commit: "<value>",
          timestamp: "<value>",
        },
      ],
      type: "prompt",
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