// AppHeader.js
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function AppHeader({ isUpload, setUpload }) {
    const fileInputRef = useRef(null);

    const handleUpload = () => {
        console.log("inside handleUpload=>")
        setUpload(true);
        console.log(isUpload);
    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Course Builder</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            + ADD
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Create a Module </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Add a Link</Dropdown.Item>
                            <Dropdown.Item onClick={handleUpload}>
                                Upload a File
                                <input
                                    ref={fileInputRef}
                                    type='file'
                                    style={{ display: 'none' }}
                                    onChange={(e) => console.log('Selected file:', e.target.files[0])}
                                />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
