# GetAllPromptsItemsVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { GetAllPromptsItemsVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetAllPromptsItemsVersions = {
  id: "<id>",
  createdById: "d467d995-4745-47de-8d8b-57f527a214ea",
  displayName: "Leif_Ledner2",
  updatedById: "f71409f9-9538-4e09-869d-736216a4ebab",
  promptConfig: {
    messages: [
      {
        role: "correction",
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

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `createdById`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `displayName`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `updatedById`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `description`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `promptConfig`                                                                                                                                                           | [operations.GetAllPromptsItemsPromptsResponse200ApplicationJSONPromptConfig](../../models/operations/getallpromptsitemspromptsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `metadata`                                                                                                                                                               | [operations.GetAllPromptsItemsPromptsResponse200ApplicationJSONMetadata](../../models/operations/getallpromptsitemspromptsresponse200applicationjsonmetadata.md)         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `commit`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `timestamp`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |