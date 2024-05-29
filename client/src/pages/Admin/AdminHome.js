import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            As an Admin, I hold the critical responsibility of managing and
            maintaining the integrity of our platform. My role allows me to
            oversee and control various aspects of user accounts, including
            donors, hospitals, and organizations. Given the sensitive nature of
            our work, it is essential to ensure that all registered entities
            adhere to our standards and guidelines. One of my key duties is to
            monitor the activities and interactions of these users. In
            situations where an account violates our policies or exhibits
            suspicious behavior, I have the authority to delete such accounts.
            This action is taken to protect the community, maintain trust, and
            ensure that the platform remains a safe and reliable resource for
            everyone involved. Furthermore, my role requires me to make swift
            and decisive actions during emergencies or critical situations.
            Whether it’s removing a fraudulent donor account, deactivating a
            hospital’s profile that no longer meets our criteria, or suspending
            an organization that engages in unethical practices, my decisions
            are driven by the need to uphold the platform's integrity and
            functionality. Overall, as an Admin, my ability to delete any donor,
            hospital, or organization account as needed is crucial in
            maintaining a trustworthy and efficient system, ensuring that our
            services are delivered effectively and ethically to all users
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
