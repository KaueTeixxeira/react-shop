import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from '@mui/material/styles'; // tema branco no input easily

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            setSearch("")
            navigate(`/search?q=${search}`)
        }
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });



    return (
        <AppBar position="static" sx={{
            background: 'linear-gradient(90deg, rgba(36,143,190,1) 0%, rgba(67,58,171,1) 49%, rgba(124,19,158,1) 100%)'
        }}>
            <Container maxWidth="xl">
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Link to={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                p: 1,
                                borderRadius: 4,
                                transitionDuration: ".3s",
                                ":hover": { scale: "1.05", bgcolor: "rgb(224, 224, 224, 0.1)" }
                            }}
                        >
                            REACT-SHOP
                        </Typography>
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <ThemeProvider theme={darkTheme}>
                            <TextField
                                id="search-bar"
                                className="text"
                                onInput={(e) => {
                                    setSearch(e.target.value);
                                }}
                                value={search}
                                label="Search a movie"
                                variant="outlined"
                                placeholder="Search..."
                                size="small"
                                autoComplete='off'
                            />
                        </ThemeProvider>
                    </form>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;