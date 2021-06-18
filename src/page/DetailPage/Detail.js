import React, { useEffect } from "react";
import "./Detail.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_Permit_Detail } from "../../redux/actions/index";
import Spinner from "react-bootstrap/Spinner";
// FaLongArrowAltLeft;

const Detail = ({ match, history }) => {
  const dispatch = useDispatch();
  const getPermitDetail = useSelector((state) => state.getPermitDetail);
  const { loading, error, data } = getPermitDetail;
  useEffect(() => {
    dispatch(get_Permit_Detail(match.params.id));
  }, []);

  let loadingView = null;
  let errorView = null;
  if (loading) {
    loadingView = (
      <div className="spin mx-auto">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    errorView = (
      <div>
        <h6>{error}</h6>
        <button onClick={() => dispatch(get_Permit_Detail(match.params.id))}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid  main px-0">
      <section className="sub1">
        <h1 className="main-text">Welcome to Chicago City Permits</h1>
      </section>
      <section className="sub2">
        <div className="sub2-main">
          <h2 className="text1">Dashboard</h2>
          <h2 className="text2">Welcome, John Doe</h2>
        </div>
        <div className="content-main">
          <NavLink to="/">
            <FaLongArrowAltLeft className="icon-back" />
          </NavLink>
          {loadingView}
          {errorView}
          <h6 className="detail-text">
            {data.street_number},&nbsp;{data.street_name},&nbsp;
            {data.contact_1_city},&nbsp;{data.contact_1_state}
          </h6>

          <div className="more">
            <h6 className="single-detail">
              Permit Type : <span> {data.permit_type}</span>
            </h6>
            <h6 className="single-detail">
              Review Type : <span> {data.review_type}</span>
            </h6>
            <h6 className="single-detail">
              Issue Date : <span> {data.issue_date}</span>
            </h6>
            <h6 className="single-detail">
              Work Description : <span> {data.work_description}</span>
            </h6>
            <h6 className="single-detail">
              Contact Name : <span> {data.contact_1_name}</span>
            </h6>
            <h6 className="single-detail">
              Contact Type : <span> {data.contact_1_type}</span>
            </h6>
          </div>
        </div>
      </section>
      {/* DETAIL */}
    </div>
  );
};

export default Detail;
