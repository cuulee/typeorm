import {Table} from "../../../../src/decorator/tables/Table";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../src/decorator/columns/Column";
import {Category} from "./Category";
import {ManyToMany} from "../../../../src/decorator/relations/ManyToMany";
import {JoinTable} from "../../../../src/decorator/relations/JoinTable";

@Table()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(type => Category, {
        cascadeInsert: true
    })
    @JoinTable()
    categories: Category[];

}