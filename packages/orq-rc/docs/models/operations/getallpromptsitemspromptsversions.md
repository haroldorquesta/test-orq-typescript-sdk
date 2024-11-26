# GetAllPromptsItemsPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsVersions = {
  id: "<id>",
  createdById: "906033f4-d6da-4010-813c-b36d191f7e2f",
  displayName: "Andreanne.Sanford",
  updatedById: "fadd29f1-7cf1-46c9-9e18-9dd790b0a8f2",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: [
          {
            type: "image_url",
            imageUrl: {
              url: "https://rewarding-swine.com",
            },
          },
        ],
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdById`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `displayName`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedById`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `promptConfig`                                                                                                                             | [operations.GetAllPromptsItemsPromptsResponse200PromptConfig](../../models/operations/getallpromptsitemspromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `metadata`                                                                                                                                 | [operations.GetAllPromptsItemsPromptsResponse200Metadata](../../models/operations/getallpromptsitemspromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `commit`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `timestamp`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |