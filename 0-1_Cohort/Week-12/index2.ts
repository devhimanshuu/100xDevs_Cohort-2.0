type Uuser = {
  readonly name: string;
  readonly age: number;
};

const user: Readonly<Uuser> = {
  name: "Himanshu gupta",
  age: 21,
};
//When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

//user.age = 12;
