import React, { useState, useEffect } from "react";

import getAdminPanel from "../_services/user.service";

const AdminPanel = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getAdminPanel().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default AdminPanel;