import React from "react";
import {useFormik} from "formik";
import s from "./FormProfileSettings.module.css";
import {ProfileType, updateProfile} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type PropsType = {
    // onSubmit: (values: string) => void
}

type FormikErrorType = {
    message?: string
}



export const FormProfileSettings: React.FC<PropsType> = (props) => {


    const dispatch = useDispatch()
    //const profile :ProfileType = useSelector<AppStateType>(state => state.profilePage.profile);
    const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)


        const formik = useFormik({
            initialValues: {
                userId: 14702,
                aboutMe: '',
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: fullName,
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: '',
                },
                photos: {
                    small: '',
                    large: '',
                }
            },
            // validate: async (values) => {
            //     const errors: FormikErrorType = {};
            //     if (!values.message) {
            //         errors.message = 'Message is required';
            //     }
            //     return errors;
            // },
            onSubmit: async values => {
                console.log(values)
                //props.onSubmit(values)
                const obj = {
                    aboutMe: "12121212",
                    contacts: {
                        facebook: '',
                        github: '',
                        instagram: '',
                        mainLink: '',
                        twitter: '',
                        vk: '',
                        website: '',
                        youtube: '',
                    },
                    fullName: 'null',
                    lookingForAJob: true,
                    lookingForAJobDescription: 'null',
                    photos: {
                        large: 'null',
                        small: 'null'
                    },
                    userId: 14702
                }
                dispatch(updateProfile(values))
                formik.resetForm()
            },
        })


        return (
            <div className={s.wrapper}>
                <div className={s.title}>Изменить данные профиля</div>
                <form className={s.form} onSubmit={formik.handleSubmit}>

                    <input {...formik.getFieldProps('fullName')} name="fullName" placeholder={'FullName'}
                           className={`${s.input} ${formik.errors.fullName && s.textareaError}`}/>
                    {formik.touched.fullName && formik.errors.fullName &&
                        <div className={s.error}>{formik.errors.fullName}</div>}

                    <input {...formik.getFieldProps('aboutMe')} name="aboutMe" placeholder={'AboutMe'}
                           className={`${s.input} ${formik.errors.aboutMe && s.textareaError}`} required/>
                    {formik.touched.aboutMe && formik.errors.aboutMe &&
                        <div className={s.error}>{formik.errors.aboutMe}</div>}

                    <input {...formik.getFieldProps('facebook')} name="contacts.facebook" placeholder={'Facebook URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('github')} name="contacts.github" placeholder={'Github URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('instagram')} name="contacts.instagram" placeholder={'Instagram URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('vk')} name="contacts.vk" placeholder={'Vk URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('website')} name="contacts.website" placeholder={'Website URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('youtube')} name="contacts.youtube" placeholder={'Youtube URL'}
                           className={`${s.input}`}/>

                    <input {...formik.getFieldProps('lookingForAJobDescription')} name="lookingForAJobDescription"
                           placeholder={'lookingForAJobDescription'}
                           className={`${s.input}`} required/>

                    <input type="checkbox" {...formik.getFieldProps('lookingForAJob')} name="lookingForAJob"
                           placeholder={'lookingForAJob'}
                           className={`${s.input}`}/> <span>lookingForAJob</span>


                    <div className={s.buttonWrapper}>
                        <button type="submit" className={s.button}>Отправить</button>
                    </div>
                </form>
            </div>
        );
    }
;
