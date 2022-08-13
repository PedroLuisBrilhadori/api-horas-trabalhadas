import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("User")
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default User;
