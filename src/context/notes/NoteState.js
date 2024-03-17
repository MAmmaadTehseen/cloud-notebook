import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "65f7sdfw2bdsc91e5f0b2cd40c323",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:56.320Z",
            "__v": 0
        },
        {
            "_id": "65fsdfgsfs72sbdd91e5f0b2cd40c325",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        },
        {
            "_id": "65f7sdf2bde91e5f0b2cd40c327",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 3",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:58.133Z",
            "__v": 0
        },
        {
            "_id": "65f7sdf2bdd91e5cf0b2cd40c325",
            "user": "65sdfddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        },
        {
            "_id": "65f7sdf2bdd91sdfsde5cf0b2cd40c325",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        },
        {
            "_id": "65f72cb23dd91e5f0b2cd40c325",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        },
        {
            "_id": "65f72bdd91de5f0b2cd40c325",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        },
        {
            "_id": "65f72b3dd91e53f0b2cd40c325",
            "user": "65ddc8c643ee629b130b1c43",
            "title": "my Note 2",
            "description": "'a good description'",
            "tag": "personal",
            "date": "2024-03-17T17:43:57.280Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;