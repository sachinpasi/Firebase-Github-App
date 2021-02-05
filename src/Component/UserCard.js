import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img className="img-thumbnail" alt="" src={user.avatar_url} />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-info">
          AVAILABLE FOR HIRE : {user.hireable ? "Yes" : "Nope"}
          <div className="text-info">Followers : {user.followers}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
