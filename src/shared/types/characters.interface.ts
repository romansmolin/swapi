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
    species: Species | null;
    birthYear: string;
    filmConnection: {
        films: Film[]
    }
}

type CharacterEntity = {
    person: Character
}

type Homeworld = {
    name: string;
    population: number,
    climates: string[]
}

type Film = {
    title: string
}

type Species = {
    name: string
}