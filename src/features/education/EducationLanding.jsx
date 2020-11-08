import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
} from "@material-ui/core";
import Image from "react-bootstrap/Image";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  List as ListIcon,
} from "@material-ui/icons";
import styles from "./Education.module.css";
import PageContent from "../displayContent/PageContent";
import Banner from "../displayContent/Banner";
import Contact from "../forms/Contact";
import { selectViewContact } from "../forms/contactSlice";
import Footer from "../footer/Footer";
import AboutPage from "../about/AboutPage";
import Search from "../search/Search";
import { selectCollection, setCollectionAsync } from "../search/searchSlice";
import CollectionList from "../search/CollectionList";
import AddModule from "./AddModule";

export default function EducationLanding() {
  let dispatch = useDispatch();
  let collection = useSelector(selectCollection);
  let [viewHome, setViewHome] = useState(true);
  let [viewAbout, setViewAbout] = useState(false);
  let [viewModules, setViewModules] = useState(false);
  let viewContact = useSelector(selectViewContact);
  let [title, setTitle] = useState("");
  let [dashTitle, setDashTitle] = useState("");
  let [dashParagraph, setDashParagraph] = useState("");
  let [pageContentTitle, setPageContentTitle] = useState("");
  let [pageContentSubTitle, setPageContentSubTitle] = useState("");
  let [pageConentAuthor, setPageContentAuthor] = useState("");
  let [pageContentCategory, setPageContentCategory] = useState("");
  let [pageContentNotes, setPageContentNotes] = useState([{}]);
  let [pageContentParagraphs, setPageContentParagraphs] = useState([]);

  useEffect(() => {
    dispatch(setCollectionAsync("portfolioApp/recipes"));
    let collection = [
      {
        modules: {
          title: "pageContentTitle",
          subTitle: "pageContentSubTitle",
          author: "pageConentAuthor",
          category: "pageContentCategory",
          notes: ["pageContentNotes"],
          paragraphs: ["pageContentParagraphs"],
          lessons: [{}],
          showNavigation: false,
          handleClick: () => {},
          buttonColors: ["#f50057"],
          buttonTitle: "Click me",
          buttonFontColor: "white",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8",
        },
      },
    ];

    localStorage.setItem("collection", collection);
  }, []);
  useEffect(() => {
    if (viewModules) {
      setTitle("Learning Hub - Modules");
      setDashTitle("Dash Modules");
      setDashParagraph(
        "Sunt ut eu ad et culpa excepteur Lorem. Sint excepteur Lorem dolore et nulla Lorem. Ea sit reprehenderit amet do in."
      );
      setPageContentTitle("Modules page content title");
      setPageContentSubTitle("Modules page content sub title");
      setPageContentAuthor("Modules page content author");
      setPageContentCategory("Modules page content category");
      setPageContentNotes([
        {
          title: "page contents title",
          paragraphs: [
            "Laboris laborum mollit non laboris consequat laboris est cillum adipisicing minim aliquip.",
            "Nostrud qui tempor aliquip minim laboris tempor in incididunt veniam nulla fugiat duis.",
          ],
        },
      ]);
      setPageContentParagraphs(["Cillum sint ut ut in."]);
    } else if (viewAbout) {
      setTitle("Learning Hub - About");
      setDashTitle("Dash About");
      setDashParagraph(
        "Enim reprehenderit ea qui nisi. Ullamco ea velit quis occaecat pariatur. Do eiusmod eiusmod adipisicing dolore commodo tempor incididunt. Fugiat aliquip ut exercitation enim minim in laborum mollit qui sit proident mollit voluptate. Aliqua cillum id nulla eiusmod non aute adipisicing aliqua esse sit esse ad ea. Incididunt incididunt irure ea non nostrud cupidatat veniam mollit nostrud adipisicing adipisicing cillum sunt sint. Pariatur ullamco fugiat in id nisi eiusmod nisi et nulla officia ipsum consectetur amet."
      );
      setPageContentTitle("About page content title");
      setPageContentSubTitle("About page content sub title");
      setPageContentAuthor("About page content author");
      setPageContentCategory("About page content category");
      setPageContentNotes([
        {
          title: "page contents title",
          paragraphs: [
            "Laboris laborum mollit non laboris consequat laboris est cillum adipisicing minim aliquip.",
            "Nostrud qui tempor aliquip minim laboris tempor in incididunt veniam nulla fugiat duis.",
          ],
        },
      ]);
      setPageContentParagraphs(["Cillum sint ut ut in."]);
    } else {
      setTitle("Learning Hub - Home");
      setDashTitle("Dash Home");
      setDashParagraph(
        "Et tempor consectetur occaecat non qui pariatur labore. Deserunt ea eiusmod nulla id tempor laboris velit eiusmod labore. Voluptate consequat nisi non sint aute consequat culpa ea fugiat voluptate voluptate esse ullamco non."
      );
      setPageContentTitle("home page content title");
      setPageContentSubTitle("home page content sub title");
      setPageContentAuthor("home page content author");
      setPageContentCategory("home page content category");
      setPageContentNotes([
        {
          title: "page contents title",
          paragraphs: [
            "Laboris laborum mollit non laboris consequat laboris est cillum adipisicing minim aliquip.",
            "Nostrud qui tempor aliquip minim laboris tempor in incididunt veniam nulla fugiat duis.",
          ],
        },
      ]);
      setPageContentParagraphs(["Cillum sint ut ut in."]);
    }
  }, [viewHome, viewAbout, viewModules]);
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid className={styles.title} item>
          {title}
        </Grid>
      </Grid>
      <br />
      <Grid className={styles.landingLayout} container>
        {window.screen.width < 601 ? null : (
          <Grid className={styles.landingItem} item md={8} lg={8} xl={8}>
            <PageContent
              title={pageContentTitle}
              subTitle={pageContentSubTitle}
              author={pageConentAuthor}
              category={pageContentCategory}
              notes={pageContentNotes}
              paragraphs={pageContentParagraphs}
              showNavigation={false}
              handleClick={() => {
                console.log("clicked");
              }}
              buttonColors={["#f50057"]}
              buttonTitle={"Click me"}
              buttonFontColor={"white"}
            />
          </Grid>
        )}
        <Grid
          className={styles.landingItem}
          item
          sm={12}
          xs={12}
          md={4}
          lg={4}
          xl={4}
        >
          <List component="nav" aria-label="main landing folders">
            <ListItem>
              <Search
                placeHolder={"Title of module"}
                resultsPath={"/getResults"}
                collection={collection}
                buttonColor={["#f50057"]}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setViewHome(true);
                setViewAbout(false);
                setViewModules(false);
                setTitle("Learning Hub - Home");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setViewHome(false);
                setViewAbout(true);
                setViewModules(false);
                setTitle("Learning Hub - About");
              }}
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setViewHome(false);
                setViewAbout(false);
                setViewModules(true);
                setTitle("Learning Hub - Modules");
              }}
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Modules" />
            </ListItem>
          </List>

          <Divider />
          <br />
          <br />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid sm={12} xs={12} md={12} lg={12} xl={12} item>
              <div className={styles.title}>
                <em>{dashTitle}</em>
              </div>
              <Paper className={styles.content} elevation={3}>
                {dashParagraph}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* Transition in area below */}
      {viewModules ? (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
            <AddModule />
          </Grid>

          <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
            <CollectionList resultPath={"/getModule"} collection={collection} />
          </Grid>
        </Grid>
      ) : null}
      {viewAbout ? (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
            <AboutPage />
          </Grid>
        </Grid>
      ) : null}
      {viewHome ? (
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
            <PageContent
              title={pageContentTitle}
              subTitle={pageContentSubTitle}
              author={pageConentAuthor}
              category={pageContentCategory}
              notes={pageContentNotes}
              paragraphs={pageContentParagraphs}
              showNavigation={false}
              handleClick={() => {
                console.log("clicked");
              }}
              buttonColors={["#f50057"]}
              buttonTitle={"Click me"}
              buttonFontColor={"white"}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
            <PageContent
              title={pageContentTitle}
              subTitle={pageContentSubTitle}
              author={pageConentAuthor}
              category={pageContentCategory}
              notes={pageContentNotes}
              paragraphs={pageContentParagraphs}
              showNavigation={false}
              handleClick={() => {
                console.log("clicked");
              }}
              buttonColors={["#f50057"]}
              buttonTitle={"Click me"}
              buttonFontColor={"white"}
            />
          </Grid>
        </Grid>
      ) : null}
      {viewContact ? (
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
            <Contact />
          </Grid>
        </Grid>
      ) : null}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Banner
            showBannerContents={true}
            image={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FPortfolioBanner.svg?alt=media&token=11cfcb03-6873-400b-90e2-9929415f6eaf"
            }
            imageHeight={"450px"}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item sm={12} xs={12} md={12} lg={12} xl={12}>
          <PageContent
            title={pageContentTitle}
            subTitle={pageContentSubTitle}
            author={pageConentAuthor}
            category={pageContentCategory}
            notes={pageContentNotes}
            paragraphs={pageContentParagraphs}
            showNavigation={false}
            handleClick={() => {
              console.log("clicked");
            }}
            buttonColors={["#f50057"]}
            buttonTitle={"Click me"}
            buttonFontColor={"white"}
          />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
