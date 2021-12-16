import React from 'react';
import {
  Container,
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
  SideNavRail,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

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


const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true">
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const PzSidenavcopy = () => {
  return (
  <div>

    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <SideNav
        aria-label="Side navigation"
        isRail
        expanded={isSideNavExpanded}
        onOverlayClick={onClickSideNavExpand}>
        <SideNavItems>
          
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
          </SideNavMenu>
          
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
          </SideNavMenu>
          
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              Link
            </SideNavMenuItem>
          </SideNavMenu>
          
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
        </SideNavItems>
      </SideNav>

      )
    }
    />
  </div>
  );
};

    


export default PzSidenavcopy;





        // <SideNav aria-label="Side navigation" isRail>
        // {/*SkipToContent is for web based screen readers    */}
        // <SkipToContent />
        //   <SideNavItems className="black">
        //     <SideNavLink>Home</SideNavLink>
        //     <SideNavLink>User Dashboard</SideNavLink>
        //     <SideNavLink>Now you see it</SideNavLink>
        //     <SideNavLink>Now you dont</SideNavLink>

        //     <SideNavMenu>
        //       <SideNavMenuItem href="#">Item</SideNavMenuItem>
        //     </SideNavMenu>

        //     <SideNavMenu>
        //       <SideNavMenuItem href="#">Item</SideNavMenuItem>
        //     </SideNavMenu>

        //     <SideNavMenu>
        //       <SideNavMenuItem href="#">Item</SideNavMenuItem>
        //       <SideNavMenuItem href="#">Item</SideNavMenuItem>
        //     </SideNavMenu>
        //   </SideNavItems>
        // </SideNav>



        // export const SideNavRailWHeader = withReadme(readme, () => (
//   <HeaderContainer
//     render={({ isSideNavExpanded, onClickSideNavExpand }) => (
//       <>

//         <Header aria-label="IBM Platform Name">
//           <SkipToContent />
//           <HeaderMenuButton
//             aria-label="Open menu"
//             isCollapsible
//             onClick={onClickSideNavExpand}
//             isActive={isSideNavExpanded}
//           />

//           <HeaderName href="#" prefix="IBM">
//             [Platform]
//           </HeaderName>

//           <HeaderNavigation aria-label="IBM [Platform]">
//             <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
//             <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
//             <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
//             <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
//               <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
//               <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
//               <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
//             </HeaderMenu>
//           </HeaderNavigation>



//           <SideNav
//             aria-label="Side navigation"
//             isRail
//             expanded={isSideNavExpanded}
//             onOverlayClick={onClickSideNavExpand}>
//             <SideNavItems>
//               <SideNavMenu renderIcon={Fade16} title="Category title">
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem aria-current="page" href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//               </SideNavMenu>
//               <SideNavMenu renderIcon={Fade16} title="Category title">
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem aria-current="page" href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//               </SideNavMenu>
//               <SideNavMenu renderIcon={Fade16} title="Category title">
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem aria-current="page" href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//                 <SideNavMenuItem href="javascript:void(0)">
//                   Link
//                 </SideNavMenuItem>
//               </SideNavMenu>
//               <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
//                 Link
//               </SideNavLink>
//               <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
//                 Link
//               </SideNavLink>
//             </SideNavItems>
//           </SideNav>

//         </Header>

//         <StoryContent />

//       </>

//     )}

//   />

// ));