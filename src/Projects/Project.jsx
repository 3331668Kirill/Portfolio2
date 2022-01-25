import React from 'react';
import css from "./Projects.module.css";



const Project = ({title, description, image, link}) => {
    return (

                <div className={css.project_element}>
                    <div className={css.ico}>
                        <img className={css.icon} src={image}/>
                    </div>
                    <a href={link} className={css.title}>{title}</a>
                    <span className={css.description}>{description}</span>
                </div>


    );
}

export default Project;