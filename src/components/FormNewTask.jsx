import React, { Fragment, useState } from 'react'

const FormNewTask = ({dictionary, submitFormNewTask, handleInputChange})=>{

    return (
        <Fragment>
            <form onSubmit={submitFormNewTask} className="card p-3 bg-dark mt-4">
                <div className="card-header d-flex">
                    <strong className="mx-auto h4 text-white">{dictionary.FormNewTask_Title}</strong>
                </div>
                <div className="card-body pb-0">
                    <div className="mb-3">
                        <label className="form-label">{dictionary.FormNewTask_NameTask}</label>
                        <input onChange={handleInputChange} name="name" type="text" className="form-control bg-light" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">{dictionary.FormNewTask_DescriptionTask}</label>
                        <textarea onChange={handleInputChange} name="description" className="form-control bg-light"></textarea>
                    </div>
                </div>
                <div className="card-footer bg-dark">
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">{dictionary.FormNewTask_buttomSubmitTask}</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default FormNewTask;