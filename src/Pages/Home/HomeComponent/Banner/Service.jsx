import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SectionTitle from '../../../../Shared/SectionTitle/SectionTitle';
import SectionTitleHome from '../../../../Shared/SectionTitle/SectionTitleHome';

const Service = () => {
  const [service, setService] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get('/service').then(res => {
      console.log(res.data);
      setService(res.data);
    });
  }, []);
  console.log(service);
  return (
    <div className="my-6">
      <SectionTitleHome
        heading="Meet Our Service"
        subHeading="Welcome to our website"
      ></SectionTitleHome>
      {/* <SectionTitle></SectionTitle> */}
      <div className="grid lg:grid-cols-3 grid-cols-1 space-y-6 my-6 gap-5 w-11/12 mx-auto">
        {service.map(item => (
          <div key={item._id}>
            <img className="h-56 w-96" src={item.image} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
{
  /* <Card key={item._id} sx={{ maxWidth: 360, maxHeight: 300 }}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       height="150"
        //       image={item.image}
        //       alt="green iguana"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="div">
        //         {item.title}
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        // </Card> */
}
