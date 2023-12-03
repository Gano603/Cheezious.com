import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const Var_tab = ({ data, variate, setvariate, req, setreq, initial }) => {

    const [selected, setselected] = useState(0);

    const variate_handler = (index, index2, iter) => {
        if (data[index].type === "radio") {
            setvariate({ ...variate, [index]: index2 })
            let r = req;
            r[iter] = false;
            setreq(r)
            setselected((prev) => prev + 1)
        }
        else {
            if (variate[index] === undefined) setvariate({ ...variate, [index]: [index2] })
            else variate[index].includes(index2) ? setvariate({ ...variate, [index]: variate[index].filter((indexx) => indexx !== index2) }) : setvariate({ ...variate, [index]: [...variate[index], index2] })
        }
    }

    const handle_require = (cond, iter) => {
        if (cond && req[iter] === false) return "Selected"
        else if (cond && req[iter] === true) return "Required"
    }

    useEffect(() => {
        if (data !== undefined) {
            Object.keys(data).map((index, iter) => {
                if (data[index].type === "check") {
                    let r = req;
                    r[iter] = false;
                    setreq(r)
                }
                else if(Object.keys(data).length === 1){
                    let r = req;
                    r[1] = false;
                    setreq(r)
                }
            })
        }
    }
    )

    return (
        <>
            {data !== undefined && Object.keys(data).map((index, iter) => (
                <div key={iter}>
                    <div onClick={() => selected === iter ? setselected(null) : setselected(iter)} className={`px-6 py-3 my-3 ${req[iter] && !initial && data[index].type === "radio" ? 'bg-red-500 text-white' : 'bg-gray-200'} rounded-3xl flex justify-between items-center`}>
                        <span className='font-semibold block'>{index}</span>
                        <div className={`w-full ${data[index].Required ? "" : "hidden"}`}><span className={`text-[0.95rem] py-1 px-2 rounded-md mx-3 ${req[iter] ? "bg-red-500" : "bg-green-500"} text-white`}>{handle_require(data[index].Required, iter)}</span></div>
                        <div className='bg-black rounded-full p-[0.15rem] mx-1'><IoIosArrowDown className={`text-white text-[0.9rem] ${selected === iter ? "rotate-180" : ""}`} /></div>
                    </div>
                    {Object.keys(data[index]).map((index2, iter2) => {
                        { if (index2 === "Required" || index2 === "type") return null }
                        { () => shit(index, iter) }

                        return (
                            <div key={iter2} className={`px-2 flex my-3 border-b-2 mx-2 border-gray-100 items-center ${selected === iter ? "" : "hidden"}`}>
                                <input onChange={() => variate_handler(index, index2, iter)} className='mx-2 h-5 w-5 text-yellow-400 cursor-pointer' type={data[index].type === "radio" ? "radio" : "checkbox"} />
                                <div className='flex justify-between items-center w-full my-2 pr-4'>
                                    <span className='text-[0.9rem]'>{index2}</span>
                                    <span className='text-gray-500 text-[0.9rem]'>{data[index][index2] === "" ? "" : "Rs."} {data[index][index2]}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ))}
        </>
    )
}

export default Var_tab