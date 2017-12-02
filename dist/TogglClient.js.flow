/* @flow */
declare type TogglClient =
  | {|+username: string, +password: string|}
  | {|+apiToken: string|};

export function createWithLoginData(
  username: string,
  password: string,
): TogglClient {
  return {username, password};
}
