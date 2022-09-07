import React from "react";

interface Props {
    id: string
}

export const PostSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'like':
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
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
            return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
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

        default:
            return <svg></svg>
            break
    }

}