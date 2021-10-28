/** @format */

import PropTypes from "prop-types";
import Button from './Button'

const Header = ({ title, sat, showAdd }) => {
   


 return(
    <header className='header'>
      <h1 >{title}</h1>
      <Button color={showAdd ?'red': 'green'} text = {showAdd ?'Close': 'Add'} onClick={sat} />
      
    </header>
  )
}


Header.defaultProps = {
  title: "Task Tracker",
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
