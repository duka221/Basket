import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home(props) {
    const addItem=()=>{
        props.setCardSave(array=>[...array,props.object])
        console.log("daemata")
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.object.image}
        alt="green iguana"
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
        <Button size="small" onClick={addItem}>კალათაში დამატება </Button>
      </CardActions>
    </Card>
  );
}