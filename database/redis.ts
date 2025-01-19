import config from "@/lib/config";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: config.env.upstash.rediusUrl,
  token: config.env.upstash.rediusToken,
});

export default redis;
