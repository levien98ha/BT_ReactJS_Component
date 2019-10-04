import React, {Component} from 'react';
import Block from './blockCard/block';
import './leftCard.css';
import Block1 from './Block1.jpg';
import Block2 from './Block2.jpg';
import Block3 from './Block3.jpg';
import Block4 from './Block4.jpeg';
import Block5 from './Block5.png';


class LeftCard extends Component {
   /* constructor(props){
        super(props);
        this.state ={
            titleCard: this.props.titleCard,
            urlCard: this.props.urlCard,
            postByCard: this.props.postByCard,
            postDateCard: this.props.postDateCard,
            postDecriptionCard:  this.props.postDecriptionCard
        }
    }*/
    render(){
        return(
            <div className="containerLeftCard">
                <div className="Block">
                <Block
                     titleBlock="HƯỚNG DẪN HỌC REACT JS" 
                     urlBlock={Block1} postByBlock="Nguyễn Lê Viễn" 
                     postDateBlock="Th5 03.10.2019" 
                     postDecriptionBlock="Hướng dẫn học ReactJs sao cho hiệu quả! Nếu bạn mới làm quen với React (hoặc phần front-end nói chung) thì bạn sẽ thấy. . . . ."/>
                </div>
                <div className="Block">
                <Block 
                     titleBlock="HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT" 
                     urlBlock={Block2} postByBlock="PepperMint" 
                     postDateBlock="Th6 04.10.2019" 
                     postDecriptionBlock="Sau một thời gian tìm hiểu và áp dụng rất hiệu quả. Hôm nay mình sẽ chia sẻ với các bạn cấu trúc thư mục và cách viết . . . . ."/>
                </div>
                <div className="Block">
                <Block 
                     titleBlock="HƯỚNG DẪN CÀI ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6" 
                     urlBlock={Block3} postByBlock="Chocomint" 
                     postDateBlock="Th7 05.10.2019" 
                     postDecriptionBlock="Trên trang chủ của React Js thì các mã ví dụ đều được viết bằng ES5, mặc dù viết bằng ES5 hay ES6 thì đều tuỳ thuộc vào . . . . ."/>
                </div>
                <div className="Block">
                <Block 
                     titleBlock="HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG ỨNG DỤNG REACT" 
                     urlBlock={Block4} postByBlock="__tteo" 
                     postDateBlock="CN 06.10.2019" 
                     postDecriptionBlock="Câu hỏi: Khi nào thì nên sử dụng Application State (Redux Store), khi nào thì nên sử dụng Local State khi áp dụng Redux cho. . . . ."/>
                </div>
                <div className="Block">
                <Block 
                     titleBlock="VÒNG ĐỜI CỦA COMPONENT TRONG REACTJS ES6" 
                     urlBlock={Block5} postByBlock="グエン　レー　ヴィエン" 
                     postDateBlock="Th2 07.10.2019" 
                     postDecriptionBlock="Có thể nói, khái niệm component trong React là một trong những thành phần quan trọng nhất của React. Do vậy, việc hiểu rõ . . . . ."/>
                </div>
            </div>
        );
    }
}

export default LeftCard;