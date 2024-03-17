import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "ammad",
        "age": "19"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;