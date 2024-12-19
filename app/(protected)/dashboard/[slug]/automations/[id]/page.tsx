import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import {Warning} from "@/icons";
import TriggerComponent from "@/components/global/automations/trigger";

type Props = {
    params: { id: string }
}

//WIP: set some metadata

const Page = ({ params }: Props) => {

    //WIP: prefetch user automation data

    return (
        <div className="flex flex-col gap-y-20">
            <AutomationsBreadCrumb id={params.id} />
            <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex
                flex-col bg-[#1D1D1D] gap-y-3
            ">
                <div className="flex gap-x-2">
                    <Warning />
                    When...
                </div>
                <TriggerComponent id={params.id} />
            </div>
        </div>
    )
}

export default Page