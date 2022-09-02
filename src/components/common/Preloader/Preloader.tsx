import './Loading.css'

export const Preloader = () => {
    return (
        <div className="loaderContainer">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}