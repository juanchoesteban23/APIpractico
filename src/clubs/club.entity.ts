// club.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Socio } from '../socios/socio.entity';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  foundationDate: Date;

  @Column()
  image: string;

  @Column({ length: 100 })
  description: string;

  @ManyToMany(() => Socio, socio => socio.clubs)
  socios: Socio[];
}