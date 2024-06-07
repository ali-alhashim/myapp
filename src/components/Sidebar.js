import * as React from "react"
import {
  
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerFooter,
  NavDrawerHeader,
  NavDrawerHeaderNav,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup
} from "@fluentui/react-nav-preview"

import {
  
  useId
} from "@fluentui/react-components"
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  HeartPulse20Filled,
  HeartPulse20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  People20Filled,
  People20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  BuildingHome20Filled,
  BuildingHome20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  Settings20Filled,
  Settings20Regular,
  Person20Filled,
  Person20Regular,
  LaptopPerson20Filled,
  LaptopPerson20Regular,
  Laptop20Filled,
  Laptop20Regular,
  bundleIcon
} from "@fluentui/react-icons"

import { useState } from "react"
const Laptop = bundleIcon(Laptop20Filled,Laptop20Regular)
const LaptopPerson = bundleIcon(LaptopPerson20Filled ,LaptopPerson20Regular)
const Person = bundleIcon(Person20Filled, Person20Regular);
const BuildingHome = bundleIcon(BuildingHome20Filled,BuildingHome20Regular)
const Dashboard = bundleIcon(Board20Filled, Board20Regular)
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular)
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular)
const PerformanceReviews = bundleIcon(PreviewLink20Filled, PreviewLink20Regular)
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular)
const Interviews = bundleIcon(People20Filled, People20Regular)
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular)
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular)
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular)
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular)
const Reports = bundleIcon(DocumentBulletListMultiple20Filled, DocumentBulletListMultiple20Regular)
const Settings = bundleIcon(Settings20Filled, Settings20Regular)

export const Sidebar = ({isOpen}) => {
 

  const labelId = useId("type-label")
  const [type, setType] = useState("inline")

  return (
      <>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue="1"
        open={isOpen}
        type={type}
      >
        <NavDrawerHeader>
          <NavDrawerHeaderNav>
          
          </NavDrawerHeaderNav>
        </NavDrawerHeader>
        <NavDrawerBody>
          <NavSectionHeader>Home</NavSectionHeader>
          <NavItem href="" icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
          <NavItem
            href=""
            icon={<Announcements />}
            value="2"
          >
            Announcements
          </NavItem>
        
          <NavItem icon={<Search />} href="" value="4">
            Tasks 
          </NavItem>
          <NavItem
            icon={<PerformanceReviews />}
            href=""
            value="5"
          >
            Performance Reviews
          </NavItem>

          <NavSectionHeader>HR Management</NavSectionHeader>
          <NavCategory value="6">
            <NavCategoryItem icon={<JobPostings />}>
              Jobs
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="" value="7">
               Job Offers
              </NavSubItem>
              <NavSubItem href="" value="8">
               Job Contracts
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavItem icon={<Interviews />} value="9">
            Interviews
          </NavItem>

          <NavItem icon={<TrainingPrograms />} value="15">
            Training Programs
          </NavItem>
         

          <NavSectionHeader>Insurances</NavSectionHeader>
          <NavItem icon={<HealthPlans />} value="10">
            Health Insurance
          </NavItem>

          <NavItem icon={<BuildingHome />} value="90">
          Property Insurance
          </NavItem>

          <NavSectionHeader>IT</NavSectionHeader>
          <NavItem icon={<Laptop />} value="55">
          IT Assets List
          </NavItem>
          <NavItem icon={<LaptopPerson />} value="505">
          IT Assets Users
          </NavItem>


          <NavSectionHeader>Procurements</NavSectionHeader>
         
          <NavCategory value="16">
            <NavCategoryItem icon={<CareerDevelopment />}>
              Suppliers
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem href="" value="17">
              Suppliers List
              </NavSubItem>
              <NavSubItem href="" value="118">
              Suppliers Quotations
              </NavSubItem>

              <NavSubItem href="" value="18">
              Procurements Invoices
              </NavSubItem>

              <NavSubItem href="" value="80">
              Purchase Orders
              </NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavSectionHeader>Analytics</NavSectionHeader>
          <NavItem target="_blank" icon={<Analytics />} value="19">
            Workforce Data
          </NavItem>
          <NavItem href="" icon={<Reports />} value="20">
            Reports
          </NavItem>
        </NavDrawerBody>
        <NavDrawerFooter>
          <NavItem value="21" href="" icon={<Person />}>
            Profile
          </NavItem>
          <NavItem icon={<Settings />} href="" value="24">
            App Settings
          </NavItem>
        </NavDrawerFooter>
      </NavDrawer>
      </>
      





  )
}
