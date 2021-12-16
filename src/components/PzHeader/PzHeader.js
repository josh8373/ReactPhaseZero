import React from 'react';

import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};


const PzHeader = () => {
  return (
  <div>

    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Phase Zero Consulting">
          
          {/*SkipToContent is for web based screen readers    */}
          <SkipToContent />

          {/* Header site name component*/}
          <HeaderNavigation aria-label="Landing Page">
            <HeaderName element={Link} to="/" prefix="IBM">
              Phase Zero
            </HeaderName>
          </HeaderNavigation>

          <HeaderNavigation aria-label="Consultant Login">
            <HeaderMenuItem element={Link} to="/consult">
              Consultant Login
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderNavigation aria-label="Client Login">
            <HeaderMenuItem element={Link} to="/client">
              Client Login
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderNavigation aria-label="User Login">
            <HeaderMenuItem element={Link} to="/user">
            User Login
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderNavigation aria-label="administration">
            <HeaderMenuItem element={Link} to="/admin">
              Administration
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderNavigation aria-label="administration">
            <HeaderMenuItem element={Link} to="/login">
              Login Page
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>


        </Header>
      )}
    />
  </div>
  );
};
 
export default PzHeader;