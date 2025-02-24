import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
    IconHome,
    IconSettings,
    IconSearch,
    IconUser,
    
  } from "@tabler/icons-react";

const dockItems = [
    {
      title: "Home",
      href: "/",
      icon: <IconHome />,
    },
    {
      title: "Search",
      href: "/search",
      icon: <IconSearch />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <IconUser />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <IconSettings />,
    }
    
  ];

const FLoatingDock = () => {
  return (
    <div>
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed top-12 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </div>
  )
}

export default FLoatingDock
