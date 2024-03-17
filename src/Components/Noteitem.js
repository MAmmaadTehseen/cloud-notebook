import React from 'react'

const Noteitem = (props) => {
    const { note } = props
    return (
        < div className=' col-md-3 my-3'>
            <div class="card">
                <div class="card-header">
                    {note.tag}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} </p>
                    <a href="#" class="btn btn-primary">delete</a>
                </div>
            </div>

        </div >
    )
}

export default Noteitem
