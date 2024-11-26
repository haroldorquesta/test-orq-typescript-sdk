# GetAllPromptsItemsPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsVersions = {
  id: "<id>",
  createdById: "9725e787-6037-4975-9cbf-0b04eca60476",
  displayName: "Alexander.Klein93",
  updatedById: "2c590603-3f4d-46da-b010-13cb36d191f7",
  promptConfig: {
    messages: [
      {
        role: "assistant",
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