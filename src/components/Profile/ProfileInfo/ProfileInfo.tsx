import {updateStatus} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Preloader} from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type ProfileInfo = {
    //profile: null | ProfileType
    //profile: ProfileType
    //status: string
    //status: string
    updateStatus?: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfo) => {
    const profile = useSelector<AppStateType>(state => state.profilePage.profile)
    const status = useSelector<AppStateType>(state => state.profilePage.status)
    const largePhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.large)
    const smallPhoto = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)
    const fullName = useSelector((state: AppStateType) => state.profilePage.profile?.fullName)
    const aboutMe = useSelector((state: AppStateType) => state.profilePage.profile?.aboutMe)
    const lookingForAJob = useSelector((state: AppStateType) => state.profilePage.profile?.lookingForAJob)
    const vk = useSelector((state: AppStateType) => state.profilePage.profile?.contacts.vk)


    if (!profile) {
        return <Preloader/>
    }
    return (<div>
        <div>
            <img src={largePhoto}/>
            <br/>Name: {fullName}
            <br/>About me: {aboutMe}
            <br/>Contacts: {vk}
            <br/>Looking for a job? {lookingForAJob ? 'Yes' : 'No'}
            <ProfileStatusWithHooks status={status} updateStatus={props.updateStatus}/>
        </div>
    </div>)
}
