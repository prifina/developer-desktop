/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-multi-comp */
/* global localStorage */

import React, { useEffect, useReducer, useState, useRef } from "react";
//import { useTheme } from "@blend-ui/core";
import { CssGrid, CssCell } from "@blend-ui/css-grid";

import { Box, Flex } from "@blend-ui/core";
import { useIsMountedRef } from "../lib/componentUtils";

import { useAppContext } from "../lib/contextLib";
import { API, Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import { StyledBox, StyledBackground } from "../components/DefaultBackground";
import { PrifinaLogo } from "../components/PrifinaLogo";

import withUsermenu from "../components/UserMenu";

import PropTypes from "prop-types";

const Content = ({ currentUser, activeUser }) => {
  const history = useHistory();

  console.log("CURRENT USER ", currentUser);

  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    async function fetchData() {
      if (isMountedRef.current) {
      }
    }

    fetchData();
  }, [isMountedRef, currentUser.id]);

  return (
    <React.Fragment>
      <StyledBox>
        <PrifinaLogo />
        <StyledBackground />
      </StyledBox>
    </React.Fragment>
  );
};

Content.propTypes = {
  currentUser: PropTypes.object,
  activeUser: PropTypes.object,
};

const Home = props => {
  const history = useHistory();
  const { userAuth, currentUser, isAuthenticated, mobileApp } = useAppContext();

  console.log("HOME ", currentUser);

  const userData = useRef(null);

  const [initClient, setInitClient] = useState(false);
  const activeUser = useRef({});

  return (
    <>
      {initClient && (
        <Content
          currentUser={userData.current}
          activeUser={activeUser.current}
        />
      )}
      {!initClient && (
        <div>Home {isAuthenticated ? "Authenticated" : "Unauthenticated"} </div>
      )}
    </>
  );
};

Home.displayName = "Home";

export default withUsermenu()(Home);
