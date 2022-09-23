import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import Record from "@modules/Record/record.model";

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};

@Entity("User")
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}

export default User;
