interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

// interface UpdateUser {
//   name: string;
//   age: number;
//   password: string;
// }

type UpdateProps = Pick<User, "name" | "age" | "email">;

//Pick alllows you to create a new type by selecting a set of properties Keys from an existing type Type

type UpdatePropsOptional = Partial<UpdateProps>;

//Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

function updateUser(updateUser: UpdatePropsOptional) {
  //hit the database to update the user
}
