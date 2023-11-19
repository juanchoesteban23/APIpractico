// socio.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Club } from '../clubs/club.entity';

@Entity()
export class Socio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @ManyToMany(() => Club, club => club.socios)
  @JoinTable()
  clubs: Club[];
}