import React from "react";

interface Props {
    id: string
}

export const PostSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'like':
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                    d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"/>
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

        default:
            return <svg></svg>
            break
    }

}