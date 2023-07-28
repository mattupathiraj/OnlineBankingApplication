import React from 'react'
import './Faq.css';
import { Link } from 'react-router-dom';

function Faq() {
  return (


<main>

  <section class="faq">
    <h1>Frequently Asked Questions</h1>

    <div class="faq-container">
      <details class="faq-box" open>
        <summary class="faq-header">
          Sed accumsan nulla ut dui hendrerit?
        </summary>
        <div class="faq-content">
          <p>
            Nullam quis justo in lectus consequat
            facilisis ac et nibh. Fusce faucibus augue
            id nibh vestibulum nec.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
          Suspendisse volutpat nunc vestibulum?
        </summary>
        <div class="faq-content">
          <p>
            Sed accumsan nulla ut dui hendrerit, et
            cursus risus placerat. Praesent accumsan
            lectus vitae suscipit condimentum.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
          Suspendisse volutpat nunc vestibulum?
        </summary>
        <div class="faq-content">
          <p>
            Sed accumsan nulla ut dui hendrerit, et
            cursus risus placerat. Praesent accumsan
            lectus vitae suscipit condimentum.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header">
          Suspendisse volutpat nunc vestibulum?
        </summary>
        <div class="faq-content">
          <p>
            Sed accumsan nulla ut dui hendrerit, et
            cursus risus placerat. Praesent accumsan
            lectus vitae suscipit condimentum.
          </p>
        </div>
      </details>
      
      <details class="faq-box">
        <summary class="faq-header">
          Mauris ultrices aliquam lacinia?
        </summary>
        <div class="faq-content">
          <p>
            Integer tristique augue diam, eget ultrices
            nisi vehicula a. Curabitur vulputate arcu
            nec orci laoreet iaculis.
          </p>
        </div>
      </details>
    </div>
  </section>

</main>
  )
}
export default Faq