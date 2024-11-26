# GetAllPromptTemplatesResponseBody

Prompt templates retrieved.

## Example Usage

```typescript
import { GetAllPromptTemplatesResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptTemplatesResponseBody = {
  count: 9895.25,
  items: [
    {
      id: "<id>",
      owner: "<value>",
      domainId: "1cbe31b3-25d8-407a-9893-d8bf6e009434",
      createdById: "b9cdd66e-a185-4f09-ab4f-de094da818af",
      displayName: "Vivian.OConner-Lakin89",
      updatedById: "11c5a968-af99-41f8-bc06-44c970ff308f",
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
          createdById: "5e723417-ea10-445c-af6a-fba15e3db588",
          displayName: "Josefa.Rutherford96",
          updatedById: "459e2497-7de7-4ac8-a4a9-e0e805b7f65d",
          promptConfig: {
            messages: [
              {
                role: "prompt",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://coarse-molasses.org/",
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
      key: "<key>",
      type: "snippet",
    },
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `count`              | *number*             | :heavy_check_mark:   | N/A                  |
| `items`              | *operations.Items*[] | :heavy_check_mark:   | N/A                  |