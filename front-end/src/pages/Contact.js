import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Contact = () => {
    return (
        <div className='contact'>
            <div className='head'>
                <h1>Liên hệ</h1>
                <button className="btn-buy">Mua ngay</button>
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



                <div class="contact-form-section">
                    <h2> Thông tin phản hồi </h2>
                    <form method="post" id="contact_form" className="contact-form">
                        <input type="hidden" name="form_type" value="contact"></input>
                        <input type="hidden" name="utf8" value="✓"></input>
                        <label for="ContactFormName" class="label--hidden">Name</label>
                        <input type="text" id="ContactFormName" class="input-full" name="contact[name]" placeholder="Name" autocapitalize="words" ></input>
                        <label for="ContactFormEmail" class="label--hidden">Email</label>
                        <input type="email" id="ContactFormEmail" class="input-full" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" ></input>
                        <label for="ContactFormPhone" class="label--hidden">Phone</label>
                        <input type="tel" id="ContactFormPhone" class="input-full" name="contact[phone]" placeholder="Phone" pattern="[0-9\-]*" ></input>
                        <label for="ContactFormMessage" class="label--hidden">Message</label>
                        <textarea rows="10" id="ContactFormMessage" class="input-full" name="contact[body]" placeholder="Message"></textarea>
                        <button type="submit" class="btn">
                            Gửi     
                        </button>
                    </form>
                </div>
            </div>
            <MessengerCustomerChat
                pageId="489402087935358"
                appId="5133363563418615"
            />
        </div>

    );
};

export default Contact;