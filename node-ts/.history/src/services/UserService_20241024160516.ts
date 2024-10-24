interface IUser {
  name: string;
  email: string;
}



const db = [
  {
    name: "Vitor",
    email: "vitorbelluzzo@hotmail.com"
  }, 
  {
    name: "Sophia",
    email: "sophia@email.com",
  },
]



export class UserService  {

  db: IUser[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("Usuário inserido no banco de dados" );
  };

  getAllUsers = () => {
    return this.db;
  };
}
