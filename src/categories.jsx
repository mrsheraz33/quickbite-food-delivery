import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup, TbBowlChopsticks } from "react-icons/tb";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";

const categories = [
    {
        id: 1,
        name: "All", // <-- quotes lagaye
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 3,
        name: "soups",
        icon: <TbSoup className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 4,
        name: "pasta",
        icon: <TbBowlChopsticks className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 5,
        name: "main_course",
        icon: <FaUtensils className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id: 7,
        name: "burger",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-500" />
    }
];

export default categories;
