import { Kind, ValueNode } from 'graphql';
import { ObjectID } from 'mongodb';

import { CustomScalar, Scalar } from '@nestjs/graphql';

export class CustomID extends String {}

@Scalar(
  'CustomID',
  /* istanbul ignore next */
  () => CustomID
)
export class CustomIDScalar implements CustomScalar<string, CustomID> {
  description = 'CustomID scalar type';

  private checkID(value: string): CustomID {
    if (ObjectID.isValid(value)) {
      return value as CustomID;
    }
    throw new Error('INVALID_OBJECT_ID');
  }

  parseValue(value: string): CustomID {
    return this.checkID(value);
  }

  serialize(value: CustomID): string {
    return value as string;
  }

  parseLiteral(ast: ValueNode): CustomID {
    if (ast.kind === Kind.STRING) {
      return this.checkID(ast.value);
    }
    throw new Error('INVALID_OBJECT_ID');
  }
}
