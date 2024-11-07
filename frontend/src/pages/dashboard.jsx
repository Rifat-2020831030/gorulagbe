import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
("use client");
// import Link from 'next/link'
import {
  Avatar,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from "keep-react";
import {
  ChartPie,
  CheckSquare,
  Gear,
  HouseLine,
  Lifebuoy,
  MagnifyingGlass,
  PresentationChart,
  Stack,
  Users,
} from "phosphor-react";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar>
        <SidebarBody>
          {/* <Link href="/" className="inline-flex items-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-metal-900 dark:bg-metal-800 text-heading-6 font-semibold text-white">
            K.
          </span>
        </Link> */}
          <fieldset className="relative">
            <Input placeholder="Search" className="ps-11" />
            <InputIcon>
              <MagnifyingGlass size={19} color="#AFBACA" />
            </InputIcon>
          </fieldset>
          <SidebarList>
            <SidebarItem>
              <HouseLine size={20} />
              House
            </SidebarItem>
            <SidebarItem>
              <PresentationChart size={20} />
              Dashboard
            </SidebarItem>
            <SidebarItem>
              <Stack size={20} />
              Projects
            </SidebarItem>
            <SidebarItem>
              <CheckSquare size={20} />
              Tasks
            </SidebarItem>
            <SidebarItem>
              <ChartPie size={20} />
              Reporting
            </SidebarItem>
            <SidebarItem>
              <Users size={20} />
              Users
            </SidebarItem>
            <SidebarItem>
              <Lifebuoy size={20} />
              Support
            </SidebarItem>
            <SidebarItem>
              <Gear size={20} />
              Settings
            </SidebarItem>
          </SidebarList>
        </SidebarBody>
        <SidebarFooter>
          <Avatar img="/images/avatar/avatar-1.png" alt="avatar" />
          <div>
            <p className="text-body-4 font-medium text-metal-400 dark:text-white">
              Enzo Farnandez
            </p>
            <p className="text-body-4 font-normal text-metal-300 dark:text-metal-400">
              enzo123@gmail.com
            </p>
          </div>
        </SidebarFooter>
      </Sidebar>
      <Footer />
    </>
  );
}

export default Dashboard;
