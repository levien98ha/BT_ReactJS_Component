import React, {Component} from 'react';
import './decriptionTopRight.css';

class DecriptionTopRight extends Component{
    render(){
        return(
            <div className="decriptionTopRight">
                <p className="decription1">Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng từ FullStack Station bạn nhé !</p>
                <input type="text" placeholder="TÊN CỦA BẠN" className="input1"></input><br/>
                <input type="text" placeholder="EMAIL CỦA BẠN" className="input2"></input><br/>
                <input type="checkbox" className="checkbox"></input>
                <p className="p1">Đồng ý nhận tin</p>
                <input type="button" className="buttonTop" value="Đăng ký"></input>
                <p className="decription2">Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không spam vì mình cũng rất ghét :)</p>
                <br/>
            </div>
        );
    }
}
export default DecriptionTopRight;