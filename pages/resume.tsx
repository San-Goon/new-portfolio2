import {languages, tools} from "../data";
import Bar from "../components/Bar";

const resume = () => {
    return (
        <div className="px-6 py-2">
            <div className=" grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">안양대학교</h5>
                        <p className="font-semibold">전기전자공학과(2014-2021)</p>
                        <p className="my-3">어쩌고저쩌고</p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experiences</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">경력</h5>
                        <p className="font-semibold">경력</p>
                        <p className="my-3">어쩌고저쩌고</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Languages & Frameworks
                    </h5>
                    <div className="my-2">
                        {languages.map((language) => (
                                <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Tools & Softwares
                    </h5>
                    <div className="my-2">
                        {tools.map((tool) => (
                            <Bar data={tool} key={tool.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume;
