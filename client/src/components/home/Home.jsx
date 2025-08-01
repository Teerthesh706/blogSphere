
import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
      <>
        <Banner />
        <Grid
          container
          sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          <Grid item lg={2} sm={2} xs={12} sx={{ gridColumn: "1 / 3" }}>
            <Categories />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={10}
            lg={10}
            sx={{ gridColumn: "3 / 13" }}
           >
            <Posts />
          </Grid>
        </Grid>
      </>
    );
}

export default Home;