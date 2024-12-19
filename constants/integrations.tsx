import {InstagramDuoToneBlue, SalesForceDuoToneBlue} from "@/icons";
import React from "react";

type Props = {
    title: string
    icon: React.ReactNode
    description: string
    strategy: 'INSTAGRAM'
}

export const INTEGRATIONS_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description:
        'Streamline your social media communication.',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM',
    }

]