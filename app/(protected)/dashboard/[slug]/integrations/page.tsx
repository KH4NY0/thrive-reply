import {INTEGRATIONS_CARDS} from "@/constants/integrations";
import IntegrationCard from "@/components/global/integration-card";

type Props = {}

const Integrations = (props: Props) => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
                {INTEGRATIONS_CARDS.map((card, key) => (
                    <IntegrationCard
                        key={key}
                        {...card}
                    />
                ))}
            </div>
        </div>
    )
}

export default Integrations