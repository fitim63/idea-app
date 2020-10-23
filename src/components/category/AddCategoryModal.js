import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  categoryNameAction,
  uploadCategoryAction,
  showAddCategoryModal,
  // uploadCategoryAction
} from "../../redux/actions/categoryactions/uploadCategoryAction";
import ModalFooter from "react-bootstrap/ModalFooter";

const AddCategoryModal = ({ isModalVisible }) => {
  const dispatch = useDispatch();

  return (
    <Modal show={isModalVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Shto kategorine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="category" className="space-between">
            <Row>
              <Col>
                <Form.Label>Emri i kategorise</Form.Label>
              </Col>
              <Col>
                {" "}
                <input
                  type="text"
                  onChange={event =>
                    dispatch(categoryNameAction(event.target.value))
                  }
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="categoryImage">
            <Row>
              <Col>
                <div>
                  <label htmlFor="uploadCategory">Foto</label>
                  <FontAwesomeIcon
                    className="ml-4"
                    size="2x"
                    icon={faImages}
                    color="grey"
                  />
                  <input
                    id="uploadCategory"
                    style={{ display: "none" }}
                    type={"file"}
                    onChange={event => dispatch(uploadCategoryAction(event))}
                  />
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter>
        <Button
          variant="secondary"
          onClick={() => dispatch(showAddCategoryModal(false))}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(showAddCategoryModal(false));
            dispatch(uploadCategoryAction());
          }}
        >
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddCategoryModal;
