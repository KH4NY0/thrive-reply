'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from '@/components/ui/NavLink'
import CursorImage from '@/assets/images/cursor.png'
import MessageImage from '@/assets/images/message.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#' },
]

const tiers = [
    {
        name: 'Free Plan',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$0',
        description: "The perfect plan if you're just getting started with our product.",
        features: [
            'Boost engagement with target responses',
            'Automate comment replies to enhance audience interaction',
            'Turn followers into customers with targeted messaging'
        ],
        featured: false,
    },
    {
        name: 'Smart AI Plan',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$15',
        description: 'Advanced features for power users',
        features: [
            'All features from the Free Plan',
            'AI-powered response generation',
            'Advanced analytics and insights',
            'Priority customer support',
            'Custom branding options'
        ],
        featured: true,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-900 text-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center sticky justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <NavLink key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-300">
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <NavLink href="/dashboard" className="text-sm/6 font-semibold text-gray-300">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </NavLink>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto invert"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-800 to-indigo-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-500 hover:ring-gray-400">
                            Announcing our first launch.{' '}
                            <NavLink href="#" className="font-semibold text-purple-400">
                                Version 1.0.3
                            </NavLink>
                        </div>
                        <span className="relative flex h-3 w-3">
                          <span
                              className="animate-ping absolute inline-flex h-full right-2 w-full rounded-full bg-purple-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full right-2 h-3 w-3 bg-purple-600 "></span>
                        </span>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex relative">
                            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Automate. Personalize. Thrive
                            </h1>
                            <motion.div
                                className="absolute right-[565px] top-[150px] hidden sm:inline"
                                drag
                                dragSnapToOrigin
                            >
                                <Image src={CursorImage} height={200} width={200} alt="cursor image"
                                       className="max-w-none" draggable={false}/>
                            </motion.div>

                            <motion.div
                                className="absolute left-[565px] bottom-[90px] hidden sm:inline"
                                drag
                                dragSnapToOrigin
                            >
                                <Image src={MessageImage} height={200} width={200} alt="message image"
                                       className="max-w-none" draggable={false}/>
                            </motion.div>

                        </div>

                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8 relative">
                            Seamlessly manage customer interactions,
                            personalize responses, and boost your business
                            efficiency with our advanced Instagram messaging tool.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Get started
                            </a>
                            <NavLink href="#" className="text-sm/6 font-semibold text-gray-300">
                                Learn more <span aria-hidden="true">→</span>
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-800 to-indigo-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
            <div className="relative isolate bg-gray-900 text-white px-6 py-24 sm:py-32 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl transition-all duration-1000"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#6a0dad] to-[#8b00b7] opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base/7 font-semibold text-purple-400" id="pricing">Pricing</h2>
                    <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
                        Choose the right plan for you
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating
                    customer loyalty, and driving sales.
                </p>
                <div
                    className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'relative shadow-2xl transition-all duration-1000'
                                    : 'sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                                        : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                                'rounded-3xl p-8 ring-1 ring-gray-700/10 sm:p-10 transition-all duration-1000'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(tier.featured ? 'text-white' : 'text-white', 'text-base/7 font-semibold')}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
          <span
              className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-100',
                  'text-5xl font-semibold tracking-tight'
              )}
          >
            {tier.priceMonthly}
          </span>
                                <span
                                    className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}
                                >
            /month
          </span>
                            </p>
                            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-500', 'mt-6 text-base/7')}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-gray-300' : 'text-gray-400',
                                    'mt-8 space-y-3 text-sm/6 sm:mt-10'
                                )}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(tier.featured ? 'text-purple-400' : 'text-purple-600', 'h-6 w-5 flex-none')}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'bg-purple-500 text-white shadow-sm hover:bg-purple-400 focus-visible:outline-purple-500'
                                        : 'text-purple-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-purple-600',
                                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                                )}
                            >
                                Get started today
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home

