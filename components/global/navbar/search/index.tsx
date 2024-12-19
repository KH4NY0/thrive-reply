import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

type Props = {}

const Search = (props: Props) => {
    return (
        <div className="hidden lg:flex overflow-hidden gap-x-2 border-[1px]
            border-[#7851A9] rounded-full px-4 py-1 items-center flex-1
        ">
            <SearchIcon color="#7851A9" />
            <Input
                placeholder="Search by name, email or status"
                className="border-none outline-none ring-0 focus:ring-0 flex-1"
            />
        </div>
    )
}

export default Search