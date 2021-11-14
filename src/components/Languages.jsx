import React, { Fragment, useState } from 'react'

const Languages = ({changeLanguage})=>{

    return (
        <Fragment>
            <div className="d-flex w-100 pt-4">
                <div className="d-grid gap-2 ms-auto me-5 d-md-block">
                    <button className="btn p-0 me-1" type="button">
                        <img onClick={changeLanguage} className="border-bottom border-1 border-primary" id="es" src="./img/spain.png" />
                    </button>
                    <button className="btn p-0 me-1" type="button">
                        <img onClick={changeLanguage} className="border-1" id="en" src="./img/united-kingdom.png" />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Languages;