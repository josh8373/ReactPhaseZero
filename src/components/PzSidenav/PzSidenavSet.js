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
  SideNavItem,
} from 'carbon-components-react';
import './_pz-sidenavSet.scss';



function PzSidenavSet(props) {

  return (
  <div>
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <SideNav className="SideNav"
          aria-label="Side navigation"
          isRail
          isChildOfHeader= "false"
          expanded={isSideNavExpanded}
          onOverlayClick={onClickSideNavExpand}>
            <SideNavItems className="SideNavItems">
              <SideNavMenuItem className="SideMenuItem" href={props.link}>
                {props.icon}
                {props.title}
              </SideNavMenuItem>
            </SideNavItems>
        </SideNav> 
        
      )
      }
    />
  </div>
  );
};

export default PzSidenavSet








// function PzSidenavSet(props) {
//   return (
//   <div>
//     <HeaderContainer
//       render={({ isSideNavExpanded, onClickSideNavExpand }) => (
//         <SideNav className="SideNav"
//           aria-label="Side navigation"
//           isRail
//           isChildOfHeader= "false"
//           expanded={isSideNavExpanded}
//           onOverlayClick={onClickSideNavExpand}>
//             <SideNavItems className="SideNavItems">
//               <SideNavMenuItem className="SideMenuItem">Hello World</SideNavMenuItem>
//               <SideNavMenuItem className="SideMenuItem">Hello World</SideNavMenuItem>
//               <SideNavMenuItem className="SideMenuItem">Hello World</SideNavMenuItem>
//               <SideNavMenuItem className="SideMenuItem">Hello World</SideNavMenuItem>
//               <SideNavMenuItem className="SideMenuItem">Hello World</SideNavMenuItem>
//               <SideNavMenuItem className="SideMenuItem" href={props.link}>
//                 {props.icon}
//                 {props.title}
//               </SideNavMenuItem>
//             </SideNavItems>
//         </SideNav> 
        
//       )
//       }
//     />
//   </div>
//   );
// };

// console.log(SideNav,"AQW");

// export default PzSidenavSet
