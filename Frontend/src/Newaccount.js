import React from 'react'
import './Newaccount.css';
import './Newaccres.css';
import { Link } from 'react-router-dom';

function Newaccount() {
  return (



<div class="contact_us">
  <div class="responsive-container-block container">
    <form class="form-box">
      <p class="text-blk contact-head">
      Account Application Form
      </p>
      <p class="text-blk contact-subhead">
       Fill out these basic details for creating a new bank account
      </p>
      <div class="container-block form-wrapper">
        <div class="responsive-container-block">
          <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-4">
            <p class="text-blk input-title">
              First Name
            </p>
            <input class="input" id="ijowk-4" name="FirstName"></input>
          </div>
          
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p class="text-blk input-title">
              Last Name
            </p>
            <input class="input" id="indfi-3" name="Last Name"></input>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p class="text-blk input-title">
              Email
            </p>
            <input class="input" id="ipmgh-4" name="Email"></input>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <p class="text-blk input-title">
              Phone No.
            </p>
            <input class="input" id="imgis-4" name="PhoneNumber"></input>
          </div>
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-4">
            <p class="text-blk input-title">
              What type of account are you applying for?
            </p>
            <textarea class="textinput" id="i5vyy-4" placeholder="Account Type..."></textarea>
          </div>
        </div>
        <button class="submit-btn">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  )
}
export default Newaccount