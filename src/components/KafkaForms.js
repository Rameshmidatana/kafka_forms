import { Typography, Button, FormControl, FormGroup, styled, Grid, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
<p></p>

const FormContainer = styled(FormGroup)`
width:80%;
margin: 5% auto;
border:1px solid gray;
border-radius: 10px;
padding: 10px;
`

const FormLables = styled(Typography)`
font-weight:bold;
font-size:0.8rem;
`

const KafkaForms = () => {
  const [inputGroups, setInputGroups] = useState([{
    title: "",
    description: ""
  }]);



  const handleAddGroup = () => {
    setInputGroups([...inputGroups, [{
      title: "",
      description: ""
    }]])
  }

  const handleDeleteGroup = (index) => {
    let updatedGroups = [...inputGroups];
    updatedGroups.splice(index, 1);
    setInputGroups(updatedGroups)
  }

  const handleTitleUpdate = (index, e) => {
    let updatedGroups = [...inputGroups];
    updatedGroups[index].title = e.target.value;
    setInputGroups(updatedGroups)
  }
  const handleDescriptionUpdate = (index, e) => {
    let updatedGroups = [...inputGroups];
    updatedGroups[index].description = e.target.value;
    setInputGroups(updatedGroups)
  }

  const handleSubmit = () => {
    console.log("Submitted");
  }
  <form></form>
  return (
    <FormContainer>
      <Typography>Kafka Forms</Typography>
      {inputGroups.length > 0 ?
        inputGroups.map((inputGroup, index) => (
          <Grid key={index} container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={5} md={5}>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label={"Topic Name " + index} variant="outlined" size="small" value={inputGroups[index].title} onChange={(e) => handleTitleUpdate(index, e)} />
              </FormControl>
            </Grid>
            <Grid item xs={5} md={5}>
              <FormControl fullWidth>
                <TextField id="outlined-basic" label={"Topic Description " + index} variant="outlined" size="small" value={inputGroups[index].description} onChange={(e) => handleDescriptionUpdate(index, e)} />
              </FormControl>
            </Grid>
            <Grid item xs={2} md={2}>
              <Button variant="outlined" color="error" size="small" onClick={() => handleDeleteGroup(index)}><DeleteIcon /></Button>
            </Grid>
          </Grid>
        )) : <></>
      }
      <Grid container spacing={2}>
        <Grid item xs={5} md={5} sx={{ margin: "20px" }}>
          <Button variant="contained" size="small" onClick={() => handleAddGroup()}>Add Type</Button>
        </Grid>
        <Grid item xs={5} md={5} sx={{ margin: "20px" }}>
          <Button variant="contained" color="success" disabled={inputGroups.length > 0 ? false : true} size="small" onClick={() => handleSubmit()}>Submit</Button>
        </Grid>
      </Grid>
    </FormContainer>
  )
}

export default KafkaForms;
