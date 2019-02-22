import React from 'react';
import uuidv4 from 'uuid'
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = props => {
  console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map( tab => {
          return <Tab 
            selectTabHandler={props.selectTabHandler}
             selectedTab={props.selectedTab} 
             tab={tab}
             key={uuidv4()} />
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedTab: PropTypes.string.isRequired
}


// Make sure to use PropTypes to validate your types!
export default Tabs;
