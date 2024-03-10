import { useState, useCallback,useEffect } from "react";
import useAPI from "../../../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import useFirestorage from "../../../Hooks/OTHER/useFirestorage";

const EditEducation = () => {
  const api = useAPI();
  const [institutionName, setInstitutionName] = useState("");
  const [input, setInput] = useState([]);
  const [degreeLevel, setDegreeLevel] = useState([]);
  const [startDateSchool, setStartDateSchool] = useState("");
  const [endDateSchool, setEndDateSchool] = useState("");
  const [gpa, setGpa] = useState("");
  const [certifications, setCertifications] = useState([]);
  const [univercity, setUnivercity] = useState("");
  const [school, setSchool] = useState("");
  const [updateimg, setUpdateImg] = useState();
  const [image, setImage] = useState();
  const upload = useFirestorage();
  const url = upload.imageUrl

  const handleEnterDegreeEvent = (e) => {
    if (e.key == "Enter") {
      setDegreeLevel([...degreeLevel, input]);
      e.target.value = "";
    }
  };

  const handleEnterCertificationEvent = (e) => {
    if (e.key == "Enter") {
      setCertifications([...certifications, input]);
      e.target.value = "";
    }
  };

  const handleSubmit = useCallback(async () => {

    const id = Cookies.get("id");
    const data = await api.patchREQUEST("updateDetails", "users", id, {
      education: [
        {
          univercity,
          school,
          degreeLevel,
          startDateSchool,
          endDateSchool,
          institutionName,
          gpa,
          certifications
        },
      ],
    });
  }, [
    institutionName,
    degreeLevel,
    startDateSchool,
    endDateSchool,
    gpa,
    certifications,
    univercity,
    school,
  ]);

  const handleInput3 =  useCallback(async (event) => {
  const upldateFile=event.target.files[0].name;
    const file = "VISHALA_GAJERA_RESUME (1).pdf";
    await upload.handleUpdate(file,upldateFile, '/ApplicationsResume');
        // await upload.Upload(event.target.files[0].name);
} , []); 
  useEffect(() => {
    setImage(url);
  }, [url])


  return (
    <div className="card container   w-100  bg-body-secondary cardContainer">
      <div className='d-flex justify-content-between align-align-items-center  '>
        <span className="mt-2 fs-2 mb-3 fw-bold " >Edit Education Details</span>
        <span><i className='fa fa-close fs-2 mt-2 fw-bold'></i></span>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="" className="form-label" > Univercity :</label>
          <input type="text" className="form-control " placeholder="Univercity" required name="univercity" onChange={(e) => setUnivercity(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">School :</label>
          <input type="text" className="form-control " placeholder="school " required name="school" onChange={(e) => setSchool(e.target.value)} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">Degree Level :</label>
          <input type="text" placeholder="degreeLevel-must be comma(,) separated" className="form-control" name="degreeLevel" onChange={(e) => setDegreeLevel(e.target.value)} onKeyUp={(e) => handleEnterDegreeEvent(e)} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="" className="form-label">Start Date School :</label>
          <input type="date" placeholder="Start Date School" className="form-control" name="startDateSchool" onChange={(e) => setStartDateSchool(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">End Date School :</label>
          <input type="date" placeholder="End Date School" className="form-control" name="endDateSchool" onChange={(e) => setEndDateSchool(e.target.value)} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">Institution Name :</label>
          <input type="text" placeholder="institutionName-must be comma(,) separated" className="form-control" name="institutionName" onChange={(e) => setInstitutionName(e.target.value)} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">GPA :</label>
          <input type="text" placeholder="gpa-must be comma(,) separated" className="form-control" name="gpa" onChange={(e) => setGpa(e.target.value)} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">Certifications :</label>
          <input type="text" placeholder="certifications-must be comma(,) separated" className="form-control" name="certifications" onChange={(e) => setCertifications(e.target.value)} onKeyUp={(e) => handleEnterCertificationEvent(e)} />
        </div>
      </div>
      <input
        type="file"
        required={true}
        className={"form-control"}
        onChange={(e) => handleInput3(e)}
      />
      <button type="Submit" value="Submit" className="btn btn-info w-25 mb-3" data-mdb-ripple-init onClick={() => handleSubmit()}>Save</button>
      {/* <button type='Submit' value="Submit" className="btn btn-info w-25 mb-3" data-mdb-ripple-init onClick={() => handleUpdateFile()}>Update Image</button> */}
    </div>
  );
}

export default EditEducation;