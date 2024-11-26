# GetAllPromptsItemsPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsVersions = {
  id: "<id>",
  createdById: "b66284a6-dc29-4b81-a865-953b3cf7c2cf",
  displayName: "Deron.Von",
  updatedById: "6ceaf39a-bc5e-4247-a94e-71df589c2db0",
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