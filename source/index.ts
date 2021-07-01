
type Defined<T extends any = any> = Exclude<T, undefined>;

type Maybe<T extends any> = T | undefined;

function isDefined<T extends any>(value?: T): value is Defined<T> {
  return value !== undefined;
}

export function firstDefined<T extends Defined>(list: Maybe<T>[]): Maybe<T>;
export function firstDefined<T extends Defined>(list: Maybe<T>[], defaultValue: T): T;
export function firstDefined<T extends Defined>(list: Maybe<T>[], defaultValue?: T): Maybe<T> {
  for(let i=0; i<list.length; i+=1) {
    const value = list[i];
    if(isDefined(value)) {
      return value;
    }
  }
  return defaultValue;
}
