import "reflect-metadata";

/**
 * 配合装饰器语法使用, 自定义 metaData
 */

function classDecorator(): ClassDecorator {
  return target => {
    // 在类上定义元数据，key 为 `classMetaData`，value 为 `a`
    Reflect.defineMetadata('classMetaData', 'a', target);
  };
}

function methodDecorator(): MethodDecorator {
  return (target, key, descriptor) => {
    // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
    Reflect.defineMetadata('methodMetaData', 'b', target, key);
  };
}

@classDecorator()
class SomeClass {
  @methodDecorator()
  someMethod() {}
}

console.log(Reflect.getMetadata('classMetaData', SomeClass)); // 'a'
console.log(Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod'));  // 'b'



/**
 * 简单使用，直接使用
 */

@Reflect.metadata('sameClassMeteData', 'a1')
class SameClass {
  @Reflect.metadata('sameMethodMetaData', 'b1')
  sameMethod() {}
}

console.log(Reflect.getMetadata('sameClassMeteData', SameClass)); // 'a1'
console.log(Reflect.getMetadata('sameMethodMetaData', new SameClass(), 'sameMethod'));  // 'b1'
