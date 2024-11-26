# GetAllPromptsItemsPromptsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsPromptsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsPromptsVersions = {
  id: "<id>",
  createdById: "4b320d78-1158-4b7d-9606-15fd366c001a",
  displayName: "Rosina_Kuhn54",
  updatedById: "282f82b1-c720-4f4f-8881-fb8126581080",
  promptConfig: {
    messages: [
      {
        role: "exception",
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