import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const { SearchBar } = Search;

const columns = [
  {
    dataField: "UserId",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "Username",
    text: "Username",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "Password",
    text: "Password",
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "Alamat",
    text: "Alamat",
    sort: true,
    headerStyle: () => {
      return { width: "13%" };
    },
  },
  {
    dataField: "Email",
    text: "Email",
    sort: true,
    headerStyle: () => {
      return { width: "14%" };
    },
  },
  {
    dataField: "NoHp",
    text: "No Hp",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "NoTelp",
    text: "No Telp",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "FotoProfil",
    text: "Foto",
  },
  {
    dataField: "Role",
    text: "Role",
    headerStyle: () => {
      return { width: "8%" };
    },
  },
  {
    dataField: "Link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.UserId}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.UserId}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "UserId",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return{
     Customers: state.Customers.Customers
  }
}


const TableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.Customers}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to="/create">
                  <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faUserPlus} /> Create User
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>
              </Col>
            </Row>

            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
      ;
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
