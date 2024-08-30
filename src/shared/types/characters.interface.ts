interface AllPeopleI {
    allPeople: {
        people: Character[];
    }
}

type Character = {
    name: string;
    height: number;
    gender: string;
    homeworld: Homeworld;
    id: string;
}

type Homeworld = {
    name: string;
}