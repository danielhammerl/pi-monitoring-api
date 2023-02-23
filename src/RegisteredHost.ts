export type HostState = "FAILURE" | "UP_AGAIN" | "UP";

export type RegisteredHost = {
  id: string;
  name: string;
  lastSignOfLife: Date;
  lastState: HostState;
};
