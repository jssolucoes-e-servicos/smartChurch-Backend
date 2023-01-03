export function RegisterNotExists(field:string = 'Register'){
  throw new Error(`${field} does not exixts`);
}