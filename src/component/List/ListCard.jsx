import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import imgSrc from '../../img/cards/043_Kesra_png.png';
import WaterLogoSrc from '../../img/Water_1.png';
import styled from 'styled-components';

const WaterLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const CumProductionWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default function FailityCard({ data /* see data tab */ }) {
  const imgSrc = '../../img/cards/' + String(data.imgSrc) + '.jpg';
  // const imgSrc = 'public/img/cards' + String(data.imgSrc) + '.jpg';
  return (
    <Card style={{ width: '30%', borderRadius: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //   height="140"
          //   image="public\img\cards\043_Kesra.jpg"
          //   src="public\img\cards\043_Kesra.jpg"
          src={imgSrc}
          //   image="src\img\cards\facility_1.PNG"
          alt="facility1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.id} {data.name}
          </Typography>
          <TextWrapper>
            <div>
              <Typography variant="body2" color="text.secondary">
                농축수 순간 유량(LPM) 0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                처리수 순간 유량(LPM) 10
              </Typography>
            </div>
            <CumProductionWrapper>
              <WaterLogo src={WaterLogoSrc}></WaterLogo>
              <Typography variant="body1" color="text.secondary" marginTop={'5px'}>
                현 누적 식수 생산량 7.2 ton
              </Typography>
            </CumProductionWrapper>
          </TextWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
