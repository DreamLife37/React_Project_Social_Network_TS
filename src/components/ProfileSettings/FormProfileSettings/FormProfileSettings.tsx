import React from "react";
import {useFormik} from "formik";
import s from "./FormProfileSettings.module.css";
import {ProfileType, updateProfile} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {}

type FormikErrorType = {
    facebook?: string
    aboutMe?: string
}

export const FormProfileSettings: React.FC<PropsType> = () => {

        const dispatch = useDispatch()
        const profile = useSelector<AppStateType>(state => state.profilePage.profile)
        const aboutMe = useSelector((state: AppStateType) => state.profilePage.profile?.aboutMe)
        const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)
        const id = useSelector((state: AppStateType) => state.profilePage.profile?.userId)
        const lookingForAJob = useSelector((state: AppStateType) => state.profilePage.profile?.lookingForAJob)
        const lookingForAJobDescription = useSelector((state: AppStateType) => state.profilePage.profile?.lookingForAJobDescription)
        const github = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.github)
        const vk = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.vk)
        const facebook = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.facebook)
        const instagram = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.instagram)
        const twitter = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.twitter)
        const website = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.website)
        const youtube = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.youtube)
        const mainLink = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.mainLink)
        const smallPhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)
        const largePhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.large)


        const formik = useFormik({
            enableReinitialize: true,
            initialValues: {
                userId: id,
                aboutMe: aboutMe || '',
                lookingForAJob: lookingForAJob,
                lookingForAJobDescription: lookingForAJobDescription,
                fullName: fullName,
                contacts: {
                    github: github || '',
                    vk: vk,
                    facebook: facebook || '',
                    instagram: instagram,
                    twitter: twitter,
                    website: website,
                    youtube: youtube,
                    mainLink: mainLink,
                },
                photos: {
                    small: smallPhoto,
                    large: largePhoto,
                }
            },
            validate: async (values) => {
                const errors: FormikErrorType = {};
                if (!values.contacts.facebook) {
                    errors.facebook = 'Incorrect url';
                }
                if (!values.aboutMe) {
                    errors.aboutMe = 'Field required';
                }
                return errors;
            },
            onSubmit: async values => {
                console.log(values)
                //props.onSubmit(values)

                dispatch(updateProfile(values))
                formik.resetForm()
            },
        })

        if (!profile) {
            return <Preloader/>
        }


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
                    {/*{formik.touched.contacts.facebook && formik.errors.contacts.facebook &&*/}
                    {/*    <div className={s.error}>{formik.errors.contacts.facebook}</div>}*/}

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
