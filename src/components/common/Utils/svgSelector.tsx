import React from "react";

interface Props {
    id: string
}

export const SvgSelector = ({id}: Props) => {
    switch (id) {
        case 'like':
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="#000000">
                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
            </svg>
        case 'prev':
            return <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                <title>Previous</title>
                <path
                    d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm35.31 292.69a16 16 0 11-22.62 22.62l-96-96a16 16 0 010-22.62l96-96a16 16 0 0122.62 22.62L206.63 256z"/>
            </svg>
        case 'next':
            return <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                <title>Next</title>
                <path
                    d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z"/>
            </svg>
        case 'end':
            return <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                <title>In the end</title>
                <path
                    d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 272a16 16 0 01-32 0v-53l-111.68 67.44a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31L304 245v-53a16 16 0 0132 0z"/>
            </svg>
        case 'start':
            return <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                <title>To the beginning</title>
                <path
                    d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-64a16 16 0 0132 0v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0z"/>
            </svg>
        case 'actionPost':
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
        case 'delete':
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
            </svg>
        case 'edit':
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                        fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
            </svg>
        case 'searchJob':
            return <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px"
                        fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
        case 'settings':
            return <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px"
                        fill="#FFFFFF">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
        case 'logout':
            return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="36px"
                        viewBox="0 0 24 24" width="36px"
                        fill="#FFFFFF">
                <g>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                </g>
                <g>
                    <path
                        d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/>
                </g>
            </svg>
        case 'login':
            return <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="36px"
                        viewBox="0 0 20 20" width="36px"
                        fill="#FFFFFF">
                <g>
                    <rect fill="none" height="20" width="20" x="0"/>
                </g>
                <g>
                    <path d="M10,4v1h6v10h-6v1h6c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H10z"/>
                    <polygon points="9.5,6.5 8.79,7.21 11.09,9.5 3,9.5 3,10.5 11.09,10.5 8.79,12.79 9.5,13.5 13,10"/>
                </g>
            </svg>


        default:
            return <svg></svg>
            break
    }

}