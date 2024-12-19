import {Button} from "@/components/ui/button";
import Loader from "@/components/global/loader";
import {ActiveAutomation} from "@/icons/active-automation";

type Props = {}

const ActivateAutomationButton = (props: Props) => {
    // WIP: Setup optimistic ui
    // WIP: Fetch some automation data

    return (
        <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80
            text-white rounded-full from-[#9C27B0] font-medium to-[#0E001A]
            ml-4
        ">
            <Loader state={false}>
                <ActiveAutomation />
                <p className="lg:inline hidden">
                    Activate
                </p>
            </Loader>
        </Button>
    )
}

export default ActivateAutomationButton