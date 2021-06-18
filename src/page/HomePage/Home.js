import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { get_Permits } from "../../redux/actions/index";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Home = () => {
  const dispatch = useDispatch();

  const getPermits = useSelector((state) => state.getPermits);
  const { loading, error, data } = getPermits;

  useEffect(() => {
    dispatch(get_Permits());
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
        <button onClick={() => dispatch(get_Permits())}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="container-fluid main px-0">
      <section className="sub1">
        <h1 className="main-text">Welcome to Chicago City Permits</h1>
      </section>
      <section className="sub2">
        <div className="sub2-main">
          <h2 className="text1">Dashboard</h2>
          <h2 className="text2">Welcome, John Doe</h2>
        </div>
        {/* MAIN SECTION */}
        <div className="content">
          <h6 className="board">Chicago City Permits</h6>

          {/* DATA */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Permit Type</th>
                <th>Review Type</th>
                <th>Street Name</th>
                <th>Contact Type</th>
                <th>Contact Name</th>
                <th>Contact City</th>
                <th>Contact State</th>
              </tr>
            </thead>
            <tbody>
              {loadingView}
              {errorView}
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <NavLink to={`/chicago/${item.id}`}>{item.id}</NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.permit_type}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.review_type}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.street_name}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.contact_1_type}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.contact_1_name}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.contact_1_city}
                    </NavLink>
                  </td>

                  <td>
                    <NavLink to={`/chicago/${item.id}`}>
                      {item.contact_1_state}
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Home;
