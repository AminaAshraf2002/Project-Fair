import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

const ProjectCard = ({displayData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow} className='shadow btn'>
      <Card.Img variant='top' height={'200px'} src=''/>
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGDoc77aGK0C-pOz1nSCufIKvPES0hMtSOA&s" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6><span className='fw-bolder'>Language Used :</span> <span className='text-danger'>React
              </span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview :</span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo error nemo assumenda totam asperiores, maxime </p>
            </div>
          </div>
          <div className="float-start mt-2">
            <a href="https://github.com/AminaAshraf2002/Calculator" target='_blank' className='btn btn-secondary'><i className="fa-brands fa-github"></i>
            </a>
            <a href="http://localhost:5173/" target='_blank' className='btn btn-secondary ms-2'><i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default ProjectCard