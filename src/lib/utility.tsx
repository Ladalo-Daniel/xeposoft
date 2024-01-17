import React from "react"
import { Book, BookAIcon, BookCheckIcon, BookIcon, Building2, LayoutDashboardIcon, LucideUsers2, Plus, PodcastIcon, Settings, Settings2, User, User2, Users, Users2Icon } from 'lucide-react'


export const side_bar_links: {
    href: string,
    icon: React.JSX.Element,
    activeIcon?: React.JSX.Element,
    tooltip: string,
    hidden?: boolean
  }[] = [
    {
      href: "/dashboard",
      icon: <LayoutDashboardIcon size={18}/>,
      activeIcon: <LayoutDashboardIcon size={18} />,
      tooltip: "Dashboard",
    },
    {
      href: "/dashboard/create-blog",
      icon: <PodcastIcon size={18}/>,
      activeIcon: <PodcastIcon size={18} />,
      tooltip: "Create blog",
    },
    {
      href: "/dashboard/profile",
      icon: <User size={18} />,
      activeIcon: <User2 size={18} />,
      tooltip: "Profile",
    },
  ]
  