# GetAllPromptsResponseBody

Prompts retrieved.

## Example Usage

```typescript
import { GetAllPromptsResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsResponseBody = {
  count: 6980.47,
  page: 4863.54,
  limit: 9408.65,
  totalPages: 683.75,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "332b3336-f541-453c-a124-4dc9459b68ea",
      createdById: "1239105b-bcb9-4739-9a19-18211e94182c",
      displayName: "Mollie56",
      updatedById: "994e8682-448b-4428-ad67-4c12fa8cf3c5",
      promptConfig: {
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "text",
                text: "<value>",
              },
            ],
          },
        ],
      },
      metadata: {},
      versions: [
        {
          id: "<id>",
          createdById: "0b9bc75c-69e2-404c-a9f8-4cada7404063",
          displayName: "Daisy75",
          updatedById: "187c9407-ee2d-401f-9617-0083952f3044",
          promptConfig: {
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: "<value>",
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