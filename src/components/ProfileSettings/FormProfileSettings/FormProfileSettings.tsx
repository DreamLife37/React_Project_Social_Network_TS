import React from "react";
import {Field, useFormik} from "formik";
import s from "./FormProfileSettings.module.css";
import {updateProfile} from "../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, Nullable} from "../../../redux/redux-store";
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {}

type FormikErrorType = {
    facebook?: string
    aboutMe?: string
    fullName?: string
    lookingForAJobDescription?: string
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
                aboutMe: aboutMe ,
                lookingForAJob: lookingForAJob as Nullable<boolean>,
                lookingForAJobDescription: lookingForAJobDescription,
                fullName: fullName,
                isFollowed: null,
                contacts: {
                    github: github,
                    vk: vk,
                    facebook: facebook,
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

                if (!values.fullName) {
                    errors.fullName = 'Поле обязательно';
                }
                if (!values.aboutMe) {
                    errors.aboutMe = 'Поле обязательно';
                }
                if (!values.lookingForAJobDescription) {
                    errors.lookingForAJobDescription = 'Поле обязательно';
                }
                return errors;
            },
            onSubmit: async values => {
                // @ts-ignore
                dispatch(updateProfile(values))
                formik.resetForm()
            },
        })

        return (
            <div className={s.wrapper}>
                <div className={s.title}>Изменить данные профиля</div>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <label htmlFor="fullName">Фамилия Имя</label>
                    <input {...formik.getFieldProps('fullName')} name="fullName" placeholder={'Фамилия Имя'}
                           className={`${s.input} ${formik.errors.fullName && s.textareaError}`} value={formik.initialValues.fullName ||''}/>
                    <div className={s.error}>{formik.touched.fullName && formik.errors.fullName &&
                        <div className={s.error}>{formik.errors.fullName}</div>}</div>

                    <label htmlFor="AboutMe">Обо мне</label>
                    <input {...formik.getFieldProps('aboutMe')} name="aboutMe" placeholder={'Обо мне'}
                           className={`${s.input} ${formik.errors.aboutMe && s.textareaError}`} value={formik.initialValues.aboutMe ||''}/>
                    <div className={s.error}>  {formik.touched.aboutMe && formik.errors.aboutMe &&
                        <div className={s.error}>{formik.errors.aboutMe}</div>}</div>

                    <label htmlFor="facebook">Ссылка на профиль в Facebook</label>
                    <input {...formik.getFieldProps('contacts[facebook]')} name="contacts.facebook"
                           placeholder={'Facebook URL'}
                           className={`${s.input}`} value={formik.initialValues.contacts.facebook ||''}/>
                    <div className={s.error}> {formik.touched.contacts?.facebook && formik.errors.contacts?.facebook &&
                        <div className={s.error}>{formik.errors.contacts.facebook}</div>}</div>

                    <label htmlFor="github">Ссылка на профиль в Github</label>
                    <input {...formik.getFieldProps('contacts.github')} name="contacts.github" placeholder={'Github URL'}
                           className={`${s.input}`} value={formik.initialValues.contacts.github ||''}/>
                    <div className={s.error}>  {formik.touched.contacts?.github && formik.errors.contacts?.github &&
                        <div className={s.error}>{formik.errors.contacts?.github}</div>}</div>

                    <label htmlFor="instagram">Ссылка на профиль в Instagram</label>
                    <input {...formik.getFieldProps('contacts.instagram')} name="contacts.instagram"
                           placeholder={'Instagram URL'}
                           className={`${s.input}`}
                           value={formik.initialValues.contacts.instagram ||''}/>
                    <div className={s.error}></div>

                    <label htmlFor="vk">Ссылка на профиль в Вконтакте</label>
                    <input {...formik.getFieldProps('contacts.vk')} name="contacts.vk" placeholder={'Vk URL'}
                           className={`${s.input}`}
                           value={formik.initialValues.contacts.vk ||''}/>
                    <div className={s.error}></div>

                    <label htmlFor="website">Ссылка на ваш сайт</label>
                    <input {...formik.getFieldProps('contacts.website')} name="contacts.website" placeholder={'Website URL'}
                           className={`${s.input}`} value={formik.initialValues.contacts.website ||''}/>
                    <div className={s.error}></div>

                    <label htmlFor="youtube">Ссылка на профиль в Youtube</label>
                    <input {...formik.getFieldProps('contacts.youtube')} name="contacts.youtube" placeholder={'Youtube URL'}
                           className={`${s.input}`} value={formik.initialValues.contacts.youtube ||''}/>
                    <div className={s.error}></div>

                    <label htmlFor="lookingForAJobDescription">Информация для работодателя</label>
                    <input {...formik.getFieldProps('lookingForAJobDescription')} name="lookingForAJobDescription"
                           placeholder={'Информация для работодателя'}
                           className={`${s.input}`}
                           value={formik.initialValues.lookingForAJobDescription ||''}/>
                    <div
                        className={s.error}> {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                        <div className={s.error}>{formik.errors.lookingForAJobDescription}</div>}</div>

                    <input type="checkbox" {...formik.getFieldProps('lookingForAJob')} name="lookingForAJob"
                           placeholder={'Ищу работу'} checked={formik.initialValues.lookingForAJob || false}
                    /> <span className={s.searchJob}>Ищу работу</span>


                    <div className={s.buttonWrapper}>
                        <button type="submit" className={s.button}>Сохранить изменения</button>
                    </div>
                </form>
            </div>
        );
    }
;
