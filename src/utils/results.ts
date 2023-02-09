import { HttpException, HttpStatus } from '@nestjs/common';

export function RegisterNotExists(field = 'Register') {
  throw new HttpException(`${field} does not exixts`, HttpStatus.NOT_FOUND);
}

export function RegisterDeleted(field = 'Register') {
  return {
    message: `${field} deleted with success`,
    result: 'OK',
  };
}
