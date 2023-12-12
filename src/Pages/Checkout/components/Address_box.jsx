import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setaddress } from "../../../features/States/StatesSlice";



const Address_box = ({setaddWindow}) => {

    const disp = useDispatch();
    const {city,subcity} = useSelector(state => state.State) || null;


    return (
        <>
            <div className='absolute inset-0 bg-black bg-opacity-25 z-30 backdrop-blur-md'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='bg-white w-[38rem] py-4 px-5 rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <span>Add New Address</span>
                            <span onClick={() => setaddWindow(false)} className='p-2 bg-gray-500 text-white cursor-pointer rounded-md'><ImCross /></span>
                        </div>
                        <div className='mx-2 h-max'>
                            <h3 className='my-2'>Address (with Post code if applicable)</h3>
                            <input type="text" onChange={(e) => disp(setaddress(e.target.value))} placeholder='Enter your complete street address' className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none px-4' />
                        </div>
                        <div className='mx-2 h-max'>
                            <h3 className='my-2'>Area/City</h3>
                            <input disabled value={`${subcity},${city}`} type="text" placeholder='Enter your Area/City' className='border-[1px] border-slate-400 h-10 text-gray-500 bg-gray-200 rounded-3xl w-full outline-none px-4' />
                        </div>
                        <span className='text-sm text-gray-500'>To change your area/region, please do it from top header location button</span>
                        <button onClick={() => setaddWindow(false)} className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>Save Address</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Address_box