import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import '../styles/Projectstab.css';

const Tab = ({ label, isActive, onClick }) => (
  <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

const TabContent = ({ children }) => (
  <div className='tab-content'>{children}</div>
);

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allProjects = [
    {
      id: 1,
      name: 'Project Alpha',
      owner: 'Alice',
      team: 'Development',
      status: 'On-Going',
      updated: '1 day ago',
    },
    {
      id: 2,
      name: 'Project Beta',
      owner: 'Bob',
      team: 'Marketing',
      status: 'Completed',
      updated: '2 weeks ago',
    },
    {
      id: 3,
      name: 'Project Gamma',
      owner: 'Charlie',
      team: 'Support',
      status: 'On-Hold',
      updated: '3 days ago',
    },
    {
      id: 4,
      name: 'Project Delta',
      owner: 'David',
      team: 'Finance',
      status: 'On-Going',
      updated: '2 days ago',
    },
    {
      id: 5,
      name: 'Project Epsilon',
      owner: 'Eve',
      team: 'Development',
      status: 'Completed',
      updated: '1 month ago',
    },
    {
      id: 6,
      name: 'Project Zeta',
      owner: 'Frank',
      team: 'HR',
      status: 'On-Hold',
      updated: '1 week ago',
    },
  ];

  const ongoingProjects = allProjects.filter(
    (project) => project.status === 'On-Going'
  );
  const completedProjects = allProjects.filter(
    (project) => project.status === 'Completed'
  );
  const onHoldProjects = allProjects.filter(
    (project) => project.status === 'On-Hold'
  );

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, headerAlign: 'center' },
    { field: 'name', headerName: 'Project Name', flex: 2, headerAlign: 'left' },
    { field: 'owner', headerName: 'Owner', flex: 1, headerAlign: 'center' },
    { field: 'team', headerName: 'Team', flex: 1, headerAlign: 'center' },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      headerAlign: 'center',
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === 'On-Going'
              ? 'primary'
              : params.value === 'On-Hold'
              ? 'warning'
              : 'default'
          }
        />
      ),
    },
    {
      field: 'updated',
      headerName: 'Last Updated',
      flex: 1,
      headerAlign: 'center',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      headerAlign: 'center',
      renderCell: () => (
        <div className='action-icons'>
          <div className='menuicon'>
            <i className='fi fi-rr-eye'></i>
          </div>
          <div className='menuicon'>
            <i className='fi fi-rr-clone'></i>
          </div>
          <div className='menuicon'>
            <i className='fi fi-rr-trash'></i>
          </div>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      label: 'On-Going',
      content: (
        <DataGrid
          rows={ongoingProjects}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          sx={{
            '& .MuiDataGrid-root': {
              width: '100%',
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#d0d0d0',
            },
            '& .MuiDataGrid-cell[data-field="name"]': {
              textAlign: 'left',
            },
            '& .MuiDataGrid-columnHeaderTitle[data-field="name"]': {
              textAlign: 'left',
            },
          }}
        />
      ),
    },
    {
      label: 'Completed',
      content: (
        <DataGrid
          rows={completedProjects}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          sx={{
            '& .MuiDataGrid-root': {
              width: '100%',
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#d0d0d0',
            },
            '& .MuiDataGrid-cell[data-field="name"]': {
              textAlign: 'left',
            },
            '& .MuiDataGrid-columnHeaderTitle[data-field="name"]': {
              textAlign: 'left',
            },
          }}
        />
      ),
    },
    {
      label: 'On-Hold',
      content: (
        <DataGrid
          rows={onHoldProjects}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          sx={{
            '& .MuiDataGrid-root': {
              width: '100%',
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              textAlign: 'center',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#d0d0d0',
            },
            '& .MuiDataGrid-cell[data-field="name"]': {
              textAlign: 'left',
            },
            '& .MuiDataGrid-columnHeaderTitle[data-field="name"]': {
              textAlign: 'left',
            },
          }}
        />
      ),
    },
  ];

  return (
    <div className='projectslist'>
      <h3>Your Projects</h3>
      <div className='Projectstab'>
        <div className='tabs'>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <TabContent>{tabs[activeTab].content}</TabContent>
      </div>
    </div>
  );
};

export default ProjectTabs;
