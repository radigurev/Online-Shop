import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from "../../../../Button/Button";
import $ from "jquery";

import SubModal from "../../../SubModal/SubModal";

import DataNavigationPanel from "./AddNavigation/AddNavigation";

const columns = [
    { field: 'id', headerName: 'ID',flex: 0.5},
    {
      field: 'firstName',
      headerName: 'First name',
      editable: true,
      flex: 1
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      editable: true,
      flex: 1
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      editable: true,
      flex: 1
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 2,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 123, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

const NavigationList = () => {

const [OpenSubModal,SetOpenSubModal] = useState(true); 

    useEffect(() => {
    
    setTimeout(() => {
        $(".MuiDataGrid-virtualScroller").css("overflow", "hidden");
    }, 500);
    });

    const OpenNewModal = () => {
      SetOpenSubModal(!OpenSubModal);

      let modal = $("#subMainModal");
      let deactivateBackground = $("#sub-deactivate-background");
      let body = $("#mainModal");
  
      if (OpenSubModal) {
            modal.removeClass("hidden");
            deactivateBackground.removeClass("hidden");
            deactivateBackground.animate({opacity: '1'});
            modal.animate({ top: "55%" }, 700);
            body.css({overflow: 'hidden'});      
  
          setTimeout(() => {
            modal.animate({ borderRadius: "15px" }, 900);
          }, 350);
  
          } else {
            modal.animate({ top: "200%" });
            deactivateBackground.animate({opacity: '0'});
  
            setTimeout(() => {
              modal.addClass("hidden");
              deactivateBackground.addClass("hidden");
              modal.css({ borderRadius: "0" });
              body.css({overflow: 'auto'});      
            }, 600);
          }
    }
    
    const DeleteRows = () => {
        
    }

    return (
      <div className="innerContent">
        <Button OnClick={() => OpenNewModal()} color = {'orange'}>New</Button>
        <Button OnClick={() => DeleteRows()} color = {'red'}>Delete</Button>

        <Box sx={{ height: 660, width: "100%" }}>
          <DataGrid
          slots={{ toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <SubModal CloseModal={() => OpenNewModal()} height="40" width = "500px" ><DataNavigationPanel/> </SubModal>
      </div>
    );
};

export default NavigationList;