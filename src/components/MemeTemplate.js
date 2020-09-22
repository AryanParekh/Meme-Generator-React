import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles({
    root: {
      maxWidth:1100,
    },
    media: {
        width:400,
        height:400,
    },
  });

export default function MemeTemplate (props) {
    const classes = useStyles();
    if(props.loading){
        return <h2>Loading....</h2>;
    }
    return (
        <div className="col-12 col-md-12 col-xl-12 px-0">
            <Link style={{textDecoration:'none'}} to={`/${props.meme.id}/${props.meme.box_count}`}>
                <Card style={box} className={classes.root}>

                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={props.meme.url}
                        title={props.meme.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {props.meme.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Make Meme
                        </Button>
                    </CardActions>
                    
                </Card>
            </Link>
            <br/><br/>
        </div>
    )
}

const box={
    border:'1px solid black'
}

