import React from 'react';
import s from './ProfileSettings.module.css'
import {FormProfileSettings} from "./FormProfileSettings/FormProfileSettings";

export const ProfileSettings = () => {

    return <div>

        <div className={s.newPostContainer}>
            <FormProfileSettings/>
        </div>
        <div className={s.posts}>
        </div>

    </div>
}



