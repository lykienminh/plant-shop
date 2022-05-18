import React, { useState, useEffect } from "react";
import axios from "axios";
import 'antd/dist/antd.min.css';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Contact = () => {
    const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")


	const handleChangeName = (e) => {
        console.log(e.target.value)
		setName(e.target.value)
	}

    const handleChangePhone = (e) => {
		setPhone(e.target.value)
	}

    const handleChangeEmail = (e) => {
		setEmail(e.target.value)
	}

    const handleChangeMessage = (e) => {
        console.log(e.target.value)
		setMessage(e.target.value)
	}

    const handleSubmit = (values) => {
        console.log(values)
		var data = new FormData();
        
        data.append("subject", "Request from: " + name + " - " + phone);
        data.append("message", message);
        data.append("receive_email", "dannh.cse@gmail.com");
        axios({
            method: "post",
            url: "/mail/send",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              console.log(response);
            });
	};

    return (
        <div className='contact'>
            <div className='head'>
                <h1>Liên hệ</h1>
                <button className="btn-buy" type="button">Liên hệ ngay</button>
            </div>
            <div className="layout-type left_iconblock_form_inline">

                <ul className="dt-contact-iconblock-section dt-sc-column three-column">

                    <li className="dt-contact-icon-block">

                        <div class="dt-contact-icon-image">
                            <i className="fa">
                                <FontAwesomeIcon icon={faPhone} />
                            </i>
                        </div>

                        <div class="dt-contact-icon-content">
                            <h4>Liên hệ</h4>
                            <p><b>Hợp tác: </b> 0965740920</p><b>Hỗ trợ: </b> 0965740920
                        </div>
                    </li>


                    <li class="dt-contact-icon-block">

                        <div class="dt-contact-icon-image">
                            <i className="fa">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                        </div>

                        <div class="dt-contact-icon-content">
                            <h4>Email</h4>
                            <p>
                                <a title="garden-info@hcmut.edu.vn" href="mailto:garden-info@hcmut.edu.vn">garden-info@hcmut.edu.vn</a><br></br>
                                <a title="garden-support@hcmut.edu.vn" href="mailto:garden-support@hcmut.edu.vn">garden-support@hcmut.edu.vn</a>
                            </p>
                        </div>
                    </li>


                    <li class="dt-contact-icon-block">

                        <div class="dt-contact-icon-image">
                            <i className="fa">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </i>
                        </div>

                        <div class="dt-contact-icon-content">
                            <h4>Địa chỉ</h4>
                            <p> <b>Số: </b> 268 Lý Thường Kiệt,<br></br>Phường 14, Quận 10, TP.Hồ Chí Minh.</p>
                        </div>
                    </li>

                </ul>

                <div className='contact-form-map'>
                    <div class="contact-form-section">
                        <h2> Thông tin phản hồi </h2>
                        <form id="contact_form" className="contact-form" onSubmit={handleSubmit} >
                            <input type="hidden" name="form_type" value="contact"></input>
                            <input type="hidden" name="utf8" value="✓" ></input>
                            <label for="ContactFormName" class="label--hidden">Name</label>
                            <input type="text" id="ContactFormName" class="input-full" name="name" placeholder="Name" autocapitalize="words" onChange={e => setName(e.target.value)}></input>
                            <label for="ContactFormEmail" class="label--hidden">Email</label>
                            <input type="email" id="ContactFormEmail" class="input-full" name="email" placeholder="Email" autocorrect="off" autocapitalize="off" onChange={e => setEmail(e.target.value)}></input>
                            <label for="ContactFormPhone" class="label--hidden">Phone</label>
                            <input type="tel" id="ContactFormPhone" class="input-full" name="phone" placeholder="Phone" pattern="[0-9\-]*" onChange={e => setPhone(e.target.value)}></input>
                            <label for="ContactFormMessage" class="label--hidden">Message</label>
                            <textarea rows="10" id="ContactFormMessage" class="input-full" name="body" placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
                            <button type="submit" class="btn">
                                Gửi
                            </button>
                        </form>
                    </div>
                    <div class="contact-form-section">
                        <h2 class="faq-title">Câu hỏi thường gặp</h2>
                        <Collapse accordion>
                            <Panel header="Cách chăm sóc cây cảnh" key="2">
                                <p>Trước tiên thay mặt đội ngũ công ty nói riêng và cộng đồng nói chung, cám ơn bạn đã góp phần làm
                                xanh không gian. Để giúp quá trình phát triển cây cảnh tốt hơn dưới đây Web xin chia sẻ một số kinh
                                nghiệm chăm sóc.</p>
                                <p>Hãy click vào loại cây mà bạn muốn chăm sóc:</p>
                                <p>– Chăm sóc cây cảnh văn phòng ( Cây cảnh trong nhà )</p>
                                <p>– Chăm sóc cây thủy sinh</p>
                                <p>– Chăm sóc xương rồng và sen đá</p>
                            </Panel>
                            <Panel header="Các quy định về chính sách đổi hàng" key="3">
                                <p>Quý khách được quyền đổi hàng ngay khi nhận hàng vì các lý do sau:</p>
                                <p> - Sản phẩm bị hư hỏng do quá trình vận chuyển (dập lá, gãy lá); hoặc các trường hợp sai kiểu dáng, sai màu chậu, sai kích thước, nhầm sản phẩm do lỗi
                                    nhà cung cấp.</p>
                                <p>- Trường hợp cây cảnh của Web cung cấp cho quý khách nhưng trong thời gian một tuần mà cây có
                                    những dấu hiệu xuống cấp, bị bệnh… thì quý khách cứ yên tâm, vẫn được đổi lại.</p>
                                <p>Yêu cầu đối với sản phẩm đổi:</p>
                                <p>- Đổi sản phẩm theo ý muốn khách hàng. Sản phẩm đổi phải có giá trị tương đương hoặc cao hơn giá trị hàng đã
                                    mua trước đó.</p>
                                <p>- *Công ty chịu hoàn toàn chi phí cho việc đổi hàng này.</p>
                            </Panel>
                            <Panel header="Các quy định về chính sách trả hàng" key="4">
                                <p>Quý khách được quyền trả hàng ngay khi nhận hàng vì các lý do sau:</p>
                                <p>- Hàng không đúng chất lượng cam kết</p>
                                <p>- Hàng giao nhầm kích thước, nhầm sản phẩm hoặc hư hỏng do lỗi của công ty</p>
                                <p>Các mặt hàng không được trả:</p>
                                <p>- Chúng tôi không nhận trả các mặt hàng được tặng kèm hoặc khuyến mãi</p>
                                <p>- Chúng tôi không nhận trả các mặt hàng bạn đã trồng hay làm hư bầu.</p>
                                <p>* Quý khách vui lòng tham khảo phí gửi hàng lần 2 bên dưới</p>
                            </Panel>
                            <Panel header="Các quy định về phí gửi hàng lần 2" key="5">
                                <p>Nếu việc đổi hàng xuất phát từ phía Khách hàng (đổi chủng loại cây khác, đổi loại khác,…):</p>
                                <p>- Áp dụng theo bảng Phí Giao hàng của bên đối tác Giao Hàng Nhanh.</p>
                                <p>- Khách hàng được trả tiền lại hoặc phải bù thêm tiền chênh lệch.</p>
                                <p>Nếu việc đổi hàng do lỗi của Web: miễn phí gửi hàng lần 2</p>
                                <p>- Các trường hợp gửi trả phát sinh từ Quý Khách hàng khi đặt hàng sẽ không được hoàn trả lại bất cứ chi phí nào.</p>
                                <p>- Sau khi xác nhận sản phẩm gửi trả đã nhập kho, chúng tôi sẽ tiến hành hoàn tiền cho Quý Khách.</p>
                            </Panel>
                            <Panel header="Hướng dẫn Hủy đơn đặt hàng" key="6">
                                <p>Quý Khách có thể hủy đơn đặt hàng khi hàng vẫn còn trong trạng thái “Sản phẩm đang được chuẩn bị” hoặc liên hệ
                                sớm nhất với hotline bán hàng 0965.740.920 để được hỗ trợ.</p>
                                <p>Hoàn tiền tùy theo phương thức thanh toán khi hủy đơn đặt hàng:</p>
                                <p>Thanh toán bằng cách chuyển khoản: tất cả đều được hoàn lại bằng hình thức chuyển khoản</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
            {/* <MapBox></MapBox> */}
            {/* <MessengerCustomerChat
                pageId="489402087935358"
                appId="5133363563418615"
            /> */}
        </div >

    );
};

export default Contact;