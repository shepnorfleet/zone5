import { DbConfigSet } from "@/api/db/types";
import { PgConfig } from "@/api/db/pgsql/PgConfig";

export type PgConfigSet = DbConfigSet<PgConfig>;
