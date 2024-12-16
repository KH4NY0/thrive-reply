import React from 'react'
import Sidebar from "@/components/global/sidebar";
import Navbar from "@/components/global/navbar";

type Props = {
    children: React.ReactNode
    params: { slug: string }
}

export default async function Layout({ children, params }: Props) {
    // Query
    // WIP: Query client & fetch data

    return (
        <div className="p-3">
            {/* Sidebar */}
            <Sidebar slug={params.slug} />
            {/* Navigation */}
            <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex
                flex-col overflow-auto
            ">
                <Navbar slug={params.slug} />
            </div>
        </div>
    );
}