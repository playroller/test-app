import { Link } from "react-router-dom";

const link = ({link, text, fsize=20}) => {
  return (
    <Link to={link} style={{fontSize: {fsize}}}>{text}</Link> 
  );
}

export default link