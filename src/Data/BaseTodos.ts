import {TodoInterface} from "../Interface/TodoInterface";

export const BaseTodos: TodoInterface[] = [
    {
        id: 1,
        title: 'Manger des saucisses',
        content: "J'en ai laissé pas mal dans le frigo",
        status: "todo"
    },
    {
        id: 2,
        title: 'Sortir les poubelles',
        content: "Il faut que tout brille dans le salon",
        status: "done"
    },
    {
        id: 3,
        title: 'Peindre le plafond',
        content: "C'est moche depuis que j'ai lancé des oeufs dessus",
        status: "todo"
    }
];
