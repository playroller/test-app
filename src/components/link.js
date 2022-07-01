import { Link } from "react-router-dom";

/*
link: ページへのURL
text: リンクを表示するときの文字列
fsize: フォントサイズ
 */
const link = ({link, text, fsize=20}) => {
  return (
    <Link to={link} style={{fontSize: {fsize}}}>{text}</Link> 
  );
}

export default link