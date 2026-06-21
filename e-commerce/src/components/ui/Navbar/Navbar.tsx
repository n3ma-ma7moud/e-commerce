import React from 'react'
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ShoppingCartIcon } from 'lucide-react'


export default function Navbar() {
    return (
        <nav className="bg-white shadow py-4">
            <div className="container mx-auto  font-semibold flex items-center justify-between">
                <h2 className="text-2xl">
                    <Link href={'/'}>Shopmart</Link>
                </h2>
                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>

                            <NavigationMenuItem >
                                <NavigationMenuLink asChild >
                                    <Link href="/products">Products</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild >
                                    <Link href="/brands">Brands</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild >
                                    <Link href="/categories">Categories</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
                <div className="">
                    <NavigationMenu>
                        <NavigationMenuList>
                    <NavigationMenuItem >
                        <NavigationMenuLink asChild >
                            <Link href="/cart"><ShoppingCartIcon className='size-6 text-inherit'  /></Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
