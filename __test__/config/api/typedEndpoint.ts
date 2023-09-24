import { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { NextConnect } from "next-connect";

export default function(
  endpoint: NextConnect<NextApiRequest, NextApiResponse>,
  config?: PageConfig
) {
  const handler: typeof endpoint & { config?: PageConfig } = endpoint;
  if (config) {
    handler.config = config;
  }
  return handler;
}
