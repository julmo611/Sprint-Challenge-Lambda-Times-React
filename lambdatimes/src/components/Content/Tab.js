import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  console.log(props);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      if (props.tab === props.selectedTab) {
        return (
            <div className="tab active-tab" onClick={() => {props.selectTabHandler(props.tab)}}>
                {props.tab.toUpperCase()}
            </div>
            )
        } else {
            return (
            <div className="tab" onClick={() => {props.selectTabHandler(props.tab)}}>
                {props.tab.toUpperCase()}
            </div>
            )
        }
    }


Tab.propTypes = {
    tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
    tab: PropTypes.string.isRequired,
    selectedTab: PropTypes.string.isRequired,

}


// Make sure you include PropTypes on your props.

export default Tab;
