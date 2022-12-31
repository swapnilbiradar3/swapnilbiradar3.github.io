import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <section>
        <div>
          <footer
            id="sticky-footer"
            className="flex-shrink-0 footerstyling py-3 text-white-50"
          >
            <div className="container text-center fontstyling">
              <small>Copyright &copy; Swapnil Biradar</small>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default Footer;
