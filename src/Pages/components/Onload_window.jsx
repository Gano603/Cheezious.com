import { FaLocationCrosshairs } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setaddWindow, setcity, setsubcity } from "../../features/States/StatesSlice";


const Onload_window = () => {

    const cities = useSelector(state => state.cities)
    const disp = useDispatch();
    const { city , subcity} = useSelector(state => state.State) || null;
    const handler = () => {
        disp(setaddWindow(false))
        const expirationTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `Location=${JSON.stringify({city,subcity})}; expires=${expirationTime.toUTCString()}; path=/`;

    }

    return (
        <>
            <div id="window" className='absolute inset-0 bg-black bg-opacity-25 z-30 backdrop-blur-md'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='bg-white w-[30rem] py-4 px-5 rounded-xl'>
                        <div className='flex justify-center w-full'><img className='w-28 h-28 rounded-md' src="/assets/img/1649325481.webp" alt="Cheeziious Logo" /></div>
                        <div className='mx-2 flex flex-col items-center'>
                            <h3 className='my-2 font-semibold'>Select your Order Type</h3>
                            <span className='py-2 px-4 font-semibold bg-yellow-400 rounded-full'>Delivery</span>
                        </div>
                        <div className='mx-2 flex flex-col items-center'>
                            <h3 className='my-2 font-semibold'>Select your location</h3>
                            <span className='py-2 px-4 text-xs bg-gray-200 hover:bg-red-600 hover:text-white cursor-pointer rounded-full flex items-center'><FaLocationCrosshairs className='mr-1 text-lg' />Use current location</span>
                        </div>
                        <select onChange={(e) => disp(setcity(e.target.value))} type="text" className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none mt-3 px-4' >
                            {/* eslint-disable-next-line jsx-a11y/option-has-value */}
                            <option value="" selected={true} disabled>Select your City</option>
                            {Object.keys(cities).map((ind, iter) => (
                                <option className="hover:bg-blue-800 target:bg-blue-800 hover:text-black" key={iter} value={ind}>{ind}</option>
                            ))}
                        </select>
                        <select onChange={(e) => disp(setsubcity(e.target.value))} type="text" className='border-[1px] border-slate-400 h-10 rounded-3xl w-full outline-none mt-3 px-4' >
                            {/* eslint-disable-next-line jsx-a11y/option-has-value */}
                            <option value="" selected={true} disabled>Select your Area/Region</option>
                            {city !== undefined && cities[city].map((ind, iter) => (
                                <option className="hover:bg-blue-800 target:bg-blue-800 hover:text-black" key={iter} value={ind}>{ind}</option>
                            ))}
                            {city === null && (
                                <option value={"Select"} disabled>No Options</option>
                            )}
                        </select>
                        <button onClick={handler} className='w-full py-[0.7rem] bg-[rgb(210,0,0)] rounded-3xl text-white font-semibold my-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200'>Select</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Onload_window