import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "~/components/nav-documents"
import { NavMain } from "~/components/nav-main"
import { NavSecondary } from "~/components/nav-secondary"
import { NavUser } from "~/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"

const data = {
  user: {
    name: "Admin",
    email: "tchoukeugrace@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Utilisateurs",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Profil",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Plans",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Analyses",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Contenus",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Templates",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Paramètres",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Aide",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Rechercher",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Exporter les données",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">FastProfile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
