import { AppBar, Toolbar, styled } from '@mui/material'
//components
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`


const Messenger = () => {

    return (
        <>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <LoginDialog />
        </>
    )
}

export default Messenger;