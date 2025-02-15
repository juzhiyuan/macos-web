type ObjectKeys<Obj> = Obj extends object
  ? (keyof Obj)[]
  : Obj extends number
  ? []
  : Obj extends Array<any> | string
  ? string[]
  : never;

interface ObjectConstructor {
  keys<ObjectType>(o: ObjectType): ObjectKeys<ObjectType>;
}

type Unpacked<ArrayLike> = ArrayLike extends (infer RootType)[] ? RootType : ArrayLike;

type Unpromisify<PromiseLike> = PromiseLike extends Promise<infer RootType>
  ? RootType
  : PromiseLike;
