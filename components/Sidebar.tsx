import {AiFillGithub} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {GiTie} from "react-icons/gi"

const Sidebar = () => {
    return (
        <div>
            <img src={""} alt={"Image"} className={"w-32 h-32 mx-auto rounded-full"} />
        <h3 className={"my-4 text-3xl font-medium tracking-wider"}><span>조</span> 강훈</h3>
            <p className={"px-2 py-1 my-3 bg-gray-200 rounded-full"}>Front-end Developer</p>
            <a className={"flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"} href={""} download={"name"}><GiTie className={"w-6 h-6"} />Download Resume</a>
            <div className={"flex justify-around my-5 text-green-500 w-9/12 mx-auto md:w-full"}>
                <a href={""}>
                    <AiFillGithub className={"w-8 h-8 cursor-pointer"} />
                </a>
            </div>
            <div className={"py-4 my-5 bg-gray-200"} style={{marginLeft:"-1rem", marginRight:"-1rem"}}>
                <div className={"flex items-center justify-center space-x-2"}>
                    <GoLocation />
                    <span>경기도 고양시</span>
                </div>
                <button className={"focus:outline-none"}
                        onClick={() => {window.open("mailto:tigerlove95@naver.com")}}>
                    <p className={"my-2"}>tigerlove95@naver.com</p>
                </button>
                <p className={"my-2"}>+82 1066112574</p>
            </div>
            <button className={"bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"}>Toggle</button>
        </div>
    )
}

export default Sidebar;
