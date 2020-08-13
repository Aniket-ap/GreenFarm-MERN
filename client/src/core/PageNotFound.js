import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container page-not-found_container">
      <section className="page-not-found">
        <div className="row">
          <div className="col-md-6 col-md-offset-1">
            <div className="page-not-found-main">
              <h2>
                <i class="material-icons">build</i>
              </h2>
              <p>
                Oops!, looks like something went very wrong. Our technical team
                has been notified.
              </p>

              <h4 className="heading-primary">
                You can click <a href="mailto:pradhan091@gmail.com">here</a> to
                send us a message or <Link to="/">go back to the homepage</Link>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
