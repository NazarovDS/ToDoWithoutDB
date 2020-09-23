import {createUseStyles} from "react-jss";

export const styles = createUseStyles({
    container: {
        width: "50%",
        height: "calc(100vh - 100px)",
        margin: "0 auto",
        marginTop: 20,
        minWidth: 500
    },
    createTaskForm:{
        backgroundColor: "white",
        width: 'auto',
        height: "auto",
        boxShadow: '0 0 5px gray',
        padding: 10,
        '& textarea': {
            width: "98%",
            resize: 'none',
            border: 'none',
            height: 100,
            '&:focus':{
                outline: 0
            }
        },
        '& select':{
            marginTop: 10,
            width: "100%",
            height: 35
        },
        '& input':{
            marginTop: 10,
            width: "99%",
            height: 30
        },
        '& button':{
            marginTop: 10,
            width: "100%",
            height: 35,
            border: 'none',
            cursor: "pointer"
        }
    },
    taskCard:{
        marginTop: 20,
        backgroundColor: "white",
        boxShadow: '0 0 5px gray',
        padding: 20,
        height:"auto",
        minHeight: 100,
        position: "relative",
        '& div': {
            padding: 10
        }
    },
    buttonBlock:{
        position: "absolute",
        bottom: 0,
        right: 0,
        '& button':{
            height: 30,
            marginLeft: 10,
            border: 'none',
            cursor: "pointer"
        },
    }
})