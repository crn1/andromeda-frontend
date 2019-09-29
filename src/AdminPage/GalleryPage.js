import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import picture1 from './Images/picture1.jpg';
import picture2 from './Images/picture2.jpg';
import picture3 from './Images/picture3.jpg';
import picture4 from './Images/picture4.jpg';
import picture5 from './Images/picture5.jpg';
import picture6 from './Images/picture6.jpg';
import picture7 from './Images/picture7.jpg';
import picture8 from './Images/picture8.jpg';
import picture9 from './Images/picture9.jpg';
import picture10 from './Images/picture10.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}));


const tileData = [
 {
	 img: picture1,
	 cols: 2,
 },
 {
	 img: picture2,
 },
 {
	 img: picture3,
 },
 {
	 img: picture4,
 },
 {
	 img: picture5,
	 cols: 2,
 },
 {
	 img: picture6,
 },
 {
	 img: picture7,
	 cols: 2,
 },
 {
	 img: picture8,
	 cols: 2,
 },
 {
	 img: picture9,
 },
 {
	 img: picture10,
	 cols: 2,
 },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={4}>
        {tileData.map((tile, index) => (
          <GridListTile key={`image-${index}`} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
