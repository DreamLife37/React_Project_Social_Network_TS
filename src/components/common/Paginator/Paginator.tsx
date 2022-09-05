import React, {useState} from "react";
import s from "./Paginator.module.css";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (page: number) => void
    portionSize: number
}

export const Paginator = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return <div>

        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
        <div>
            {pages.filter(p => p >= leftPortionPageNumber && p >= rightPortionPageNumber)
                .map(page => <span key={page} onClick={() => props.onPageChanged(page)}
                                   className={props.currentPage === page ? s.selectedPage : ''}>{page}</span>)}
        </div>
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}


    </div>
}

