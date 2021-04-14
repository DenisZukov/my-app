import React from 'react';

class Tabs extends React.Component{
  render(){
    return(
    <div>
    <div>
       <ul className="nav nav-tabs">
       {
         this.props.tabs.map(tab => {
           const active = (tab=== this.props.selected ? 'active': '');
           return(
             <li className="nav-item" >
             <a className={"nav-link"+ active } onClick={ () =>this.props.setSelected(tab)}>
                    {tab}
             </a>
             </li>
           );
         })
       }

       </ul>
       {this.props.children}
    </div>
  </div>
    );
  }
}
export default Tabs;
