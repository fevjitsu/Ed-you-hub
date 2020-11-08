import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="m-3 p-3">
        <Link to="/">
          <Button variant="contained" color="secondary" size="large">
            <HomeIcon />
          </Button>
        </Link>
        <div className="display-4">Whoops how did you get here?</div>
      </div>
    </div>
  );
}
