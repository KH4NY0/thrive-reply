import PaymentButton from "@/components/global/payment-button";

type Props = {}

const UpgradeCard = (props: Props) => {
    return (
        <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
            <span className="text-sm">
                Upgrade to {''}
                <span className="bg-gradient-to-r
                    from-[#9C27B0] font-bold to-[#9C27B0]
                    bg-clip-text text-transparent
                ">
                    Smart AI
                </span>
            </span>
            <p className="text-[#9B9CA0] font-light text-sm">
                Unlock all features <br /> including AI and more
            </p>
            <PaymentButton />
        </div>
    )
}

export default UpgradeCard