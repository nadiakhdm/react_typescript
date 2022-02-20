import { HeadersDefaults } from "axios";

export interface CommonHeaderProperties extends HeadersDefaults {
    Content_Type: string;
    PRIVATE_TOKEN: string;
  }