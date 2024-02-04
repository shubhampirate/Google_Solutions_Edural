// import * as React from 'react';
import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from '../../Components/listItems';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useAlan from '../../Hooks/useAlan';
import GoogleTranslateComponent from '../../Components/GoogleTranslateComponent';
import SideNavbar from '../../Components/SideNavbar';


const FAQData = [
  {
    question: 'How can I plan for my retirement?',
    answer: 'Planning for retirement involves assessing your financial situation, setting retirement goals, and creating a savings plan. Consider consulting with a financial advisor to develop a comprehensive retirement strategy tailored to your needs and lifestyle.',
  },
  {
    question: 'What are some good investment options for retirees?',
    answer: 'Retirees may consider a mix of low-risk and income-generating investments. Bonds, dividend-paying stocks, and real estate investment trusts (REITs) are popular choices. Diversifying your investment portfolio can help manage risk and provide a steady income stream during retirement.',
  },
  {
    question: 'How can I access health aid programs?',
    answer: 'Accessing health aid programs involves understanding the healthcare services available in your area. Contact your local government health services or explore private healthcare providers. Additionally, check for government-sponsored programs that offer financial assistance for medical expenses.',
  },
  {
    question: 'Are there educational services for retirees?',
    answer: 'Yes, many educational institutions offer programs and courses specifically designed for retirees. Look into local universities, community colleges, and online learning platforms for opportunities to continue learning and pursuing new interests during retirement.',
  },
  {
    question: 'What are the tax implications of retirement withdrawals?',
    answer: 'Withdrawals from retirement accounts may have tax implications. Its crucial to understand the tax rules associated with different retirement accounts, such as 401(k)s and IRAs. Consider consulting with a tax professional to optimize your withdrawal strategy and minimize tax liabilities.',
  },
  {
    question: 'How can I protect my retirement savings from market volatility?',
    answer: 'Protecting your retirement savings from market volatility involves diversifying your investments, regularly reviewing and adjusting your portfolio, and having a long-term investment strategy. Consider consulting with a financial advisor to create a plan that aligns with your risk tolerance and financial goals.',
  },
  {
    question: 'Are there government programs for senior citizens?',
    answer: 'Yes, various government programs provide support and assistance to senior citizens. These programs may include healthcare services, financial aid, and housing assistance. Explore resources offered by federal, state, and local government agencies to determine eligibility and access available benefits.',
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Questions() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} >
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

          }}>
          <Toolbar />
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Frequently Asked Questions</Typography>
            {FAQData.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${index}`} id={`panel-${index}`}>
                  <HelpOutlineIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}