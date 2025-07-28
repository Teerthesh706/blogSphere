
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';
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

const About = () => {

    return (
      <Box>
        <Banner />
        <Wrapper>
          <Typography variant="h3">
            I'm Teerthesh, a passionate Software Engineer🚀.
          </Typography>
          <Text variant="h5">
            I believe that in today's fast-paced world, learning new
            technologies and expanding our skill set is not only essential but
            also exciting 💻📈. Instead of saying "I can't do it," I choose to
            adopt a "I will learn it" attitude 💪, knowing that the resources
            available to me are limitless 🌟.
            <br />
            My current goal is to become a versatile Software Engineer,
            proficient in various programming languages, including C/C++,
            JavaScript, Python, and in-demand technologies like Machine
            Learning, Web and App Development 🚀. This is my GitHub, visit for
            more fun projects I worked on.
            <Box component="span" style={{ marginLeft: 5 }}>
              <Link
                href="https://github.com/teerthesh706"
                color="inherit"
                target="_blank"
              >
                <GitHub />
              </Link>
            </Box>
          </Text>
          <Text variant="h5">
            Ready to join me on a journey of continuous learning and growth? let's connect on LinkedIn
            <Box component="span" style={{ marginLeft: 5 }}>
              <Link
                href="https://www.linkedin.com/in/teerthesh706/"
                color="inherit"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
            </Box>
            or send me an Email
            <Link
              href="mailto:teerthesh706@gmail.com?Subject=This is a subject"
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

export default About;