import React from 'react';
import PzSidenavSet from "./PzSidenavSet"
import PzSidenavItems from './PzSidenavItems'


function PzSidenav() {
  const NavComponents = PzSidenavItems.map(item => <PzSidenavSet key={item.id} title={item.title} icon={item.icon} link={item.link}/>)
// console.log(NavComponents,"AQW");
  return(
    <div>
      {NavComponents}
    </div>
  )
  }
export default PzSidenav;






 