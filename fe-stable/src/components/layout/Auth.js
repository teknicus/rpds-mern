import React from "react";
import Qr from "../functional/Qr";

function Auth() {
  return (
    <div>
      <div className="row card-offset">
        <div className="col m8 l8 offset-m2 offset-l2">
          <div className="card  authBox">
            <div className="center">
              <span className="card-title">Scan Ration ID...</span>

              <div className="center container">
                <div className="col m3 l3 center offset-m2 offset-l2">
                  <Qr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
