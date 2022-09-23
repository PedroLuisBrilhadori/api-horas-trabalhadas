import User from "@modules/User/user.model";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("Record")
class Record {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    nullable: false,
  })
  start: Date;

  @Column()
  end?: Date;

  @Column({
    default: () => true,
    nullable: false,
  })
  working: boolean;

  @Column({
    nullable: false,
  })
  user: User;
}

export default Record;
