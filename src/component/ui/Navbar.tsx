import { useState } from "react"
import { Button } from "./Button"
import { RemoveIcon } from "../../icons/RemoveIcon";

export const Navbar = () => {
    const [ add, setAdd ] = useState(true);

    return <div className="absolute h-screen z-8 w-screen bg-[#254f1a]">
        {/* advertize page */}
        {add && <div className="relative z-10 h-10 w-full bg-[#e9c0e9] flex justify-center items-center font-bold text-[#3c1941]">
            <p>NEW: Grow your income with all new monetization tools on Linktree. Learn More</p>
            <p onClick={() => setAdd(false)}
                className="absolute right-2"><RemoveIcon /></p>
        </div>}
        {/* Navigation bar */}
        <div className="w-11/12 flex rounded-full mt-3 bg-[#ffffff] m-auto text-md">
            <img className="h-6 ml-10 flex my-auto" src="src/assets/image/linktree.svg" alt="brading_image" />

           <div className="p-6">
           <ul className="relative flex ml-16 mr-18 gap-2 font-medium">
                <li className="hover:bg-gray-200 px-3 py-2 rounded-lg">Products</li>
                <li className="hover:bg-gray-200 px-3 py-2 rounded-lg">Templates</li>
                <li className="hover:bg-gray-200 px-3 py-2 rounded-lg">Marketplace</li>
                <li className="hover:bg-gray-200 px-3 py-2 rounded-lg">Learn</li>
                <li className="hover:bg-gray-200 px-3 py-2 rounded-lg">Pricing</li>
            </ul>
           </div>

           <div className="relative w-full flex justify-end items-center pr-4 font-extrabold">
             <ul className="flex gap-4">
                <li>
                    <Button varient="primary" size="sm" bgColor="bg-gray-200" text="Log in" />
                </li>
                <li className="text-white">
                    <Button varient="secondary" size="sm" bgColor="bg-[#1e2330]" text="Sign up free" />

                </li>
            </ul>
           </div>


        </div>
    </div>
}