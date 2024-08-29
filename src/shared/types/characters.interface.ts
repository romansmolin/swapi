interface AllPeopleI {
    allPeople: {
        people: Character[];
    }
}

type Character = {
    name: string;
    skinColor: string;
    homeworld: Homeworld;
}

type Homeworld = {
    name: string;
}