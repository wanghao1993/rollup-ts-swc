class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class B extends A {
  age: number
  constructor(age: number, name: string) {
    super(name)
    this.age = age
  }
}
export const numberPlus = (a: number, b: number): number => {
  return a + b
}
export default B
