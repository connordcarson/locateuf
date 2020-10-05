import React from 'react';

const TableHeader = () => {
    return (
        < thead >
            <tr>
                <th>Owner</th>
                <th>Address</th>
                <th>Listed Price</th>
                <th>Remove</th>
                <th>Update</th>
            </tr>
        </thead >
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.price}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
                <td><button onClick={() => props.updateCharacter(index)}>Edit</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter, updateCharacter} = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} updateCharacter={updateCharacter}/>
        </table>
    );
}

export default Table;
