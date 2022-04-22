import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Contact = () => {
    return (
        <div className='contact'>
            <div className='head'>
                <h1>Contact</h1>
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
                            <h4>Phone</h4>
                            <p><b>For Work: </b> 0965740920</p><b>Free Support Call: </b> 0965740920
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
                            <h4>Address</h4>
                            <p> No: 268 Ly Thuong Kiet Street,<br></br>Dist.10, Ho Chi Minh City.</p>
                        </div>
                    </li>

                </ul>



                <div class="contact-form-section">
                    <h2> Contact Form </h2>
                    <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form">
                        <input type="hidden" name="form_type" value="contact"></input>
                        <input type="hidden" name="utf8" value="✓"></input>
                        <label for="ContactFormName" class="label--hidden">Name</label>
                        <input type="text" id="ContactFormName" class="input-full" name="contact[name]" placeholder="Name" autocapitalize="words" value=""></input>
                        <label for="ContactFormEmail" class="label--hidden">Email</label>
                        <input type="email" id="ContactFormEmail" class="input-full" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" value=""></input>
                        <label for="ContactFormPhone" class="label--hidden">Phone</label>
                        <input type="tel" id="ContactFormPhone" class="input-full" name="contact[phone]" placeholder="Phone" pattern="[0-9\-]*" value=""></input>
                        <label for="ContactFormMessage" class="label--hidden">Message</label>
                        <textarea rows="10" id="ContactFormMessage" class="input-full" name="contact[body]" placeholder="Message"></textarea>
                        <button type="submit" class="btn">
                            Send
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