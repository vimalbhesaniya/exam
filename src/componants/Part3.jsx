import React from 'react'

const Part3 = () => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="container">
            <div className=" d-flex justify-content-between mb-2">
              <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Followers 320</p>
              <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }}>Following  340</p>
              <p className="" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} >Connections 340</p>
            </div>
            <div className=" d-flex justify-content-between mb-2">
              <button type="button" className="btn bgbtn">Edit profile</button>
              <button type="button" className="btn bgbtn ms-1">Upload resume</button>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="mb-4 mb-lg-0">
              <div className=" d-flex justify-content-between flex-wrap  mb-2">
                <div className="col-md-6">
                  <p className="text-muted  fs-5"  >Personal address :</p>
                  <p className="">citylight vesu ,dumas road</p>
                </div>
                <div className="col-md-6">
                  {/* <p className="text-muted  fs-5" >Langauge known</p> */}
                  <div className="">
                    <div className="row">
                      <span className="fs-5 text-muted">Skills :</span>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >React js </p>
                      </div>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Node js </p>
                      </div>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >Html </p>
                      </div>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >CSS</p>
                      </div>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >javasript </p>
                      </div>
                      <div className="col">
                        <p className="text-info bg-secondary-subtle p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >C++ </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Part3