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
}

type Homeworld = {
    name: string;
}