import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddMovie = ({handleAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [rate, setRate] = useState(0)
    const [url, setUrl] = useState()
    const handleSubmit = (e) => {
      e.preventDefault()
        const newMovie={
            id:Math.random(),
            title:title,
            description,
            rate,
            posterUrl:url

        }
        if(title && description && rate && url)
        { handleAdd(newMovie)
        setTitle('')
    setUrl()
    setRate(0)
    setDescription('')
    }
    else {
        alert('empty')
    }
    }
    
    return (
        <div>
              <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  onSubmit={handleSubmit}>
                Title: <input type="text" placeholder='movie title' className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/>
                Description: <input type="text" placeholder='movie description' className='form-control'onChange={(e)=>setDescription(e.target.value)} value={description}/>
                PosterUrl: <input type="url" placeholder='movie url' className='form-control'onChange={(e)=>setUrl(e.target.value)} value={url}/>
                Rate: <input type="number" placeholder='movie rate' className='form-control'onChange={(e)=>setRate(e.target.value)} value={rate}/>
                <Button variant="primary" onClick={handleClose} type='submit'>
            Add
          </Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
