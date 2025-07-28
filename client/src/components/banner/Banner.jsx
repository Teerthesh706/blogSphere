
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #305cde;
  font-family: "Playwrite AU QLD", cursive;
  font-weight: 400;
  line-height: 1;
  background: #ffffff;
  margin: 2%;
  padding: 20px;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #9cdced;
  color: #305cde;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>blogSphere</Heading>
            <SubHeading>This is a Blog website</SubHeading>
        </Image>
    )
}

export default Banner;