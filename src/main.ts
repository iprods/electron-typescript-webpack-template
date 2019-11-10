export class MyClass {
  add(a: number, b: number): number {
    return a + b;
  }
}

const myClass: MyClass = new MyClass();
console.log(myClass.add(2, 3));
