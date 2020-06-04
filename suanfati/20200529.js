/* 实现一个简单工厂 */
class User {
  constructor(name, age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
  }
}


function factory(name, age, career) {
  let work
  switch (career) {
    case "stuff":
      work = "be a stuff"
      break
    case "boss":
      work = "be a boss"
      break
    default:
      break
  }
  return new User(name, age, career, work)
}

var s1 = factory("kaki", 18, "stuff")
var b1 = factory("sb", 50, "boss")


/* 实现一个抽象工厂 */


//创建一个员工工厂
class StuffFactory {
  //身份
  createUser() {
      throw new Error("我是抽象类,需要被实现")
    }
    //职能
  createCareer() {
    throw new Error("我是抽象类,需要被实现")
  }
}

//创建一个身份工厂
class UserFactory {
  low() {
    throw new Error("我是抽象类,需要被实现")
  }
  middle() {
    throw new Error("我是抽象类,需要被实现")
  }
  high() {
    throw new Error("我是抽象类,需要被实现")
  }
}

//创建职能繁忙度工厂
class Career {
  busy() {
    throw new Error("我是抽象类,需要被实现")
  }
  idle() {
    throw new Error("我是抽象类,需要被实现")
  }
}

class LowUserFactory extends UserFactory {
  low() {
    console.log("i am a low salary stuff");
  }
}

class BusyCareer extends Career {
  busy() {
    console.log("my career is too busy");
  }
}

class CoderFactory extends StuffFactory {
  createUser() {
    return new LowUserFactory()
  }
  createCareer() {
    return new BusyCareer()
  }
}

let coder = new CoderFactory() //从具体实例工厂中创建实例
let coderPosition = coder.createUser() //从具体产品工厂中创建实例
let coderCareer = coder.createCareer() //从具体产品工厂中创建实例
coderPosition.low()
coderCareer.busy()