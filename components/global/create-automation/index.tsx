import { Button } from "@/components/ui/button"
import Loader from "@/components/global/loader";
import {Activity} from "lucide-react";

type Props = {}

const CreateAutomation = (props: Props) => {
    // WIP: Create the automation in the database using mutate
    return (
        <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white
            rounded-full from-[#9C27B0] font-medium to-[#0E001A]
        ">
            <Loader state={false}>
                <Activity />
                <p className="lg:inline hidden">Create an Automation</p>
            </Loader>
        </Button>
    )
}

export default CreateAutomation