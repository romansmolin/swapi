import React from 'react'


const DetailsTable: React.FC<CharacterEntity> = ({ person }) => {
    const { name, birthYear, species, homeworld, filmConnection } = person;
    const films = filmConnection.films;

    return (
        <div className="relative overflow-hidden shadow-md rounded-lg">
            <table className="table-fixed w-full text-left">
                <thead className="uppercase bg-primary-600 text-white font-bold">
                    <tr>
                        <td className="py-1 border text-center p-4">Aspect</td>
                        <td className="py-1 border text-center p-4">Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-5 border text-center p-4">Name</td>
                        <td className="py-5 border text-center p-4">{name}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Birth Year</td>
                        <td className="py-5 border text-center p-4">{birthYear}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Species</td>
                        <td className="py-5 border text-center p-4">{species?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Homeworld</td>
                        <td className="py-5 border text-center p-4">{homeworld?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Homeworld Population</td>
                        <td className="py-5 border text-center p-4">{homeworld.population?.toLocaleString() || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Homeworld Climate</td>
                        <td className="py-5 border text-center p-4">{homeworld.climates?.join(', ') || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="py-5 border text-center p-4">Films</td>
                        <td className="py-5 border text-center p-4">
                            {films.map(film => (
                                <div key={film.title}>{ film.title }</div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DetailsTable