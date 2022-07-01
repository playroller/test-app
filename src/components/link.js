import { Link } from "react-router-dom";

/*
link: ページへのURL
text: リンクを表示するときの文字列
style: スタイル
 */
const link = (props) => {
  return (
    <Link to={props.link} style={props.linkStyle}>{props.text}</Link> 
  );
}

export default link