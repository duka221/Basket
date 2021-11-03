import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Carditems(props) {
    const deleteItem=(id,cardsave)=>{
        id = props.object.id
        cardsave=props.cardsave
        const remove = cardsave.filter((e)=> e.id !== id)
        props.setCardSave(remove)
        console.log(id)
       }
  return (
    <Card sx={{ maxWidth: 345 }}>
        <center>
            <h4>დამატებული პროდუქტების გვერდი</h4>
        </center>
        
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {props.object.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.object.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.object.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteItem}>კალათიდან წაშლა</Button>
      </CardActions>
    </Card>
  );
}