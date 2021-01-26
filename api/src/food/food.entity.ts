import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Food {
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    type: string;
}
