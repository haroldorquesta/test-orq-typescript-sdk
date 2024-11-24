# GetV2LogsId22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2LogsId22 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsId22 = {
  type: "image_url",
  imageUrl: {
    url: "https://nifty-napkin.com/",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.GetV2LogsId2ResponseType](../../models/operations/getv2logsid2responsetype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `imageUrl`                                                                                 | [operations.GetV2LogsId2ImageUrl](../../models/operations/getv2logsid2imageurl.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |