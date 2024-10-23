import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    UserId: number;

    @Column({ length: 150 })
    FirstName: string;

    @Column({ length: 150 })
    LastName: string;

    @Column()
    Age: number;

    @Column({ length: 255, unique: true })
    Email: string;

    @Column({ length: 255 })
    Password: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    AddedOn: Date;
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    Modified: Date;
    @Column({ default: true })
    Active: boolean;
}
