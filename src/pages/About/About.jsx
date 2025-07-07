import React from "react";
//styles>>
//mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";

//table mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

//icons mui
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

//react icon
import { IoLogoCodepen } from "react-icons/io5";
//img
import profileImg from "/img/me.png";
import shopping from "/img/shopping.jpg";

// ------------------------------------------------
export default function About() {
  //style mui
  const centerFlex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  // second title
  const title2 = {
    pt: 2,
    textAlign: "justify",
    lineHeight: 1.5,
    direction: "rtl",
    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1rem", lg: "1rem" },
    color: "#c3c3c3",
    "&:hover": {
      color: "#b6bb90",
    },
  };

  // list item style
  const listItem = {
    textAlign: "right",
    lineHeight: 1.8,
    direction: "rtl",
    fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem", lg: "1rem" },
    color: "#b8b7b7",
    "&:hover": {
      color: "#f0f0f0",
    },
  };

  // skills data for table
  const skills = [
    { name: "React", level: "خوب" },
    { name: "JavaScript", level: "خوب" },
    { name: "HTML", level: "عالی" },
    { name: "CSS", level: "عالی" },
    { name: "Redux", level: "متوسط" },
    { name: "zustans", level: "در حال یادگیری" },
    { name: "Git", level: "متوسط" },
    { name: "Material UI", level: "خوب" },
    { name: "Tailmind", level: "متوسط" },
    { name: "Style-component", level: "متوسط" },
    { name: "Sass", level: "متوسط" },
    { name: "mongoDB", level: "متوسط" },
    { name: "json-server", level: "متوسط" },
    { name: "RestFull api", level: "متوسط" },
    { name: "postman", level: "متوسط" },
    { name: "Next.js", level: "در حال یادگیری" },
  ];

  //icon stle
  const iconStyle = {
    fontSize: "6rem",
    color: "#9a9a97",
    marginRight: "1.5rem",
    "&:hover": {
      color: "#cececc",
    },
  };

  //back icon
  const backIcon = {
    color: "#cdcdcd",
    fontSize: "2.5rem",
    "&:hover": {
      color: "#fca311",
    },
  };

  const links = [
    {
      name: "shirin-mardany",
      url: "https://github.com/shirin-mardany",
      icon: <GitHubIcon sx={{ ...iconStyle }} />,
    },
    {
      name: "shirin-mardany",
      url: "https://www.linkedin.com/in/shirin-mardany",
      icon: <LinkedInIcon sx={{ ...iconStyle }} />,
    },
    {
      name: "shirin.mardany@gmail.com",
      url: "mailto:shirin.mardany@gmail.com",
      icon: <EmailIcon sx={{ ...iconStyle }} />,
    },

    {
      name: "tel:09157088678",
      url: "tel:09157088678",
      icon: <PhoneAndroidIcon sx={{ ...iconStyle }} />,
    },
    {
      name: "@shirin_mardany",
      url: "https://t.me/shirin_mardany",
      icon: <TelegramIcon sx={{ ...iconStyle }} />,
    },
    {
      name: "shirin-mardany",
      url: "https://codepen.io/shirin-mardany",
      icon: <IoLogoCodepen style={{ ...iconStyle }} />,
    },
  ];
  // ======================================================
  return (
    <Container
      // dir="rtl"
      maxWidth={false}
      sx={{
        py: 4,
        bgcolor: "#212121",
        minWidth: "400px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          height: "100%",
          ...centerFlex,
        }}
      >
        {/* 🔹 باکس اسم ____________________________________*/}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            p: 4,
            color: "#e0e0e0",
            width: { xs: "100%", sm: "100%", md: "49%" },
            minWidth: "350px",
            height: "450px",
            maxHeight: "500px",
            border: "1px solid #eeeeee",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              ...centerFlex,
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "3rem",
                  lg: "4rem",
                },
              }}
            >
              shirin mardani
            </Typography>
            <Typography variant="h6" gutterBottom>
              Front-End developer
            </Typography>
          </Box>
        </Grid>
        {/* 🔹 باکس عکس _____________________________________*/}

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            border: "1px solid #eeeeee",
            width: "49%",
            minWidth: "350px",
            height: "450px",
            maxHeight: "500px",
            ...centerFlex,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              ...centerFlex,
            }}
          >
            <img
              src={profileImg}
              alt="profile picture"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        {/* 🔹 هدف____________________________________*/}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            border: "1px solid #eeeeee",
          }}
        >
          <Grid item sx={{ color: "#e0e0e0", width: "100%" }}>
            <Box
              sx={{
                p: 4,
                direction: "rtl",
              }}
            >
              <Typography variant="h4" fontWeight="bold" align="right">
                هدف
              </Typography>
              <Typography variant="h6" gutterBottom align="right">
                من یک توسعه‌دهنده‌ی فرانت‌اند در حال رشدم که با اشتیاق و پشتکار،
                مسیر یادگیری را به‌صورت مداوم دنبال می‌کنم. طی دو سال گذشته،
                پایه‌های HTML، CSS و JavaScript را آموخته‌ام و در ماه‌های اخیر،
                با تمرکز جدی بر React و ابزارهای مدرن، شروع به ساخت پروژه‌های
                واقعی کرده‌ام. در حال حاضر دانشجوی رشته نرم‌افزارم و به‌طور
                هم‌زمان، تجربه و مهارت خود را از طریق تمرین پروژه‌محور و یادگیری
                مداوم تقویت می‌کنم. هدف من ورود به تیم‌های حرفه‌ای توسعه
                نرم‌افزار، یادگیری از افراد باتجربه، و رشد در مسیری که به خلق
                تجربه‌های کاربری با کیفیت و قابل اعتماد منجر می‌شود. به دنبال
                فرصتی ام تا با وجود تجربه‌ی محدود، توانایی یادگیری سریع، تعهد به
                پیشرفت، و علاقه‌ام به کدنویسی را در عمل ثابت کنم. مطمئنم در
                محیطی حمایتی، می‌توانم به‌سرعت رشد کنم و عضوی مؤثر برای تیم شما
                باشم.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* 🔹 جدول مهارت ها / لیست پروژه ها / درباره ی من _____________________________________________ */}
        <Grid
          container
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gridTemplateRows: {
              xs: "repeat(3, auto)",
              // sm: "repeat(2, auto)",
              md: "repeat(2, 1fr)",
              lg: "repeat(1, 1fr)",
            },
            width: "100%",
            height: {
              xs: "auto",
              sm: "auto",
              lg: "900px",
            },
          }}
        >
          {/* --------- جدول مهارت ها --------- */}
          <Grid
            item
            xs={12}
            sx={{
              overflow: "scroll",
              border: "1px solid #eeeeee",
              color: "#e0e0e0",
              gridRow: { lg: "span 3" },
            }}
          >
            <Box
              sx={{
                p: 3,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                align="right"
                sx={{
                  mb: 4,
                  fontSize: "1.8rem",
                }}
              >
                مهارت‌ها
              </Typography>
              {/* --------- table >>---------- */}
              <TableContainer //قاب اصلی جدول هست، باعث می‌شه اسکرول‌پذیر بشه
                sx={{
                  mt: 2,
                  bgcolor: "#212121",
                  // border: "1px solid #eeeeee",
                  px: { sm: 5, md: 0 },
                }}
              >
                {/* -------------------------- */}
                {/* aria-label="skills table" => Screen Reader */}
                <Table size="small" aria-label="skills table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={{
                          color: "#e0e0e0",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "1.5rem",
                            sm: "1.5rem",
                            md: "1.8rem",
                            lg: "1.5rem",
                          },
                          pb: 2,
                        }}
                      >
                        مهارت
                      </TableCell>
                      {/* ------------- */}
                      <TableCell
                        align="right"
                        sx={{
                          color: "#e0e0e0",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "1.5rem",
                            sm: "1.5rem",
                            md: "1.8rem",
                            lg: "1.5rem",
                          },
                          pb: 2,
                        }}
                      >
                        سطح
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {/* ------------------- */}
                  <TableBody>
                    {skills.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell align="left" sx={{ color: "#aba8a8" }}>
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#aba8a8",
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.5rem",
                              md: "1.5rem",
                              lg: "1.6rem",
                            },
                          }}
                        >
                          {row.level}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          {/* -------- لیست پروژه ها ---------- */}
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #eeeeee",
              gridRow: {
                xs: "span 1",
                sm: "span 1",
                md: "span 2",
                lg: "span 3",
              },

              color: "#e0e0e0",
              overflow: "scroll",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                align="right"
                sx={{
                  mb: 4,
                  fontSize: "1.8rem",
                }}
              >
                لیست پروژه ها
              </Typography>
              {/* -------------- E-commerce---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="ecommerce"
                  href="#ecommerce-detail"
                  underline="hover"
                  color="inherit"
                >
                  🛒 Full-stack E-commerce Web Application
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h5"> Front End :</Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (React + MUI + Redux + RESTful APIs + React Router + dynamic
                  routing + Swiper + utility functions + custom hooks +
                  responsive design + hot-toast + react-icons + .env )
                </Typography>
              </Box>
              {/* ------ */}
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h5"> Back End : </Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (Node.js + Express + Mongoose + Schema + JWT + bcrypt + cors +
                  dotenv)
                </Typography>
              </Box>
              {/* ----- */}
              <Box sx={{ borderBottom: "2px solid #696868", pb: 2 }}>
                <Typography variant="h5"> Data Base :</Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (MongoDB + Postman)
                </Typography>
              </Box>
              {/* --------------Shopping---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="Shopping"
                  href="#Shopping-detail"
                  underline="hover"
                  color="inherit"
                >
                  Shopping
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  ( Fetch API , فونت فارسی Vazir , Context API , React Icons ,
                  React Bootstrap , React Router DOM , React Router DOM , Vite )
                </Typography>
              </Box>
              {/* --------------Login Form---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="LoginForm"
                  href="#LoginForm-detail"
                  underline="hover"
                  color="inherit"
                >
                  Login Form Project
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h5"> Front End :</Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (HTML + CSS Variables & Animations + Vanilla JavaScript +
                  Fetch API + Responsive Design + Theme Switcher)
                </Typography>
              </Box>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h5"> API :</Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (https://fakestoreapi.com/auth/login)
                </Typography>
              </Box>
              {/* --------------Keyboard---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="Keyboard"
                  href="#Keyboard-detail"
                  underline="hover"
                  color="inherit"
                >
                  Keyboard Project
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h5"> Front End :</Typography>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  Neumorphism style
                </Typography>
              </Box>
              {/* --------------General Project---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="GeneralProject"
                  href="#GeneralProject-detail"
                  underline="hover"
                  color="inherit"
                >
                  General Project
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  HTML, CSS (متغیرهای CSS و انیمیشن)، JavaScript, Responsive
                  Menu, Slider, Dark/Light Mode
                </Typography>
              </Box>
              {/* --------------Simple Blog App---------------- */}
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{
                  color: "#fca311",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                  pt: 2,
                }}
              >
                <Link
                  id="SimpleBlogApp"
                  href="#SimpleBlogApp-detail"
                  underline="hover"
                  color="inherit"
                >
                  Simple Blog App
                </Link>
              </Typography>
              <Box sx={{ borderBottom: "2px solid #696868", p: 2 }}>
                <Typography variant="h6" pt={2} color="#b7b7a4">
                  (React، Vite، json-server، Bootstrap، React-Bootstrap)
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* --------my media---------- */}
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #eeeeee",
              color: "#e0e0e0",
              gridRow: { lg: "span 3" },
              overflow: "scroll",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                }}
              >
                shirin mardani
              </Typography>
              <Box sx={{ width: "100%" }}>
                {links.map(({ name, url, icon }, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ListItemButton
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        // border: "1px solid red",
                        display: "flex",
                        width: "90%",
                        margin: "10px auto",
                        "&:hover": {
                          bgcolor: "#9a9a9717",
                          color: "#fca311",
                        },
                      }}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <Typography>{name}</Typography>
                    </ListItemButton>
                  </Grid>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* 🔹 E-commerce Detaile_____________________________________*/}
        <Box
          id="ecommerce-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              height: "400px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            >
              <source
                src={`${import.meta.env.BASE_URL}film/ecommerce.mp4`}
                type="video/mp4"
              />
            </video>
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              E-commerce
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              این پروژه یک فروشگاه اینترنتی کامل با طراحی ریسپانسیو و تجربه
              کاربری جذاب است که در آن کاربران می‌توانند محصولات را مشاهده، به
              سبد خرید اضافه کرده و با شرط این که قبلا ثبت نام کرده باشند وارد
              سبد خرید خود شوند. در غیر این صورت به وسیله ی react-router به صفحه
              ی login هدایت میشوند . بعد از ثبت نام اطلاعات لازم در localStorage
              ذخیره شده تا کاربر مجبور نباشد با هر بار رفرش شدن صفحه دوباره
              لاگین کند .همچنین در بخش نمایش تمام محصولات با استفاده از ابزار
              فیلتر range قیمت دلخواه را مشخص کنن یا محصولات را به ترتیب دلخواه
              بچینند (sort). در بخش Category میتوانند محصولات را دسته بندی شده
              ببینند. بخش فرانت‌اند به‌صورت کامل توسط من پیاده‌سازی شده و بخش
              بک‌اند با استفاده از node.js از کدهای آماده استفاده شده که ساختار
              کلی آن‌ها را مطالعه کرده‌ام.
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                نمایش بنر اسلایدی تبلیغاتی خودکار : در صفحه اول سایت، یک اسلایدر
                تصویری با استفاده از کتابخانه‌ی Swiper طراحی شده که به‌صورت
                خودکار بنرها را ورق می‌زند.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                اسلایدر خودکار محصولات: بخشی برای نمایش محصولات با کارت‌هایی
                جذاب و امکان اسکرول افقی پیاده‌سازی شده است تا محصولات به صورت
                خودکار نمایش داده شوند.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                طراحی ریسپانسیو با mui: سایت در اندازه‌های مختلف (موبایل، تبلت،
                دسکتاپ) واکنش‌گرا بوده و به‌درستی نمایش داده می‌شود.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                مدیریت حالت (Redux): از Redux برای مدیریت وضعیت کاربر، سبد خرید
                و دیگر داده‌ها استفاده شده است.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                استفاده از MUI: رابط کاربری با استفاده از Material UI طراحی شده
                تا ظاهر پروژه حرفه‌ای‌تر و مدرن‌تر باشد.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                مسیریابی پویا (React Router): صفحات مختلف سایت به‌صورت داینامیک
                با استفاده از React Router مدیریت می‌شوند تا محصولات خواسته شده
                را نمایش دهند.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                Hook‌ها و توابع کمکی سفارشی: از custom hook و utility function
                برای افزایش خوانایی و قابلیت استفاده مجدد از کد استفاده شده است.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                Toast اعلان رویدادها: با استفاده از کتابخانه hot-toast، پیام‌های
                موفقیت یا خطا به‌صورت زیبا به کاربر نمایش داده می‌شود.
              </ListItem>

              <ListItem sx={{ ...listItem, display: "list-item" }}>
                ساختار امن بک‌اند: در بک‌اند از Node.js + Express + MongoDB برای
                مدیریت داده‌ها استفاده شده و JWT برای احراز هویت، bcrypt برای
                رمزنگاری پسوردها و dotenv برای امنیت داده‌های محیطی به کار رفته
                است. (کدنویسی بک‌اند توسط من انجام نشده، اما ساختار آن را بررسی
                و مطالعه کرده‌ام.)
              </ListItem>
            </List>
            {/* back icon */}
            <ListItemButton
              component="a"
              href="#ecommerce"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
        {/* 🔹 Shopping Cart_____________________________________*/}
        <Box
          id="Shopping-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              height: "400px",
            }}
          >
            <img
              src={shopping}
              alt="shopping"
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            />
            {/* <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/film/v.mp4" type="video/mp4" />
            </video> */}
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              فروشگاه آنلاین - Shopping Cart
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              این پروژه یک فروشگاه اینترنتی ساده و تک‌صفحه‌ای (SPA) است که با
              React و ابزارهای مدرن فرانت‌اند پیاده‌سازی شده. کاربران می‌توانند
              محصولات را مشاهده، به سبد خرید اضافه و سفارش خود را ثبت کنند. رابط
              کاربری با استفاده از Bootstrap و استایل‌های سفارشی طراحی شده و
              کاملاً ریسپانسیو است. مدیریت وضعیت سبد خرید با Context API انجام
              می‌شود. داده‌ها در MongoDB ذخیره شده‌اند و ارسال سفارش از طریق
              Fetch به یک API صورت می‌گیرد. کدهای مربوط به بخش بک‌اند از منابع
              آماده استفاده شده‌اند، اما اتصال دقیق بین فرانت‌اند و API توسط من
              طراحی و پیاده‌سازی شده است.
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                افزودن هر محصول به سبد خرید
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                مشاهده سبد خرید در مودال وافزایش یا کاهش تعداد هر محصول همچنین
                حذف محصول از سبد خرید
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                محاسبه و نمایش جمع کل قیمت سبد خرید به کمک context
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                دکمه ثبت سفارش و ارسال اطلاعات کامل سبد خرید به API (از طریق
                Fetch)
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                نمایش پیام موفقیت (Success Message) پس از ثبت سفارش
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                طراحی کامل ریسپانسیو (سازگار با موبایل و دسکتاپ)
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                در بک‌اند از Node.js + Express + MongoDB برای مدیریت داده‌ها
                استفاده شده
              </ListItem>
            </List>
            {/* back icon */}
            <ListItemButton
              component="a"
              href="#Shopping"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
        {/* 🔹    Login Form_____________________________________*/}
        <Box
          id="LoginForm-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              width: "100%",

              height: "400px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            >
              src={`${import.meta.env.BASE_URL}film/ecommerce.mp4`}
            </video>
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              Login Form
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              در این پروژه یک فرم لاگین طراحی و پیاده‌سازی کرده‌ام که علاوه‌بر
              طراحی ظاهری حرفه‌ای، قابلیت اتصال به API و تغییر تم تاریک/روشن را
              داراست. ظاهر پروژه کاملاً واکنش‌گرا بوده و از انیمیشن‌های CSS برای
              زیبایی بصری استفاده شده است. این پروژه با جاوااسکریپت خالص
              (Vanilla JS) توسعه یافته است
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                فرم لاگین واکنش‌گرا: طراحی فرم ورود با ظاهری زیبا، انیمیشن در
                فیلدها و ساختاری مناسب برای تجربه کاربری بهتر.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                اتصال به API واقعی: با استفاده از Fetch API، اطلاعات ورودی
                کاربران به سرویس fakestoreapi.com ارسال شده و توکن دریافتی نمایش
                داده می‌شود.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                تغییر تم تاریک/روشن: یک دکمه برای سوییچ بین حالت تاریک و روشن
                طراحی شده که به‌صورت زنده رنگ‌های قالب را با استفاده از CSS
                Variables تغییر می‌دهد.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                پس‌زمینه متحرک (Blob Animation): طراحی پس‌زمینه‌ی انیمیشنی با
                استفاده از گرادیانت و keyframes برای ایجاد جلوه‌ای زنده و مدرن.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                نمایش پیام خطا: در صورت بروز خطا در اتصال به API، پیام مناسبی به
                کاربر نمایش داده می‌شود.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                بدون استفاده از فریم‌ورک (Vanilla JS): تمام عملکردهای فرمی و
                تعاملات با DOM تنها با جاوااسکریپت خالص پیاده‌سازی شده‌اند، بدون
                استفاده از فریم‌ورک یا کتابخانه‌ی خارجی.
              </ListItem>
            </List>
            {/* back icon */}
            <ListItemButton
              component="a"
              href="#LoginForm"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
        {/* 🔹   keyboard____________________________________*/}
        <Box
          id="Keyboard-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              width: "100%",

              height: "400px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            >
              src={`${import.meta.env.BASE_URL}film/ecommerce.mp4`}
            </video>
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              Keyboard Project
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              این پروژه یک کیبورد مجازی است که با فشردن کلیدهای واقعی کیبورد،
              همان کلید در UI هایلایت شده و حرف مربوطه در باکس بالا نمایش داده
              می‌شود. این پروژه با هدف تمرین مدیریت رویدادها در DOM و پیاده‌سازی
              تعامل زنده بین ورودی کاربر و ظاهر صفحه ساخته شده است.
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                با استفاده از addEventListener برای رویدادهای keydown و keyup،
                دکمه‌ی مربوط به کلید فشرده‌شده در UI هایلایت می‌شود و پس از رها
                کردن، به حالت اولیه برمی‌گردد.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                هر کلیدی که توسط کاربر فشرده شود، به‌صورت زنده در باکس نمایش
                بالای صفحه ثبت می‌شود.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                طراحی UI نئومورفیک (Neumorphism): دکمه‌ها و محیط پروژه با
                استفاده از سایه‌های داخلی و بیرونی طراحی نئومورفیک دارند که حس
                عمق و نرمی را به طراحی می‌دهند.
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                ساختار تمیز و ماژولار: کد جاوااسکریپت و CSS به شکلی تمیز و خوانا
                نوشته شده تا امکان گسترش یا تغییر آسان‌تر باشد.{" "}
              </ListItem>

              <ListItem sx={{ ...listItem, display: "list-item" }}>
                طراحی واکنش‌گرا: این پروژه در صفحه‌نمایش‌های مختلف به درستی
                نمایش داده می‌شود و از flexbox برای چیدمان استفاده شده است.
              </ListItem>
            </List>
            {/* back icon */}
            <ListItemButton
              component="a"
              href="#Keyboard"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
        {/* 🔹  General Project____________________________________*/}
        <Box
          id="GeneralProject-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              width: "100%",

              height: "400px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            >
              src={`${import.meta.env.BASE_URL}film/ecommerce.mp4`}
            </video>
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              // border: "2px solid #b8bab9",
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              General Project
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              این پروژه یک وبسایت تقریبا کامل با نام فرضی General Project است .
              طراحی وب سایت با هدف نمایش حرفه ای المان های مختلف سایت است . این
              پروژه دارای طراحی جذاب با استفاده از متغیر های css و انیمیشن ها و
              ریسپانسیو است . همچنین قابلیت تغییر حالت Dark/Light و اسلایدر
              تعاملی برای نمایش عکس ها دارد.
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                ریسپانسیو کامل برای دستگاه‌های مختلف با استفاده از Media Queries
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                استفاده از Root Variables در CSS برای کنترل رنگ‌ها و فونت‌ها در
                کل پروژه
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                {" "}
                انیمیشن‌های روان برای رنگ و border با استفاده از @keyframes
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                {" "}
                منوی تعاملی با آیکون فلش که در موبایل فعال می‌شود
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                حالت (Dark/Light) برای یکی از بخش های پروژه‌
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                اسلایدر عکس که با کلیک فعال می‌شود و تغییر سایز می‌دهد
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                ساختار کد مرتب و ماژولار با استفاده از JavaScript ساده و تمیز{" "}
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                پیاده‌سازی شده فقط با HTML, CSS, JS بدون استفاده از فریم‌ورک{" "}
              </ListItem>
            </List>
            {/* back icon */}
            <ListItemButton
              component="a"
              href="#GeneralProject"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
        {/* 🔹  Simple Blog App ____________________________________*/}
        <Box
          id="SimpleBlogApp-detail"
          sx={{
            padding: 1,
            border: "1px solid #eeeeee",

            width: "100%",
          }}
        >
          {/* -----video----- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              width: "100%",

              height: "400px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                border: "1px solid #eeeeee",
                borderRadius: "12px",
                maxHeight: "100%",
                padding: "10px",
              }}
            >
              src={`${import.meta.env.BASE_URL}film/ecommerce.mp4`}
            </video>
          </Box>
          {/* --- content --- */}
          <Box
            sx={{
              padding: 2,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                borderBottom: "2px solid #696868",
                pb: 2,
                color: "#618574",
              }}
            >
              Simple Blog App
            </Typography>

            {/* ---------------- */}
            <Typography variant="h2" sx={{ ...title2 }}>
              این پروژه یک وبلاگ ساده و واکنش‌گرا (SPA) است که با استفاده از
              React و ابزارهای مدرن توسعه مانند Vite و json-server ساخته شده
              است. در این وب‌اپلیکیشن، لیستی از پست‌ها در یک سایدبار نمایش داده
              می‌شود و با کلیک روی هر پست، جزئیات کامل آن همراه با کامنت‌های
              مربوطه در سمت دیگر صفحه نمایش داده می‌شود. این پروژه به‌عنوان یک
              نمونه ابتدایی برای تمرین مفاهیم React طراحی شده و ساختاری ماژولار،
              ساده و قابل گسترش دارد. از props برای انتقال داده بین کامپوننت‌ها
              استفاده شده و API فیک json-server برای مدیریت داده‌ها به‌کار رفته
              است. در نسخه‌های پیشرفته‌تر می‌توان این ساختار را با استفاده از
              Context API بهبود داد.
            </Typography>
            <List
              sx={{
                // mt: 2,
                color: "#e0e0e0",
                direction: "rtl",
                listStyleType: "disc",
                borderBottom: "2px solid #696868",
              }}
            >
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                نمایش لیست پست‌ها در سایدبار
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                نمایش جزئیات هر پست و کامنت‌های مربوطه با کلید روی نام او در
                سایدبار
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                رابط کاربری کاملاً واکنش‌گرا (responsive) با Bootstrap
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                استفاده از props برای ارتباط بین کامپوننت‌ها
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                مدیریت وضعیت با هوک‌های useState و useEffect
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                دریافت داده‌ها با fetch/axios از json-server
              </ListItem>
              <ListItem sx={{ ...listItem, display: "list-item" }}>
                استفاده از فونت فارسی Vazir برای تجربه کاربری بهتر
              </ListItem>
            </List>
            <ListItemButton
              component="a"
              href="#SimpleBlogApp"
              sx={{
                display: "flex",
                width: "90%",
                margin: "10px auto",
              }}
            >
              <KeyboardDoubleArrowUpIcon
                sx={{
                  ...backIcon,
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
