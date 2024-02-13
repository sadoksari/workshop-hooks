import React , {useState , useEffect , useRef } from "react";

import '../App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'    ;
import Modal from 'react-bootstrap/Modal'  ;

const AddMovie = ( { isOpen ,  onClose , listMovies , add }) => {

   //variable state "dataForm" pour le nouveau Movie
  
   const  [dataForm , setDataForm] = useState ( { id          : "" ,
                                                  title       : "" , 
                                                  description : "" , 
                                                  rate        : "" , 
                                                  posterUrl   : "" ,
                                                  trailer     : ""
                                                })  ;               
 
  /********  la fonction (handleChange) met à jour l'attribut (name) dans l'objet (dataForm) *******/
  const handleChange =(e)=> { 

       const { name , value } = e.target ;

       setDataForm (  { ...dataForm , [name] : value  }) ;

  }

   const insertMovie = (e) => { 
   
        //inserer le nouveau movie dans la liste des movies
        add( dataForm ) ;
      
        // vider les champs de la fenetre de saisie
        setDataForm ( { id          : "" ,
                        title       : "" , 
                        description : "" , 
                        rate        : "" , 
                        posterUrl   : "" ,
                        trailer     : ""
                     })  ; 
        
        //fermer la fenetre de saisie de nouveau movie
        onClose() ;
       
  }    
 
  /*********   affichage de la fenere modal de saisie des nouveau movie   **************/
  return (

   <form onSubmit={ (e)=>insertMovie (e) }>
    
    <Modal show={isOpen} onHide={onClose}>

      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

         {/* 1er champs  */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              placeholder="The title"
              name  = "title"
              value = {dataForm.title}
              onChange={ (e) => handleChange(e) }                
              autoFocus  />             

          </Form.Group>
      
         {/* 2emem champs  */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              placeholder="The Desc.."
              name  = "description"
              value = {dataForm.description}
              onChange={ (e)=> handleChange(e) }              
              autoFocus  />                        

          </Form.Group>

       {/* 3emechamps  */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"                 
              placeholder="The rate.."
              name  = "rate"
              value = {dataForm.rate}
              onChange={ (e)=> handleChange(e) } 
              required = "required"              
              autoFocus  />                        

          </Form.Group>

      {/* 3emechamps  */}

          <Form.Group className="mb-1" controlId="exampleForm.ControlInput4">
            
            <Form.Label>posterUrl</Form.Label>
            <Form.Control
              type="text"                       
              placeholder="The posterUrl.."
              name  = "posterUrl"
              value = {dataForm.posterUrl}
              onChange={(e)=> handleChange(e) }                     
              autoFocus  />                       

          </Form.Group>

      {/* 3emechamps  */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            
            <Form.Label>trailer</Form.Label>
            <Form.Control
              type="text"                       
              placeholder="The trailer.."
              name  = "trailer"
              value = {dataForm.trailer}
              onChange={ (e)=> handleChange(e) }                   
              autoFocus  />                       

          </Form.Group>

        </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="primary" onClick={() => insertMovie()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </form>





   
  );
};  

export default AddMovie ;