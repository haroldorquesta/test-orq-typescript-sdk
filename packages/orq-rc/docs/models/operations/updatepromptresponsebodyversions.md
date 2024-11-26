# UpdatePromptResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { UpdatePromptResponseBodyVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: UpdatePromptResponseBodyVersions = {
  id: "<id>",
  createdById: "82155595-c15a-4917-94a2-a74b320d7811",
  displayName: "Jose_Kutch37",
  updatedById: "615fd366-c001-4a6d-847b-85282f82b1c7",
  promptConfig: {
    messages: [
      {
        role: "system",
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                 | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `createdById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `displayName`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `updatedById`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `description`                                                                                                                                                                        | *string*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `promptConfig`                                                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJSONPromptConfig](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjsonpromptconfig.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                           | [operations.UpdatePromptResponseBodyPromptsResponse200ApplicationJSONMetadata](../../models/operations/updatepromptresponsebodypromptsresponse200applicationjsonmetadata.md)         | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `commit`                                                                                                                                                                             | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `timestamp`                                                                                                                                                                          | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |