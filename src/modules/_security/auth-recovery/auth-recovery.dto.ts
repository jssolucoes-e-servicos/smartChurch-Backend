export type AuthRecoveryRequestInitialDTO = {
  email: string;
  app: string;
};

export type AuthRecoveryRequestStapValidateDTO = {
  token: string;
  user: string;
};
