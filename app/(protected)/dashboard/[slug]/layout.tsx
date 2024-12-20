import React from 'react'
import Sidebar from "@/components/global/sidebar";
import Navbar from "@/components/global/navbar";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query"
import {PrefetchUserAutomations, PrefetchUserProfile} from "@/react-query/pre-fetch";

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

export default async function Layout({ children, params }: Props) {
    // Query
    // WIP: Query client & fetch data

    const query = new QueryClient()

    await PrefetchUserProfile(query)

    await PrefetchUserAutomations(query)

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="p-3">
                {/* Sidebar */}
                <Sidebar slug={params.slug}/>
                {/* Navigation */}
                <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex
                flex-col overflow-auto
            ">
                    <Navbar slug={params.slug}/>
                    {children}
                </div>
            </div>
        </HydrationBoundary>
    );
}