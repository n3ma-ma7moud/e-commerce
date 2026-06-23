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
import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
    return (
        <nav className="bg-white shadow py-4">
            <div className="container mx-auto  font-semibold flex flex-col md:flex-row items-start md:items-center ps-4 md:ps-0 justify-between">
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
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <UserIcon className='size-6' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <Link href="/profile">
                                            <DropdownMenuItem>Profile</DropdownMenuItem>
                                        </Link>
                                        <Link href="/my-orders">
                                            <DropdownMenuItem>My Orders</DropdownMenuItem>
                                        </Link>
                                        <Link href="/login">
                                            <DropdownMenuItem>Login</DropdownMenuItem>
                                        </Link>
                                        <Link href="/register">
                                            <DropdownMenuItem>Register</DropdownMenuItem>
                                        </Link>
                                        
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>
                            <NavigationMenuItem >
                                <NavigationMenuLink asChild >
                                    <Link href="/cart"><ShoppingCartIcon className='size-6 text-inherit' /></Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
