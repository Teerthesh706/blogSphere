
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Banner = styled(Box)`
  background-image: url(https://i.ibb.co/Y7Lfym2s/final-linkedin-banner.png);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
  display: block;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
      <Box>
        <Banner />
        <Wrapper>
          <Typography variant="h3">Getting in touch is easy!</Typography>
          <Text variant="h5">
            For any suggestion or contribution to this project
            reach out to me on
            <Link
              href="https://github.com/teerthesh706"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/teerthesh706/"
              color="inherit"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            or send me an Email
            <Link
              href={`mailto:teerthesh706@gmail.com?subject=Hello`}
              target="_blank"
              color="inherit"
            >
              <Email />
            </Link>
            .
          </Text>
        </Wrapper>
      </Box>
    );
}

export default Contact;