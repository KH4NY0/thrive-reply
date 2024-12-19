import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import {Button} from "@/components/ui/button";

type Props = {
    label: string;
    current: 'PRO' | 'FREE';
    landing?: boolean;
};

const PaymentCard = ({ current, label, landing }: Props) => {
    return (
        <div
            className={cn(
                label !== current
                    ? 'bg-in-active'
                    : 'bg-gradient-to-r from-purple-900 via-purple-500 to-purple-100',
                'p-[2px] rounded-xl overflow-hidden'
            )}
        >
            <div
                className={cn(
                    landing && 'radial--gradient--pink',
                    'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90'
                )}
            >
                {landing ? (
                    <h2 className="text-2xl">
                        {label === 'PRO' && 'Premium Plan'}
                        {label === 'FREE' && 'Standard'}
                    </h2>
                ) : (
                    <h2 className='text-2xl'>
                        {label === current
                            ? 'Your Current Plan'
                            : current === 'PRO'
                                ? 'Downgrade'
                                : 'Upgrade'
                        }
                    </h2>
                )}

                <p className="text-text-secondary text-sm mb-2">
                    Focus on content creation and let us take of the rest
                </p>

                {label === 'PRO' ? (
                    <span className="bg-gradient-to-r text-3xl from-purple-900 via-purple-500 to-purple-100 bg-clip-text text-transparent">
                        Smart AI
                    </span>
                ) : (
                    <p className="font-bold mt-2 text-text-secondary">
                        Standard
                    </p>
                )}

                {label === 'PRO' ? (
                    <p className="mb-2">
                        <b className="text-xl">$15</b>/month
                    </p>
                ) : (
                    <p className="text-xl mb-2">Free</p>
                )}

                {label === 'PRO' ? (
                    [
                        'All features from the Free Plan',
                        'AI-powered response generation',
                        'Advanced analytics and insights',
                        'Priority customer support',
                        'Custom branding options'
                    ].map((i) => (
                        <div key={i} className="flex items-center gap-2 mt-2 text-text-secondary">
                            <CheckIcon className="text-purple-700 w-5 h-5"/>
                            <span>{i}</span>
                        </div>
                    ))
                ) : (
                    [
                        'Boost engagement with target responses',
                        'Automate comment replies to enhance audience interaction',
                        'Turn followers into customers with targeted messaging'
                    ].map((i) => (
                        <div key={i} className="flex items-center gap-2 mt-2 text-text-secondary">
                            <CheckIcon className="text-purple-700 w-5 h-5"/>
                            <span>{i}</span>
                        </div>
                    ))
                )}

                {landing ? (
                        <Button
                            className={cn(
                                'rounded-full mt-5',
                                label === 'PRO'
                                    ? 'bg-gradient-to-r from-purple-900 text-white via-purple-500 to-purple-100'
                                    : 'bg-background-80 text-white hover:text-background-80'
                            )}
                        >
                            {label === current
                                ? 'Get Started'
                                : current === 'PRO'
                                ? 'Free'
                                :  'Get Started'
                            }
                        </Button>
                    ) : (
                        <Button
                            className="rounded-full mt-5 bg-background-80 text-white
                                hover:text-background-80
                            "
                            disabled={label === current}
                        >
                            {label === current
                                ? 'Active'
                                : current === 'PRO'
                                ? 'Downgrade'
                                :  'Upgrade'
                            }
                        </Button>
                )}
            </div>
        </div>
    );
};

export default PaymentCard;