import { Box, useTheme, Typography } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequency Asked Questions Page" />

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                Another Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                Third Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                Fourth Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                An 5th Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography color={colors.greenAccent[500]} variant="h5"> 
                A random Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore dolorum eveniet vel dicta voluptas voluptates, totam est debitis a sequi iste necessitatibus repellat vero ut, consectetur alias. Porro, velit.
            Numquam iste earum cum dolorum nisi dignissimos ducimus dolorem ipsa nemo pariatur totam non suscipit culpa, neque temporibus. Dolorum, dignissimos. Eum molestias nisi expedita odit! Quibusdam ipsum dolorum veniam eligendi?
        </AccordionDetails>
    </Accordion>

  </Box>
}


export default FAQ;