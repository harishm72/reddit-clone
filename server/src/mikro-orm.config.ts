import { MikroORM } from "@mikro-orm/core";
import path from "path";

import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  dbName: "reddit-clone",
  type: "postgresql",
  user: "postgres",
  password: "postgres",
  entities: [Post, User],
  debug: process.env.NODE_ENV !== "production",
} as Parameters<typeof MikroORM.init>[0];
