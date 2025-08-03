import { useContext } from "react";
import { SidebarContext } from "../../../ctx/SidebarContext";
import './styles/nextPrev.css';

const NextPrev = () => {
    const { nextPrev } = useContext(SidebarContext)

    console.log(nextPrev)

    return (
        <div className="next-prev">
            {nextPrev[0] && (
            <a className="prev" href={encodeURIComponent(nextPrev[0])}>
                <span className="arrow-navi">chevron_left</span>
                <div>
                    <span className="head">Previous</span>
                    <span className="name">{nextPrev[0]}</span>
                </div>
            </a>)}
            {nextPrev[1] && (
            <a className="next" href={encodeURIComponent(nextPrev[1])}>
                <div>
                    <span className="head">Next</span>
                    <span className="name">{nextPrev[1]}</span>
                </div>
                <span className="arrow-navi">chevron_right</span>
            </a>)}
        </div>
    )
}

export default NextPrev;