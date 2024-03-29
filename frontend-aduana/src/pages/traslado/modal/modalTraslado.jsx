import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Modal, TextField, Button, Grid, MenuItem, Select, InputLabel } from '@mui/material';

import { useForm } from 'react-hook-form';

/* import "./ModalEmpresa.css"; */
import api_traslado from '../../../services/traslado';
import api_viaje from '../../../services/viaje';


const StyledModal = {
  position: 'absolute',
  width: '50%',
  backgroundColor: 'white',
  borderRadius: 8,
  padding: 20,
  top: '50%',
  left: '50%',
  bgcolor: 'background.paper',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  transform: 'translate(-50%, -50%)',

}


const StyledTextField = styled(TextField)(({  }) => ({
  width: '100%'

}));

const ModalTraslado = ({ opened, fnBreaker, type, data, render, updateTable }) => {

  const [viajes, setViajes] = useState([]);

  useEffect(() =>{

    const fetchAllViajes = async() =>{
        const data = (await api_viaje.getAll() );

        let dataParsed = data.map((curr)=>(
          {
            idviaje : curr.codigoRuta
          }
        ))     


        setViajes(dataParsed);
    };

    fetchAllViajes();
  }, [])


  console.log(data?.partidaId)

  const { register, handleSubmit,
    formState :{ errors } } = useForm({
      mode : "onBlur",
      defaultValues : {
        codigoTraslado  :  data?.codigoTraslado,
        tipoAlmacen     :  data?.tipoAlmacen,
        naviera         :  data?.naviera,
        codigoRuta      :  data?.codigoRuta,
      
      }

    });
  const onAdd = async(data) => {
    console.log(data);
    await api_traslado.post(data);
    updateTable((prev) => !prev)
    fnBreaker(!opened); render(false); 
  }

  const onUpdate = async(data) => {
    console.log(data);
    await api_traslado.put(data);
    updateTable((prev) => !prev)
    fnBreaker(!opened); render(false); 
  }

  const errorValidMsg = {
    codigoTraslado : {
      required : "El código de traslado es requerido",
      pattern  : "Se debe ingresar un número de cédula, el cuál debe tener 10 dígitos"
    },
    tipoAlmacen : {
      required : "El tipo de almacén",
      pattern  : "La primera letra del nombre debe empezar con mayúscula"
    },
    naviera : {
      required : "La unidad física es requerida",
      pattern  : "Se debe ingresar solo números"
    },
    codigoRuta:{
      required : "La código de ruta es requerido",
      pattern  : "Se debe ingresar solo números"
    },
  }

  const modalType = {
    "add": (<div style={StyledModal} >
      <form onSubmit={ handleSubmit(onAdd) } noValidate>
        <h3>Agregar un traslado</h3>

        <Grid container rowSpacing={{ xs: 2, md: 2 }}
          columnSpacing={{ xs: 1, md: 2 }}
        >
          <Grid item xs={12} md={6}>
            <StyledTextField label="Código de traslado"
              type="text"
              {...register('codigoTraslado',{
                pattern : /^\d{10}$/g,
                required : true
              })}
              
              
               error = { !!errors.codigoTraslado }
               helperText = {errorValidMsg["codigoTraslado"][errors.codigoTraslado?.type]}
            
            />
          
          </Grid>
          
          <Grid item xs={12} md={6}>
            <StyledTextField label="Tipo de almacen"
              type="text"
              {...register('tipoAlmacen',
                {
                  required: true,
                  pattern : /^[A-Za-z0-9\s\-()&,']+$/
                })}
              error = { !!errors.tipoAlmacen }
              helperText = {errorValidMsg["tipoAlmacen"][errors.tipoAlmacen?.type]}
            />
          
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledTextField
              label="Naviera"
              type="text"
              {...register('naviera',
                {
                  required: true,
                  
                })}
              error = { !!errors.naviera }
              helperText = {errorValidMsg["naviera"][errors.naviera?.type]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <StyledTextField select
            label='codigoRuta'  type='text'
            defaultValue=""
            /* SelectProps={{
              native: true,
            }} */

            {...register('codigoRuta',
            {
              required: true
            })}
            error = { !!errors.codigoRuta }
            helperText = {errorValidMsg["codigoRuta"][errors.codigoRuta?.type]}
            >
              {viajes.map((curr) => (
              <MenuItem key={curr.idviaje} value={curr.idviaje}>
                {curr.idviaje}
              </MenuItem>
            ))}

            </StyledTextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <div align="right">
              <Button  
                      type='submit' 
                      color="primary" >Insertar</Button>
              <Button onClick={() =>{fnBreaker(!opened); render(false)}}
              >Cancelar
               </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
    ),
    "update": (<div style={StyledModal} >
      <form onSubmit={ handleSubmit(onUpdate) } noValidate>
        <h3>Editar una traslado</h3>

        <Grid container rowSpacing={{ xs: 2, md: 2 }}
          columnSpacing={{ xs: 1, md: 2 }}
        >
          <Grid item xs={12} md={6}>
            <StyledTextField label="Código de traslado"
              type="text"
              {...register('codigoTraslado',{
                pattern : /^\d{10}$/g,
                required : true
              })}
              
              
               error = { !!errors.codigoTraslado }
               helperText = {errorValidMsg["codigoTraslado"][errors.codigoTraslado?.type]}
               disabled={true}
            />
          
          </Grid>
          
          <Grid item xs={12} md={6}>
            <StyledTextField label="Tipo de almacen"
              type="text"
              {...register('tipoAlmacen',
                {
                  required: true,
                  pattern : /^[A-Za-z0-9\s\-()&,']+$/
                })}
              error = { !!errors.tipoAlmacen }
              helperText = {errorValidMsg["tipoAlmacen"][errors.tipoAlmacen?.type]}
            />
          
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledTextField
              label="Naviera"
              type="text"
              {...register('naviera',
                {
                  required: true,
                  
                })}
              error = { !!errors.naviera }
              helperText = {errorValidMsg["naviera"][errors.naviera?.type]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <StyledTextField 
            label='codigoRuta'  type='text'
            /* defaultValue={data?.codigoRuta} */
            {...register('codigoRuta',
            {
              required: true
            })}
            /* SelectProps={{
              native: true,
            }} */
            error = { !!errors.codigoRuta }
            helperText = {errorValidMsg["codigoRuta"][errors.codigoRuta?.type]}
            disabled = {true}
            >
            {/*   {viajes.map((curr) => (
              <option key={curr.idviaje} value={curr.idviaje}>
                {curr.idviaje} 
              </option>
            ))} */}

            </StyledTextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <div align="right">
              <Button type='submit' color="primary" >Insertar</Button>
              <Button onClick={() =>{fnBreaker(!opened); render(false);}} >Cancelar</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
    )

  }

  

  


  return (
    <Modal
      open={opened}
      onClose={fnBreaker}
    >

      {modalType[type]}

    </Modal>
  )
}

export default ModalTraslado;