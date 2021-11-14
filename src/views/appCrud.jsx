import React, { useState, Fragment }  from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

//Components
import FormNewTask from '../components/FormNewTask';
import ListTask from '../components/ListTask';
import Languages from '../components/Languages';

//Languages
import Spanish from '../Languages/Spanish.js';
import English from '../Languages/English.js';

const AppCrud = ()=>{

    const [Tasks, setTasks] = useState([]);

    const [Dictionary, setDictionary] = useState(English);

    const [dataFormNewTask, setDataFormNewTask] = useState({
        name: '',
        description: ''
    })

    const [idiom, setIdiom] = useState('es');

    const changeLanguage = (event)=>{
        switch (event.target.id){
            case 'en':
                setIdiom('en')
                setDictionary(English)
                break;
            case 'es':
                setIdiom('es')
                setDictionary(Spanish)
                break;
        }
    }

    const handleInputChange = (event)=>{
        setDataFormNewTask({
            ...dataFormNewTask,
            [event.target.name]: event.target.value
        })
    }

    const submitFormNewTask = (event)=>{
        event.preventDefault();
        setTasks([...Tasks, ...[dataFormNewTask]])
    }

    const deleteTask = (event)=>{
        if(event.target.id){
            setTasks(Tasks.filter(item => item !== Tasks[event.target.id]));
        }
    }

    return (
        <IntlProvider  messages={Dictionary} locale={idiom} defaultLocale='en'>
            <Languages changeLanguage={changeLanguage} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5">
                        <FormNewTask dictionary={Dictionary} submitFormNewTask={submitFormNewTask} handleInputChange={handleInputChange} />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <ListTask dictionary={Dictionary} Tasks={Tasks} deleteTask={deleteTask} />
                    </div>
                </div>
            </div>
        </IntlProvider>
    )
}

export default AppCrud;