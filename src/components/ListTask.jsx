import React, { Fragment, useState } from 'react'

const ListTask = ({dictionary, deleteTask, Tasks}) => {

    return (
        <Fragment>
            <ol className="mt-4 card bg-dark p-3 text-white">
                <div className="card-header d-flex">
                    <strong className="mx-auto h4 text-white">{dictionary.ListTask_Title}</strong>
                </div>
                <div className="card-body">
                    {
                        Tasks.map((item, index)=>
                        <li key={index}>
                            <div className="card card-body bg-light text-dark mb-1">
                                <div className="w-100 d-flex">
                                    <p className="mb-0 pt-1">{dictionary.FormNewTask_NameTask} : "{item.name}" - {dictionary.FormNewTask_DescriptionTask} : "{item.description}"</p>
                                    <div className="ms-auto">
                                        <button onClick={deleteTask} className="btn p-0 ps-1 pe-1">
                                            <span id={index} className="material-icons-outlined pt-1">
                                            delete
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )
                    }
                    
                </div>
            </ol>
        </Fragment>
    )
}

export default ListTask;