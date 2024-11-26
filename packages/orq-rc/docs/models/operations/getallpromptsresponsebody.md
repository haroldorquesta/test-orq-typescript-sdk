# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsResponseBody = {
  count: 3190.02,
  page: 2820.80,
  limit: 6909.86,
  totalPages: 9718.77,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "9f3f8bc2-ffdd-45de-a42c-9165a6acb9e3",
      createdById: "c33ace7b-25a2-4f2c-b5b6-be92f836bee2",
      displayName: "Lamont_Kohler",
      updatedById: "0c067846-c4d0-42e7-9097-159ae71162e3",
      promptConfig: {
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "a9fd9799-4284-460a-a0b3-29f6d08a6206",
          displayName: "Yolanda.Grimes",
          updatedById: "a90aa8f4-d243-4ec7-960b-fc34663ccb0e",
          promptConfig: {
            messages: [
              {
                role: "system",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://illustrious-straw.info",
                    },
                  },
                ],
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