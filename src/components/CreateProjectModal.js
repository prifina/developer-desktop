import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@blend-ui/modal";
import { Box, Button, Text, Flex, useTheme, Input } from "@blend-ui/core";

import { Radio, checkAction } from "demo-blend-ui/core";

import PropTypes from "prop-types";
import i18n from "../lib/i18n";
i18n.init();

const CreateProjectModal = ({ onClose, onButtonClick, ...props }) => {
  const theme = useTheme();

  const [dialogOpen, setDialogOpen] = useState(true);

  

  const onCloseCheck = (e, action) => {
    console.log("MODAL CLOSE ", e, action);
    onClose(e, action);
    e.preventDefault();
  };

  //////radio
  // const checkAction = e => {
  //   console.log("CLICK ", e, e.target);
  //   action(`${e.target.id} was clicked`)(e.target.value, e.target.checked);
  // };

  /*
  <div
  style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 600 }}
>
  Title
</div>

*/

  return (
    <React.Fragment>
      <Modal
        isOpen={dialogOpen}
        closeOnEsc={false}
        closeOnOutsideClick={false}
        onClose={onCloseCheck}
        scrollBehavior={"inside"}
        theme={theme}
        size={"806px"}
        {...props}
      >
        <ModalContent
          style={{
            background: "#1D152C",
            width: "806px",
            height: "412px",
            borderRadius: 5,
          }}
          marginLeft="317px"
        >
          {/* <ModalHeader>
            <Text textStyle={"h5"} color={theme.colors.baseError}>
              Title
            </Text>
          </ModalHeader> */}
          <ModalBody paddingLeft="36px" paddingRight="36px" paddingTop="37px">
            <Flex display="flex" flexDirection="row" justifyContent="center">
              <Box>
                <Text textStyle={"semiBold"} fontSize={24} color="white">
                  Create Project
                </Text>
                <Text paddingTop="36px" color="#ADADAD">
                  Project Type
                </Text>
                <Flex width="268px">
                  <Radio
                    // checked
                    value="TABLE"
                    fontSize="14px"
                    onClick={checkAction}
                    color="#AA1370"
                    colorStyle={{ color: "white" }}
                  >
                    Widget
                  </Radio>
                  <Radio
                    // checked
                    value="TABLE"
                    fontSize="14px"
                    onClick={checkAction}
                  >
                    App
                  </Radio>
                </Flex>
                <Text paddingTop="36px" paddingBottom="16px" color="#ADADAD">
                  Project Name
                </Text>
                <Input width="361px" placeholder="Sleep Tracker" />
              </Box>
              <Box paddingLeft="46px">
                <Flex
                  width="331px"
                  height="129px"
                  bg="#61045F"
                  borderRadius="5px"
                  alignItems="center"
                >
                  {/* <Image
                    src={src}
                    height="65px"
                    width="55px"
                    marginLeft="-12px"
                    position="absolute"
                  /> */}
                  <Box paddingLeft="26px">
                    <Text color="white" fontSize={16} paddingBottom="5px">
                      Prifina app ID
                    </Text>
                    <Text color="#ADADAD" fontSize={12}>
                      This unique identifer is needed to connect your
                      application to prifina.
                    </Text>
                    <Text color="#ADADAD" fontSize={12}>
                      Copy it and add it to your build.
                    </Text>
                  </Box>
                </Flex>
                <Text
                  color="#ADADAD"
                  fontSize={12}
                  paddingTop="34px"
                  paddingBottom="4px"
                >
                  App ID
                </Text>
                <Input width="331px" placeholder="Sleep Tracker" />
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex paddingTop="54px">
              <Button
                variation={"outline"}
                colorStyle={"error"}
                onClick={e => {
                  setDialogOpen(false);

                  e.preventDefault();
                }}
                marginLeft="36px"
              >
                <Text>Cancel</Text>
              </Button>
              <Button
                onClick={e => {
                  setDialogOpen(false);

                  e.preventDefault();
                }}
                marginLeft="466px"
              >
                New Project
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

CreateProjectModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
export default CreateProjectModal;
